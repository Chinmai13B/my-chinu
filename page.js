<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chinmai | Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Navigation Bar -->
  <header>
    <nav class="navbar">
      <div class="logo">Chinmai</div>
      <ul class="nav-links">
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Home Section -->
  <section id="home" class="section home">
    <div class="home-content">
      <h1>Hello, I'm <span>Chinmai</span></h1>
      <p>A passionate BCA student building creative web solutions.</p>
      <a href="#projects" class="btn">View My Work</a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section about">
    <h2>About Me</h2>
    <p>I’m Chinmai, a final-year BCA student with a keen interest in web development, design, and problem-solving. I love creating interactive and beautiful websites using HTML, CSS, and JavaScript.</p>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section projects">
    <h2>Projects</h2>
    <div class="project-grid">
      <div class="project-card">
        <h3>Portfolio Website</h3>
        <p>A personal portfolio site built using HTML, CSS, and animations.</p>
      </div>
      <div class="project-card">
        <h3>E-commerce Design</h3>
        <p>A front-end layout for an online shopping website.</p>
      </div>
      <div class="project-card">
        <h3>Python Mini App</h3>
        <p>A console-based Python application with user authentication.</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section contact">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:chinmai@example.com">chinmai@example.com</a></p>
  </section>

  <footer>
    <p>© 2025 Chinmai | All Rights Reserved</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
🎨 style.css
css
Copy code
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;
}

body {
  background: #0f172a;
  color: #f8fafc;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 23, 42, 0.9);
  padding: 15px 40px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: 0.3s ease;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: #38bdf8;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  color: #f8fafc;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #38bdf8;
}

/* Section */
.section {
  padding: 120px 60px;
  text-align: center;
  animation: fadeIn 1s ease-in;
}

h2 {
  margin-bottom: 15px;
  color: #38bdf8;
}

.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #1e293b, #0f172a);
}

.home-content h1 {
  font-size: 3rem;
}

.home-content span {
  color: #38bdf8;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  background: #38bdf8;
  color: #0f172a;
  padding: 10px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.btn:hover {
  transform: scale(1.1);
  background: #0ea5e9;
}

/* Projects */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.project-card {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  transition: transform 0.3s, background 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  background: #334155;
}

/* Contact */
.contact a {
  color: #38bdf8;
  text-decoration: none;
}

footer {
  background: #1e293b;
  padding: 15px;
  text-align: center;
  color: #94a3b8;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
⚙️ script.js
javascript
Copy code
// Highlight active link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
