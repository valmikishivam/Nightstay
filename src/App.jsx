import { Route, BrowserRouter, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import RoomPage from "./pages/RoomPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import RoomDetailPage from "./pages/RoomDetailPage.jsx"


function App() {
 
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/rooms" element={<RoomPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/room/:roomid" element={<RoomDetailPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
