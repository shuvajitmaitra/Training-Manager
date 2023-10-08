import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {
  const { createUser } = useContext(authContext);
const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&`#^(){}.])[0-9a-zA-Z@$!%*?&`#^(){}.]{6,}$/;

    if (!regExp.test(password)) {
   
      return setError("Invalid password");
    }
    setError("");
    e.target.reset();
    createUser(email, password)
    .then(() => {
      Swal.fire(
        'The Internet?',
        'Login successfully!',
        'success'
      )
      navigate("/")
    })
    .catch((error) => {
      Swal.fire(
        'The Internet?',
        `${error.message}`,
        'success'
      )
  
    });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-1 bg-blue-400 h-full flex justify-center items-center">
        <h2 className="text-3xl font-bold">Welcome back</h2>
      </div>
      <div className="flex-1">
        <form
          onSubmit={handleRegisterBtn}
          className="card-body w-3/4 mx-auto"
        >
          <h3 className="text-xl font-semibold">Registration</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg ">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleEmail}
              placeholder="Enter Email"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="password"
              name="password"
              onChange={handlePassword}
              placeholder="Enter Password"
              className="input input-bordered rounded"
              required
            />
          </div>
          <p className="text-red-400">{error}</p>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary rounded"
            >
              Register
            </button>
          </div>
          <h2 className="mt-2">
            Already have an account?{" "}
            <Link to="/login">
              <button className="btn-link">Login</button>
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Register;
