import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isLogged, setIsLogged] = useState(!!user);
  let navigate = useNavigate();

  const login = (username, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify({ username }));
        setUser({ username });
        setIsLogged(true);
        navigate("/dashboard", { replace: true });
        res({ username });
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    navigate("/login", { replace: true });
  };

  return { isLogged, login, logout };
}
