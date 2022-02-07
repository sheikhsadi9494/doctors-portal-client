import { Alert, CircularProgress } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import useAuth from "../../../../hook/useAuth";

const CheackOutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { price, patientName, _id } = appointment;
  const [error, setError] = useState("");
  const [clientSecrect, setClientSecret] = useState("");
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    fetch("https://morning-depths-55912.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setError("");
    } else {
      setError("");
      console.log(paymentMethod);
    }

    //payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecrect, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess(false);
    } else {
      setError("");
      console.log(paymentIntent);
      setSuccess(true);
      setProcessing(false);
      // save data to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentIntent?.card?.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `https://morning-depths-55912.herokuapp.com/appointments/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <button type="submit" disabled={!stripe || success === true}>
            Pay ${price}
          </button>
        )}
      </form>
      {error && (
        <Alert sx={{ mx: 12, my: 3 }} severity="error">
          {error}
        </Alert>
      )}
      {success === true && (
        <Alert sx={{ mx: 12, my: 3 }} severity="success">
          payment successfull !
        </Alert>
      )}
    </div>
  );
};

export default CheackOutForm;
