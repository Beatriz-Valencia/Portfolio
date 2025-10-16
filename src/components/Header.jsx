import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname.startsWith("/project/")) return null;

  return (
    <nav className="navbar">
      <Button
        className="general_button nav_button"
        label="HOME"
        onClick={() => navigate("/home")}
      />
      <Button
        className="general_button nav_button"
        label="PROFILE"
        onClick={() => navigate("/profile")}
      />
      <Button
        className="general_button nav_button"
        label="PROJECTS"
        onClick={() => navigate("/projects")}
      />
      <Button
        className="general_button nav_button"
        label="CONNECT"
        onClick={() => navigate("/connect")}
      />
    </nav>
  );
}
