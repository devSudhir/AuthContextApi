export function Register({ setDisplayRegisterForm }) {
  const handleRegister = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      }),
      redirect: "follow"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisplayRegisterForm(false);
      });
  };
  return (
    <form onSubmit={handleRegister}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}
