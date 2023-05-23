import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [cred, setCred] = useState({name: "",email: "",password:"",cpassword:""})
    let Navigate = useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    
    const {name,email,password} = cred;
    
    
    
    // fetch("http://localhost:5000/api/auth/createuser")
    // const {name,email,password,cpassword} = cred;
    const respose = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,password }),
        }
        );
        const json = await respose.json();
        console.log(json)
        if(json.success){
          //save the auth token and redirect
          localStorage.setItem('token',json.authtoken);
          Navigate('/')
          props.showAlert("Account Created Successfully.","success")
        }
        else{
          props.showAlert("Invalid Details","danger")
        }
      
    }
    const onChange = (e)=>{
        e.preventDefault();
          setCred({...cred, [e.target.name]: e.target.value})
        
    }
    
  
  return (
    <>
      <form onSubmit={handleSubmit} className="container mx-auto p-8">
        <p className="text-3xl font-semibold mb-4">Create Your Account</p>
        <div class="mb-6">
          <label
            htmlFor="name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nikhil Banga"
            required
          />
        </div>
        <div class="mb-6">
          <label
            htmlFor="email"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="nikhil@aapkenotes.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            htmlFor="password"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            placeholder="Password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div class="mb-6">
          <label
            htmlFor="cpassword"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="cpassword"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={onChange}
            minLength={5}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>

        <button
          type="submit"
          class="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
