import { useState } from "react";

function RegisterSubmit() {
  const genders = ["Male", "Female", "Others"];
  const hobbiesList = ["Music", "Movies", "Plastic Model"];
  const roles = ["General staff", "Developer", "System Analyst"];

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleHobby = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((h) => h !== value));
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Register & Submit Form</h2>

      {!submitted ? (
        <div>
          <div style={{ marginBottom: "10px" }}>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            Firstname: <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            Lastname: <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            Gender:
            {genders.map((g) => (
              <label key={g} style={{ marginLeft: "10px" }}>
                <input type="radio" name="gender" value={g} checked={gender === g} onChange={(e) => setGender(e.target.value)} />
                {g}
              </label>
            ))}
          </div>
          <div style={{ marginBottom: "10px" }}>
            Hobbies:
            {hobbiesList.map((h) => (
              <label key={h} style={{ marginLeft: "10px" }}>
                <input type="checkbox" value={h} checked={hobbies.includes(h)} onChange={toggleHobby} />
                {h}
              </label>
            ))}
          </div>
          <div style={{ marginBottom: "10px" }}>
            Apply Role:
            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ marginLeft: "10px" }}>
              <option value="">-- Select Role --</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            style={{ marginTop: "10px", padding: "8px 20px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px" }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h3 style={{ textAlign: "center" }}>Submitted Data</h3>
          <p>Username: {username}</p>
          <p>Firstname: {firstname}</p>
          <p>Lastname: {lastname}</p>
          <p>Gender: {gender}</p>
          <p>Hobbies: {hobbies.join(", ")}</p>
          <p>Role: {role}</p>

          <button
            onClick={() => setSubmitted(false)}
            style={{ marginTop: "10px", padding: "8px 20px", cursor: "pointer", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "4px" }}
          >
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
}

export default RegisterSubmit;
