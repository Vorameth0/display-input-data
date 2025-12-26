import { useState } from "react";

function Register() {
  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" }
  ];

  const hobbiesList = [
    { label: "Music", value: "Music" },
    { label: "Movies", value: "Movies" },
    { label: "Plastic Model", value: "Plastic Model" }
  ];

  const roles = [
    { label: "General staff", value: "General staff" },
    { label: "Developer", value: "Developer" },
    { label: "System Analyst", value: "System Analyst" }
  ];

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

  function onHobbiesToggle(e) {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register Form</h2>

      <div>
        Username:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div>
        Firstname:
        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </div>

      <div>
        Lastname:
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>

      <div>
        Gender:
        {genders.map((g) => (
          <label key={g.value} style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value={g.value}
              onChange={(e) => setGender(e.target.value)}
            />
            {g.label}
          </label>
        ))}
      </div>

      <div>
        Hobbies:
        {hobbiesList.map((h) => (
          <label key={h.value} style={{ marginLeft: "10px" }}>
            <input
              type="checkbox"
              value={h.value}
              onChange={onHobbiesToggle}
            />
            {h.label}
          </label>
        ))}
      </div>

      <div>
        Apply Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- Select Role --</option>
          {roles.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <hr />

      <h3>Display Input Data</h3>
      <p>Username: {username}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Gender: {gender}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default Register;
