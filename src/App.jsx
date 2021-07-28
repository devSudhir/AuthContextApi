import "./styles.css";
import { AuthContext } from "./context/AuthContext";
import { useContext, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";

export default function App() {
  const { status } = useContext(AuthContext);
  const [displayForm, setDisplayForm] = useState(false);

  console.log(status, displayForm);
  const [userToken, setUserToken] = useState("");

  return (
    <div className="App">
      <Navbar setDisplayForm={setDisplayForm} />
      {displayForm ? (
        <Form setUserToken={setUserToken} setDisplayForm={setDisplayForm} />
      ) : (
        ""
      )}
      {userToken && status ? <div>UserToken : {userToken}</div> : ""}
    </div>
  );
}
