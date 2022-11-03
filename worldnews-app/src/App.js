import './App.css';
import './Card.css';
import './Sidebar.css';
import './Navbar.css';
import './About.css';
import './Contact.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
          <Route path='/' element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          </Routes>

</BrowserRouter>
</>

  );
}

export default App;
