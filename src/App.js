import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from './iphones.jpg';
import purplePhone from './purplePhone.png';
import myPhones from './myPhones.jpg';
import './imgcs.css';
import appleStore from'./appleStore.png';
import steve from './steve.jpg';
import Home from './Home';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

const ModelPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 text-center">
        <h1>iPhone 16 3D Model</h1>
        <p>Welcome to the 3D model view of our newest iPhone!</p>
        <Home />
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <Navbar />
      <div className="container mt-5 text-center">
        <h1>We are Apple</h1>
        <p>Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, and more! </p>
        <p>See the bottom of the page for a map of where we are currently located!</p>
        <img src={appleStore} alt="store" className="img center-image large-image mb-5"/>
        <h3>More about our founding</h3>
        <p>Apple Computer, Inc. was founded on April 1, 1976, by college dropouts Steve Jobs and Steve Wozniak, 
          who brought to the new company a vision of changing the way people viewed computers. Jobs and Wozniak 
          wanted to make computers small enough for people to have them in their homes or offices.</p>
          <img src={steve} alt="steve" className="img center-image mb-5"/>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/3d-model" element={<ModelPage />} />
        <Route path="/about" element={<AboutUs />}/>
      </Routes>
    </Router>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Welcome to Apple!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/about">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <header className="hero bg-primary text-white text-center py-5">
      <div className="container">
        <h1>Introducing the iPhone 16, our newest technology!</h1>
        <p>iPhone 16 is built for Apple Intelligence, 
          the personal intelligence system that helps you write, 
          express yourself, and get things done effortlessly. With groundbreaking privacy protections, 
          it gives you peace of mind that no one else can access your data — not even Apple.</p>
        <a href="/3d-model" className="btn btn-light btn-lg">
          Click here to see a 3D model!</a>
        <p> </p>
        <img src={phone} alt="iPhone" className="img"/>
      </div>
    </header>
  );
};

const Features = () => {
  return (
    <section className="features py-5">
      <div className="container">
        <h2 className="text-center mb-4"> Pre-orders begin Friday, September 13</h2>
        <p className="text-center">From $799 or $33.29/mo. for 24 mo.</p>
        <p className="text-center">Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher!</p>
        <img src={purplePhone} alt="iPhone" className="img center-image large-image mb-4"/>
        <h2 className="text-center mt-5 mb-4">Here are some of our favorite features</h2>
        <p></p>
        <div className="row">
          <div className="col-md-3 text-center">
            <h4>New Ultra Wide Camera</h4>
            <p>Our camera system features a 48MP Fusion camera with a 2x Telephoto option</p>
          </div>
          <div className="col-md-3 text-center">
            <h4>Performance and Efficiency</h4>
            <p>The new A18 chip enables demanding games, as well as a big boost in battery life</p>
          </div>
          <div className="col-md-3 text-center">
            <h4>Utilizes Private Cloud Compute</h4>
            <p>This system is an extraordinary step forward for privacy in artificial intelligence</p>
          </div>
          <div className="col-md-3 text-center">
            <h4>Latest-generation Ceramic Shield</h4>
            <p>advanced formulation that is 50 percent tougher than the first generation iPhone</p>
          </div>
        </div>
        <p className = "mt-5"></p>
        <img src={myPhones} alt="iPhone" className="img center-image large-image mb-5"/>
        <h2 className="text-center mb-4">Check out all five of our colors in store!</h2>
        <p className="text-center">The iPhone 16 and iPhone 16 plus will be available in black, white, pink, teal, and ultramarine</p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p>Thanks for visiting Apple!</p>
        <p>&copy;LilyandArielle</p>
      </div>
    </footer>
  );
};

export default App;