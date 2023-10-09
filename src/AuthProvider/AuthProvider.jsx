import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import PropTypes from "prop-types";
import auth from "../Config/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [teams, setTeams] = useState([])
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  useEffect(() => {
    fetch("/team.json")
      .then((response) => response.json())
      .then((data) => setTeams(data));
  }, []);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password )=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut =()=>{
    setLoading(true)
    signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
  }, []);
console.log("user",user);
// console.log(33, user);

  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    userSignIn,
    logOut,
    services,
    teams
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
