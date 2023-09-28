import { useState } from "react";
import "./user.css";
import { Link } from "react-router-dom";
const strengthLabels = ["weak", "medium", "strong"];

const User = () => {
  const [user, setUser] = useState({
    id: crypto.randomUUID(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJxavVQXHlKEamILZ2o62NKQEeqG_KIw28A&usqp=CAU",
    login: "",
    password: "",
  });

  const onUserInput = (key) => (e) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };
  // const contacts = [

  const onLogin = (e) => {};
  const [strength, setStrength] = useState("");

  const getStrength = (password) => {
    console.log(password);

    let strengthIndicator = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handleChange = (event) => getStrength(event.target.value);

  return (
    <div className="login-card">
      <h2>Sign Up</h2>
      <form className="login-form">
        <div className="username">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="email"
            placeholder="Email"
            onChange={onUserInput("login")}
          />
          <div id="spinner" className="spinner"></div>
        </div>

        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            onUserInput("password")(e);
            handleChange(e);
          }}
        />

        <div className={`bars ${strength}`}>
          <div></div>
        </div>
        <div className="strength">{strength && <>{strength} password</>}</div>
        <Link to="/todos">
          <button className="control" type="button" onClick={onLogin}>
            JOIN NOW
          </button>
        </Link>
      </form>
    </div>
  );
};

export default User;
