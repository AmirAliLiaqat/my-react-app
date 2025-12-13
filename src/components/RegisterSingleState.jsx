import { useEffect, useState } from "react";

const RegisterSingleState = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

   useEffect(() => {
    const savedForm = localStorage.getItem("register");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("register", JSON.stringify(form))
  }

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Register</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
          required
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            cursor: "pointer",
          }}
          className="btn btn-primary"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterSingleState;
