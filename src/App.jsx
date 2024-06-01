import "react-toastify/ReactToastify.css";
import { ToastContainer,toast } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkSession from "./components/WorkSession";
import Gallary from "./components/Gallary";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";  
import Bmicalc from "./components/Bmicalc";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkSession />
 <Gallary/>
      <Pricing />
      <Contact />
      <Bmicalc />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />  
    </Router>
  );
}

export default App;
