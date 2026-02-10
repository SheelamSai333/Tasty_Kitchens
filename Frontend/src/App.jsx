import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <SignedIn>
        <Navbar />
        <Dashboard/>
      </SignedIn>

      <SignedOut>
        <Login />
      </SignedOut>
    </>
  );
}

export default App;