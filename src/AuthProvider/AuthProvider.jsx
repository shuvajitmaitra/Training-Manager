import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  const authInfo = {
    services,
  };
  return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
