import React , {useState}from "react";
import AppBar from "./components/AppBar";
import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import AboutPhishy from "./routes/AboutPhishy";
import Blog from "./routes/Blog";
import WhatsNext from "./routes/WhatsNext";
import Admin from "./routes/Admin";
import "./App.css"


function App() {
  const [user, setUser] = useState(null)
  console.log(user)



  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home setUser= {setUser} user= {user}/>} />
        <Route path="AboutPhishy" element={<AboutPhishy />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="WhatsNext" element={<WhatsNext />} />
        <Route path="Admin" element={<Admin />} />
      </Routes>
      </div>
    );
  }

export default App;