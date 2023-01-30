import "./App.css";
import "./fonts/Icon-fonts/iconsFont.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AOS from "aos";

import BookForm from "./components/BookForm/BookForm";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Contacts from "./components/Contacts/Contacts";
import BookDetails from "./pages/BookDetails/BookDetails.jsx";

import Main from "./pages/Main/Main.jsx";
import MenuPage from "./pages/MenuPage/MenuPage.jsx";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="menu" element={<MenuPage />}>
            <Route path="book-details" element={<BookDetails />} />
          </Route>
          <Route path="book-form" element={<BookForm />} />
        </Routes>
        <div className="contacts" data-aos="fade-up">
          <Contacts />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
