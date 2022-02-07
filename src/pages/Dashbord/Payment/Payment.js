import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheackOutForm from "./CheackOut/CheackOutForm";

const stripePromise = loadStripe(
  "pk_test_51KOF7XJYAZE8I5Lmwy94ic8aF82ml8Dad6cRtkaYWGo9I8dxsExcVomVG26vfeFXND1R3FhtCEv0gpWsDulTsjFa00LVrhzYwe"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    fetch(
      `https://morning-depths-55912.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);

  return (
    <div>
      <h2>
        Please {appointment.patientName} pay for: {appointment.serviceName}
      </h2>
      <h3>price: ${appointment.price}</h3>
      <p>payment date: {appointment.date}</p>
      {appointment.price && (
        <Elements stripe={stripePromise}>
          <CheackOutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
