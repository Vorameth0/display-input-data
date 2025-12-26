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

      <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br />
      <input placeholder="Firstname" onChange={e => setFirstname(e.target.value)} /><br />
      <input placeholder="Lastname" onChange={e => setLastname(e.target.value)} /><br />

      <h4>Gender</h4>
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

      <h4>Hobbies</h4>
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

      <h4>Apply Role</h4>
      <select onChange={e => setRole(e.target.value)}>
        <option value="">Select role</option>
        {roles.map(r => (
          <option key={r.id} value={r.label}>{r.label}</option>
        ))}
      </select>

      <hr />

      <p><b>Username:</b> {username}</p>
      <p><b>Firstname:</b> {firstname}</p>
      <p><b>Lastname:</b> {lastname}</p>
      <p><b>Gender:</b> {gender}</p>
      <p><b>Hobbies:</b> {hobbies.join(", ")}</p>
      <p><b>Role:</b> {role}</p>
    </div>
  );
}

export default Register;
