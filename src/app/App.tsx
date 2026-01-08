import { useState } from "react";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="size-full">
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <div className="size-full flex items-center justify-center">
          <LoginPage onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}
