import "./styles.css";
import { AuthContext } from "./context/AuthContext";
import { useContext, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Register } from "./components/Register";
export default function App() {
  const { status } = useContext(AuthContext);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false);
  console.log(status, displayForm);
  const [userToken, setUserToken] = useState("");

  return (
    <div className="App">
      <Navbar
        setDisplayForm={setDisplayForm}
        setDisplayRegisterForm={setDisplayRegisterForm}
      />
      {displayForm ? (
        <Form setUserToken={setUserToken} setDisplayForm={setDisplayForm} />
      ) : (
        ""
      )}
      {userToken && status ? <div>UserToken : {userToken}</div> : ""}

      {/*  {displayRegisterForm ? ( 
        <Register setDisplayRegisterForm={setDisplayRegisterForm} />
      ) : (
        ""
      )}*/}
    </div>
  );
}
