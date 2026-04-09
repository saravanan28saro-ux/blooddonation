import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./componunts/home";
import { Header } from "./componunts/header";
import { Loginpage } from "./componunts/loginpage";

function App() {
  const [bloodtypes, setBloodtypes] = useState({
    "A+": 1000,
    "A-": 5909,
    "B+": 8320,
    "B-": 3322,
    "AB+": 4222,
    "AB-": 2,
    "O+": 12900,
    "O-": 6
  });

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home bloodtypes={bloodtypes} />}
        />

        <Route
          path="/login"
          element={
            <Loginpage
              bloodtypes={bloodtypes}
              setBloodtypes={setBloodtypes}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;