import { useNavigate } from "react-router";

function Createblog() {
    const navigate=useNavigate();
    return (
      <div className="Signup-App">
        <h1>Publish Your Passions, Your Way</h1>
        <h4>Create a unique and beautiful blog.It's easy and free.</h4>
        <button className="signup-btn" onClick={()=>navigate("/signup")}>Signup</button><br/>
        <br/>
        
        <button className="signup-btn" onClick={()=>navigate("/signin")}>Signin</button>
      </div>
    );
  }
  
  export default  Createblog;