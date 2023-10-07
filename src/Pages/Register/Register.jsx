import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(authContext);

  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        alert(error.message);
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
              placeholder="Enter Password"
              className="input input-bordered rounded"
              required
            />
          </div>
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
