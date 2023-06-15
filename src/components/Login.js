import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  
    const [cred, setCred] = useState({email: "",password:""})
    let Navigate = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        
        // fetch("http://localhost:5000/api/auth/login")
        // const respose = await fetch(
        //   "https://inotebookbynikhil.herokuapp.com/api/auth/login",
        //   {
          const respose = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: cred.email,password: cred.password}),
            }
            );
            const json = await respose.json();
            console.log(json)
            if(json.success){
              //save the auth token and redirect
              localStorage.setItem('token',json.authtoken);
              props.showAlert("you are logged in successfully","success")
              Navigate('/')

            }
            else{
              props.showAlert("Invalid Credentials","danger")
            }
          }
        const onChange = (e)=>{
            e.preventDefault();
            setCred({...cred, [e.target.name]: e.target.value})
        }
  return (
    <>
      <form onSubmit={handleSubmit} className="container mx-auto p-8">
        <p className="text-3xl font-semibold mb-4">Login Here</p>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="nikhil@aapkenotes.com"
            value={cred.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={cred.password}
            onChange={onChange}
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
