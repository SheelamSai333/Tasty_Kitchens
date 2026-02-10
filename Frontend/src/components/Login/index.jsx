import { SignIn } from "@clerk/clerk-react";
import "./login.css";

function Login() {
  return (
    <div className="auth-container">
      <SignIn />
    </div>
  );
}

export default Login;