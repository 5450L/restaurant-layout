import logo from "./logo.svg";
import "./App.css";
import "./fonts/Icon-fonts/iconsFont.css";

import BookForm from "./components/BookForm/BookForm";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductCard from "./components/ProductCard/ProductCard";
import Contacts from "./components/Contacts/Contacts";
import Menu from "./components/Menu/Menu";

import Main from "./pages/Main/Main.jsx";
import MenuPage from "./pages/MenuPage/MenuPage.jsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MenuPage />
      {/* <BookForm /> */}
      {/* <Main /> */}

      <div className="contacts">
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
