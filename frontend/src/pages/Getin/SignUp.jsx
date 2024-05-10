import React, { useState } from "react";
import axiosInstance from "../../utils/axiosinstance";
import { validateEmail } from "../../utils/helper";
import Dashboard from "./Dashboard";

const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [enrollement_id, setenrollement_id] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Submitting sign-up form...");
    console.log("Submitting sign-up form...");
    console.log("Email:", email);
    console.log("Enrollment Number:", enrollement_id);
    console.log("First Name:", first_name);
    console.log("Last Name:", last_name);
    console.log("Password:", password);

    if (!first_name) {
      setError("please enter your name");
      return;
    }
    if (!last_name) {
      setError("please enter your name");
      return;
    }
    if (!enrollement_id) {
      setError("please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");

    //signup API call
    try {
      const response = await axiosInstance.post("./avlokan/college-user", {
        email: email,
        enrollement_id: enrollement_id,
        first_name: first_name,
        last_name: last_name,
        password: password,
      });
      console.log("API call successful. Response:", response.data);
      setSignedUp(true);
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  if (signedUp) {
    // Redirect to dashboard
    return <Dashboard />;
  }

  return (
    <>
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />{" "}
                  </svg>
                </div>
                <span className="ml-4">Sign Up with Google</span>
              </button>
            </div>
            <div className="my-4 border-b text-center leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or sign up with e-mail
            </div>
            <form className="mx-auto max-w-xs" onSubmit={handleSignUp}>
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                type="text"
                placeholder="enrollment number"
                value={enrollement_id}
                onChange={(e) => setenrollement_id(e.target.value)}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                type="text"
                placeholder="first Name"
                value={first_name}
                onChange={(e) => setfirst_name(e.target.value)}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                type="text"
                placeholder="last Name"
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy={7} r={4} />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Sign Up</span>
              </button>
              <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                Already have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-red-600 hover:underline hover:underline-offset-4"
                >
                  Back to Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
