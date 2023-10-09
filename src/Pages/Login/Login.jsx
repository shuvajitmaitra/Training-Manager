import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { userSignIn , googleSignIn} = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //  authentication call....
    userSignIn(email, password)
      .then(() => {
        Swal.fire(
          'Login successfully!',
          '',
          'success'
        )
        console.log(location.state);
        navigate(location.state ? location.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        Swal.fire(
          "email or password Invalid",
          '',
          'error'
        )
       console.log(error.message);
      });

  };

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(() => {
      Swal.fire(
        'Login successfully!',
        '',
        'success'
      )
      console.log(location.state);
      navigate(location.state ? location.state : "/");
    })
    .catch((error) => {
      Swal.fire(
        `${error.message}`,
        '',
        'error'
      )
     
    });

  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex-1 bg-blue-400 h-full hidden lg:flex justify-center items-center">
        <h2 className="text-3xl font-bold">Welcome back</h2>
      </div>
      <div className="flex-1 mt-32 lg:mt-0">
        <form
          onSubmit={handleSignIn}
          className="card-body md:w-3/4 mx-auto"
        >
          <h3 className="text-xl font-semibold">Log In</h3>
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
            <button className="btn btn-primary rounded">Login</button>
          </div>
          <h2 className="mt-2">
            Do not have any account?{" "}
            <Link to="/register">
              <button className="btn-link">Register</button>
            </Link>
          </h2>
          <div onClick={handleGoogleSignIn} className="text-4xl mt-3 w-full flex items-center justify-center text-black bg-[#A8DF8E] rounded-full py-2">

            <FcGoogle />
            <h2 className="text-xl ml-2">login with Google</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
