import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Create from "./pages/Create";
import { checkLogin } from "./utils/checkLogin";
import Study from "./pages/Study";
import View from "./pages/View";
import { Toaster } from "react-hot-toast";
import MyCards from "./pages/MyCards";

function App() {
  const [loggedIn] = checkLogin();
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster
        toastOptions={{
          success: {
            duration: 2000,
            style: {
              backgroundColor: "#CA8A04",
              fontWeight: 600,
              color: "white",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/create" element={loggedIn ? <Create /> : <Home />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/my-cards" element={loggedIn ? <MyCards /> : <Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
