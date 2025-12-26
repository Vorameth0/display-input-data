import { useState } from "react";

function Register() {
  const genders = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Others" }
  ];

  const hobbiesList = [
    { id: 1, label: "Music" },
    { id: 2, label: "Movies" },
    { id: 3, label: "Plastic Model" }
  ];

  const roles = [
    { id: 1, label: "General staff" },
    { id: 2, label: "Developer" },
    { id: 3, label: "System Analyst" }
  ];

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

  function onHobbiesToggle(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setHobbies(prev => [...prev, value]);
    } else {
      setHobbies(prev => prev.filter(item => item !== value));
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <div>
        <label>Username:</label>
        <input type="text" onChange={e => setUsername(e.target.value)} />
      </div>

      <div>
        <label>Firstname:</label>
        <input type="text" onChange={e => setFirstname(e.target.value)} />
      </div>

      <div>
        <label>Lastname:</label>
        <input type="text" onChange={e => setLastname(e.target.value)} />
      </div>

      <div>
        <label>Gender:</label><br />
        {genders.map(g => (
          <label key={g.id}>
            <input
              type="radio"
              name="gender"
              value={g.label}
              onChange={e => setGender(e.target.value)}
            />
            {g.label}
          </label>
        ))}
      </div>

      <div>
        <label>Hobbies:</label><br />
        {hobbiesList.map(h => (
          <label key={h.id}>
            <input
              type="checkbox"
              value={h.label}
              onChange={onHobbiesToggle}
            />
            {h.label}
          </label>
        ))}
      </div>

      <div>
        <label>Apply Role:</label>
        <select onChange={e => setRole(e.target.value)}>
          <option value="">Select role</option>
          {roles.map(r => (
            <option key={r.id} value={r.label}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <hr />

      <h3>Input Data</h3>
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
