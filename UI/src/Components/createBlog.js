import { useNavigate } from "react-router";

function Createblog() {
  const navigate = useNavigate();
  return (
    <div className="blog-App">
      <h1>Publish Your Passions,Your Way</h1>

      <h4>Create a unique and beautiful blog. It's easy and free.</h4>
      <button className="blog-btn" onClick={() => navigate("/signup")}>
        Sign up
      </button>
      

      <button className="blog-btn" onClick={() => navigate("/signin")}>
        Sign in
      </button>
    </div>
  );
}

export default Createblog;
