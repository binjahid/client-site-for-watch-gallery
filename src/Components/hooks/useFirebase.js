import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeFirebase from "../Firebase/Firebase.init";
InitializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const registerUser = (email, password, history, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const { user } = res;
        updateProfile(user, { displayName: name });
        saveToDb(email, name);
        history.push("/");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const loginUser = (email, password, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const { user } = res;
        setUser(user);
        history.push("/");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //check is admin
  useEffect(() => {
    fetch(`https://nameless-earth-19656.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  // usre Observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  const LogOut = () => {
    signOut(auth).then(setUser({})).catch(console.log("error"));
  };

  const saveToDb = (email, name) => {
    const user = {
      email,
      name,
    };
    fetch("https://nameless-earth-19656.herokuapp.com/users/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  return { user, registerUser, loginUser, LogOut, isLoading, admin };
};

export default useFirebase;
