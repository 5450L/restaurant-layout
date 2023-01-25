import logo from "./logo.svg";
import "./App.css";
import "./fonts/Icon-fonts/iconsFont.css";

import BookForm from "./components/BookForm/BookForm";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className="App">
      <BookForm />
      {/* <ProductCard title="Яичница-глазунья из трех яиц" price="30" /> */}
      {/* <Sidebar /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
