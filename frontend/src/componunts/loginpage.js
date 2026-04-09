import { useState } from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import { Button } from "./styledcomponunts";

export const Loginpage = ({ bloodtypes, setBloodtypes }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedBlood = location.state?.blood || "";

  const [input, setInput] = useState({
    name: "",
    age: "",
    blood: selectedBlood,
    phone: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ No stock check
    if (bloodtypes[input.blood] === 0) {
      alert("No units available!");
      return;
    }

    // ✅ Reduce units
    setBloodtypes({
      ...bloodtypes,
      [input.blood]: bloodtypes[input.blood] - 1,
    });

    setShowPopup(true);

    
   
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <h2>Register Patient</h2>

        <input
          type="text"
          placeholder="Enter name"
          value={input.name}
          onChange={(e) =>
            setInput({ ...input, name: e.target.value })
          }
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter age"
          value={input.age}
          onChange={(e) =>
            setInput({ ...input, age: e.target.value })
          }
        />
        <br></br>
        <br></br>
<input
          type="text"
          placeholder="Enter phone number"
          value={input.phone}
          onChange={(e) =>
            setInput({ ...input, phone: e.target.value })
          }
        />
        <br /><br />

        <p>Selected Blood Group:</p>
        <input type="text" value={input.blood} readOnly />

        <br /><br />

         


        <Button type="submit">Submit</Button>
        <br /><br />
        
      </form>
<Button style={{ backgroundColor: "gray",color:"white" }} onClick={() => navigate("/")}>
          Back
        </Button>
      {/* ✅ POPUP */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.card}>
            <h2>✅ Registration Successful</h2>
            <h1>DH7868</h1>
            <p><b>Name:</b> {input.name}</p>
            <p><b>Age:</b> {input.age}</p>
            <p><b>Blood:</b> {input.blood}</p>
            <p>
              <b>Phone:</b> {input.phone}
            </p>

            <Button onClick={() => {setShowPopup(false)
                setInput({
                  name: "",
                  age: "",  
                  phone: "",
                  blood: selectedBlood,
                });
            }}>
              Close
            </Button>

          </div>
        </div>
      )}
    </div>
  );
};

/* 🎨 Styles */
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  },
};