import react from 'react'
import "./App.css"
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from './Components/HeroSection'
import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

import Aboutus from './Components/Aboutus';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';



const App = () => {
  return <Router>
<Navbar />
<HeroSection />
<Services />
<Aboutus />
<Contacts />
<Footer />
<Toaster />

  </Router>;
};

export default App