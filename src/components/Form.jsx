import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export function Form({ setUserToken, setDisplayForm }) {
  const { handleStatus } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setUserToken(data.token);
        handleStatus(true);
        setDisplayForm(false);
        console.log(data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}
