import { Home } from "./componunts/home";
import { Header } from "./componunts/header";
import {Loginpage} from "./componunts/loginpage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loginpage" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  )
        
}

export default App;
