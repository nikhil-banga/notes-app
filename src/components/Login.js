import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [cred, setCred] = useState({email: "",password:""})
    let Navigate = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        
        // fetch("http://localhost:5000/api/auth/login")
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
    <form  onSubmit={handleSubmit}>
      <h3>Login Here</h3>
      
      <div className="form-group mt-3 mb-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          value={cred.email}
          placeholder="Enter email"
          onChange={onChange}
        />
        
      </div>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={cred.password}
          placeholder="Password"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" >
        Submit
      </button>
    </form>
  );
};

export default Login;
