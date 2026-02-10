import { SignUp } from "@clerk/clerk-react";
import "./register.css";

function Register() {
  return (
    <div className="auth-container">
      <SignUp />
    </div>
  );
}

export default Register;