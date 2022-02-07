import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import initailizeAuthentication from "../pages/Login/Firebase/Firebase.init";

initailizeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const handleRegister = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //send data to server
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`https://morning-depths-55912.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const handleLogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://morning-depths-55912.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    token,
    handleRegister,
    handleLogin,
    handleLogOut,
    isLoading,
    authError,
    signInWithGoogle,
  };
};

export default useFirebase;
