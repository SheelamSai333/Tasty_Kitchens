import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

function Dashboard() {
  const { getToken } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      const token = await getToken();

      await fetch("http://localhost:3000/api/users/sync-user", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    };

    syncUser();
  }, [getToken]);

  return <h1>Dashboard</h1>;
}

export default Dashboard;