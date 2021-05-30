import "./styles/App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Feeds from "./components/Feeds";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Feeds />
      <Footer />
    </div>
  );
}

export default App;
