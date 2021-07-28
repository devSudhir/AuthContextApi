import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export function Navbar({ setDisplayForm, setDisplayRegisterForm }) {
  const { status, handleStatus } = useContext(AuthContext);
  return (
    <div style={{ padding: "10px", backgroundColor: "#333" }}>
      <button
        style={{
          cursor: "pointer",
          border: "1px solid aqua",
          borderRadius: "10px",
          background: "none",
          color: "#fff",
          fontSize: "2rem"
        }}
        onClick={() => {
          if (status === true) {
            handleStatus(false);
          }
          setDisplayForm(true);
        }}
      >
        {status ? "Logout" : "Login"}
      </button>
      {/* <button
        style={{
          cursor: "pointer",
          border: "1px solid aqua",
          borderRadius: "10px",
          background: "none",
          color: "#fff",
          fontSize: "2rem"
        }}
        onClick={() => {
          setDisplayRegisterForm(true);
        }}
      >
        Register
      </button> */}
    </div>
  );
}
