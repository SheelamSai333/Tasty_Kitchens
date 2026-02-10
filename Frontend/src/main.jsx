import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function defaultNavigate(to) {
  // Use a full navigation so Clerk-hosted pages can redirect back into the app.
  // This works when the Clerk verification flow redirects to a URL in your app.
  window.location.href = to;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey} navigate={defaultNavigate}>
      <App />
    </ClerkProvider>
  </StrictMode>
);