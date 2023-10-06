import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-1 bg-blue-400 h-full flex justify-center items-center">
        <h2 className="text-3xl font-bold">Welcome back</h2>
      </div>
      <div className="flex-1">
        <form className="card-body w-3/4 mx-auto">
            <h3 className="text-xl font-semibold">Log In</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg ">Email Address</span>
            </label>
            <input
              type="email"
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
              placeholder="Enter Password"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded">Login</button>
          </div>
        <h2 className="mt-2">Do not have any account? <Link to="/register"><button className="btn-link">Register</button></Link></h2>
        <FcGoogle/>
        </form>
      </div>
    </div>
  );
};

export default Login;
