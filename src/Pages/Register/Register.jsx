import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../Config/firebase.config";

const Register = () => {
  const { createUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const regExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&`#^(){}.])[0-9a-zA-Z@$!%*?&`#^(){}.]{6,}$/;

    if (!regExp.test(password)) {
      return setError("Invalid password");
    }
    setError("");

    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        Swal.fire("Registration successfully!", "", "success");
        console.log(location.state);
        navigate(location.state ? location.state : "/login");
      })
      .catch((error) => {
        Swal.fire("", `${error.message}`, "error");
      });
    e.target.reset();
  };

  return (
    <div className="flex h-screen justify-center items-center">
      {/* <div className="flex-1 bg-blue-400 h-full hidden lg:flex justify-center items-center">
        <h2 className="text-3xl font-bold">Welcome</h2>
      </div> */}
      <div className="flex-1 mt-32 lg:mt">
        <form
          onSubmit={handleRegisterBtn}
          className="card-body w-full lg:w-1/2 mx-auto"
        >
          <h3 className="text-xl font-semibold">Registration</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg ">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              placeholder="Enter Email"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg ">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
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
