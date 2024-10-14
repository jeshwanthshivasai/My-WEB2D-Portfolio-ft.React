// App.js (React Component)
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
    </nav>
  );
}

function Home() {
  return (
    <div className="home">
      <ViewportOne />
      <ViewportTwo />
    </div>
  );
}

function ViewportOne() {
  return (
    <div className="viewport-one">
      <div className="about-me-skills">
        <section className="about-me" data-aos="fade-right">
          <img src="https://avatars.githubusercontent.com/u/63970360?v=4" alt="Profile" className="profile-pic" />
          <h1>About Me</h1>
          <p>Hello! I'm a passionate web developer focused on crafting clean and user-friendly experiences.</p>
        </section>
        <section className="skills" data-aos="fade-left">
          <h2>Skills</h2>
          <div className="skills-cards">
            <div className="skill-card">
              <h3>HTML & CSS</h3>
              <p>Building the structure and styling for modern websites.</p>
            </div>
            <div className="skill-card">
              <h3>JavaScript</h3>
              <p>Creating interactive and dynamic user experiences.</p>
            </div>
            <div className="skill-card">
              <h3>React</h3>
              <p>Developing fast and scalable single-page applications.</p>
            </div>
            <div className="skill-card">
              <h3>Responsive Design</h3>
              <p>Ensuring applications look great on all devices.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ViewportTwo() {
  return (
    <div className="viewport-two">
      <Contact />
      <Footer />
    </div>
  );
}

function Contact() {
  return (
    <section className="contact" data-aos="fade-up">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Your Name. All rights reserved.</p>
    </footer>
  );
}

function Projects() {
  return (
    <div className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
            <h3>Project 1</h3>
            <p>A brief description of Project 1.</p>
          </a>
        </div>
        <div className="project-card">
          <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
            <h3>Project 2</h3>
            <p>A brief description of Project 2.</p>
          </a>
        </div>
        <div className="project-card">
          <a href="https://github.com/your-username/project3" target="_blank" rel="noopener noreferrer">
            <h3>Project 3</h3>
            <p>A brief description of Project 3.</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;


