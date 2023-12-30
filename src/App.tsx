import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Create from "./pages/Create";
import { checkLogin } from "./utils/checkLogin";
import Study from "./pages/Study";
import View from "./pages/View";

function App() {
  const [loggedIn] = checkLogin();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/create" element={loggedIn ? <Create /> : <Home />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
