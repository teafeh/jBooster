import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    // Remove token and user info
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/", { replace: true });
  };

  return { logout };
}
