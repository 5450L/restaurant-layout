import logo from "./logo.svg";
import "./App.css";
import "./fonts/Icon-fonts/iconsFont.css";

import BookForm from "./components/BookForm/BookForm";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductCard from "./components/ProductCard/ProductCard";
import Contacts from "./components/Contacts/Contacts";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Contacts />
      {/* <BookForm /> */}
      {/* <ProductCard title="Яичница-глазунья из трех яиц" price="30" /> */}
      {/* <Sidebar /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
