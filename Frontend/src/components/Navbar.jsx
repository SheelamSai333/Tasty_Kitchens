import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <nav style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderBottom: "1px solid #ccc"
}}>
      <h2>Tasty Kitchens 🍽️</h2>

      {/* Clerk User Button */}
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
}

export default Navbar;