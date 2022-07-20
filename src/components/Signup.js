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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Create Your Account</h3>
        <div className="mt-3 mb-3">
          <label htmlFor="name" className="form-label">
            Name:-
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name = "name"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:-
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name = "email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:-
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name = "password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password:-
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name = "cpassword"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
