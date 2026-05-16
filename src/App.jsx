import React, { useEffect } from 'react'

// Local images and logos (from project images_&_logos folder)
import logoImg from '../images_&_logos/my_image.png'
import awsLogo from '../images_&_logos/aws_logo.png'
import redhatLogo from '../images_&_logos/redhat_logo.png'
import w3cLogo from '../images_&_logos/IT Specialist - HTML and CSS.svg'
import javaLogo from '../images_&_logos/Java_programming_language_logo.svg'
import oracleLogo from '../images_&_logos/Oracle_logo.svg'
import ciscoLogo from '../images_&_logos/Cisco_logo.svg'
import googleCloudLogo from '../images_&_logos/Google_Cloud_logo.svg'
import leetcodeLogo from '../images_&_logos/leetcode_logo.png'
import codechefLogo from '../images_&_logos/codechef_logo.jpg'
import hackerrankLogo from '../images_&_logos/hackerRank_logo.png'
import geeksLogo from '../images_&_logos/greeksforgeeks_logo.png'
import codeforcesLogo from '../images_&_logos/codeforeces_logo.png'
import dattaHeaderLogo from '../images_&_logos/datta_header_logo.png'

export default function App() {
  useEffect(() => {
    // Nav toggle
    const toggle = document.querySelector('.nav-toggle')
    const nav = document.querySelector('.nav-links')
    function handleToggle() {
      const expanded = toggle.getAttribute('aria-expanded') === 'true'
      toggle.setAttribute('aria-expanded', String(!expanded))
      nav.classList.toggle('is-open')
    }
    if (toggle && nav) toggle.addEventListener('click', handleToggle)

    // Reveal on scroll (IntersectionObserver with initial pass)
    const reveals = Array.from(document.querySelectorAll('.reveal'))
    const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          if (entry.target.classList.contains('skill-card')) {
            const bar = entry.target.querySelector('.skill-bar span')
            const fill = bar && bar.getAttribute('data-fill')
            if (bar && fill) bar.style.width = fill + '%'
          }
        }
      })
    }, { threshold: 0.12 }) : null

    reveals.forEach(r => {
      // immediate visibility if already within viewport
      const rect = r.getBoundingClientRect()
      if (rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0) {
        r.classList.add('is-visible')
      }
      if (io) io.observe(r)
    })

    // Parallax
    const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'))
    function onScroll() {
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.08')
        const rect = el.getBoundingClientRect()
        const y = window.scrollY || window.pageYOffset
        const offset = (rect.top + y) * speed
        el.style.transform = `translate3d(0, ${offset * 0.06}px, 0)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Current year
    const year = document.getElementById('current-year')
    if (year) year.textContent = new Date().getFullYear()

    // cleanup
    return () => {
      if (toggle && nav) toggle.removeEventListener('click', handleToggle)
      if (io) io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <>
      <div className="bg-glow bg-glow-left" data-parallax data-speed="0.08" aria-hidden="true" />
      <div className="bg-glow bg-glow-right" data-parallax data-speed="0.12" aria-hidden="true" />

      <header className="site-header">
        <nav className="navbar" aria-label="Primary">
          <a href="#home" className="logo" aria-label="Sai Datta home">
            <img src={dattaHeaderLogo} alt="SD logo" />
          </a>

          <button className="nav-toggle" type="button" aria-controls="nav-links" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span />
            <span />
            <span />
          </button>

          <ul className="nav-links" id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#profiles">Profiles</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content reveal reveal-up">
            <p className="eyebrow">Problem Solving · IoT Student · Web Development</p>
            <h1>SAI DATTA MANIKANTA GOWTHU</h1>
            <p className="lead">Results-driven Computer Science (IoT) student focused on backend engineering, scalable cloud-native systems, and production-ready web apps.</p>
            <div className="badge-row">
              <span className="pill">Java</span>
              <span className="pill">Python</span>
              <span className="pill">React.js</span>
              <span className="pill">AWS &amp; Firebase</span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:saidattagowthu@gmail.com">Email Me</a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/v-v-satya-sai-datta-manikanta-gowthu-41709b291/" target="_blank" rel="noopener">LinkedIn</a>
              <a className="button button-secondary" href="#projects">View Projects</a>
            </div>
          </div>

          <div className="hero-image reveal reveal-right">
            <div className="portrait-wrap" data-parallax data-speed="0.2">
              <img src={logoImg} alt="Sai Datta portrait" className="profile-img" />
              <div className="hero-float hero-float-top">Frontend</div>
              <div className="hero-float hero-float-bottom">Responsive UI</div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-header reveal reveal-up">
            <p className="eyebrow">About Me</p>
            <h2>Building practical web apps with clean interfaces and cloud-ready thinking.</h2>
          </div>
          <div className="about-grid">
            <article className="about-card reveal reveal-left">
              <img src={logoImg} alt="Sai Datta portrait" className="about-img" loading="lazy" />
            </article>
            <article className="about-copy reveal reveal-right">
              <p>Hello! I’m <strong>SAI DATTA MANIKANTA GOWTHU</strong>, a Computer Science (IoT) student focused on backend engineering, cloud-native systems, and full-stack web development.</p>
              <p>I specialize in <span id="element">Backend Engineering</span>, and I build scalable applications with AWS (Lambda, API Gateway, S3), React.js, and Firebase. Recent work includes the CodeSync coding analytics platform, StayHub rental finder, and a student photo downloader.</p>
              <p>I care about performance, clarity, and interfaces that feel polished on mobile, tablet, and desktop. I am always looking for projects where the frontend needs strong structure and a visually balanced finish.</p>
            </article>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-header reveal reveal-up">
            <p className="eyebrow">Skills</p>
            <h2>Tools and technologies I use to ship modern interfaces.</h2>
          </div>
          <div className="skills-grid">
            <article className="skill-card reveal reveal-up" data-delay="0ms">
              <i className="fa-brands fa-html5" />
              <h3>HTML &amp; Semantic Structure</h3>
              <p>Accessible layouts, clean markup, and strong content hierarchy.</p>
              <div className="skill-bar"><span data-fill="95" /></div>
            </article>
            <article className="skill-card reveal reveal-up" data-delay="100ms">
              <i className="fa-brands fa-css3-alt" />
              <h3>CSS &amp; Responsive Design</h3>
              <p>Light theme systems, grid layouts, glass effects, and mobile-first polish.</p>
              <div className="skill-bar"><span data-fill="94" /></div>
            </article>
            <article className="skill-card reveal reveal-up" data-delay="200ms">
              <i className="fa-brands fa-square-js" />
              <h3>JavaScript Interactions</h3>
              <p>Scroll effects, navigation behavior, and small UI logic with no heavy frameworks.</p>
              <div className="skill-bar"><span data-fill="88" /></div>
            </article>
            <article className="skill-card reveal reveal-up" data-delay="300ms">
              <i className="fa-brands fa-react" />
              <h3>React.js</h3>
              <p>Component thinking, reusable sections, and production-style frontend workflows.</p>
              <div className="skill-bar"><span data-fill="84" /></div>
            </article>
            <article className="skill-card reveal reveal-up" data-delay="400ms">
              <i className="fa-solid fa-cloud" />
              <h3>AWS &amp; Firebase</h3>
              <p>Cloud-backed projects, authentication, storage, and serverless patterns.</p>
              <div className="skill-bar"><span data-fill="86" /></div>
            </article>
            <article className="skill-card reveal reveal-up" data-delay="500ms">
              <i className="fa-solid fa-sitemap" />
              <h3>Architecture &amp; Source Control</h3>
              <p>Component-based structure, Git discipline, and clean delivery habits.</p>
              <div className="skill-bar"><span data-fill="87" /></div>
            </article>
          </div>
          <div className="tag-row reveal reveal-up">
            <span>Java</span>
            <span>Python</span>
            <span>AWS</span>
            <span>Firebase</span>
            <span>Git</span>
            <span>Netlify</span>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-header reveal reveal-up">
            <p className="eyebrow">Projects</p>
            <h2>Three featured projects with descriptions, stacks, and links.</h2>
          </div>
          <div className="project-grid">
            <article className="project-card reveal reveal-up" data-delay="0ms">
              <div className="project-head">
                <h3>CodeSync – Coding Analytics Platform</h3>
                <p className="meta">AWS · Tailwind · Cognito · QuickSight</p>
              </div>
              <p>Full-stack platform tracking competitive programming performance across CodeChef, LeetCode, HackerRank, and GFG with coding score tracker, smart reminders, analytics dashboards, and mobile app support. Deployed on AWS Lambda, API Gateway, Cognito, and S3 with CI/CD via GitHub Actions and CodePipeline.</p>
              <div className="card-links">
                <a href="https://codesync-praveen.vercel.app/" target="_blank" rel="noopener">Preview</a>
                <a href="https://github.com/gowthusaidatta/CodeSync" target="_blank" rel="noopener">GitHub</a>
              </div>
            </article>

            <article className="project-card reveal reveal-up" data-delay="120ms">
              <div className="project-head">
                <h3>Student Photo Downloader</h3>
                <p className="meta">HTML · CSS · JavaScript</p>
              </div>
              <p>Web application to download student photos by roll number with form validation, responsive design, and user-friendly error handling for invalid inputs.</p>
              <div className="card-links">
                <a href="https://gowthusaidatta.github.io/student_phots_by_rollnumber/" target="_blank" rel="noopener">Preview</a>
                <a href="https://github.com/gowthusaidatta/student_phots_by_rollnumber" target="_blank" rel="noopener">GitHub</a>
              </div>
            </article>

            <article className="project-card reveal reveal-up" data-delay="240ms">
              <div className="project-head">
                <h3>StayHub – Property &amp; Rental Finder</h3>
                <p className="meta">React.js · Google Cloud · Firebase</p>
              </div>
              <p>Dynamic web platform for rental houses, function halls, and plots with Firebase Authentication and Firestore for secure real-time listings. Responsive UI with intelligent search and filters for location, budget, and property type.</p>
              <div className="card-links">
                <a href="https://github.com/gowthusaidatta/StayHub" target="_blank" rel="noopener">GitHub</a>
              </div>
            </article>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-header reveal reveal-up">
            <p className="eyebrow">Industry</p>
            <h2>Experience</h2>
          </div>
          <article className="info-card reveal reveal-up">
            <div className="card-head">
              <i className="fa-brands fa-aws card-icon" aria-hidden="true" />
              <h3>AWS Intern — Technical Hub Pvt. Ltd.</h3>
              <p className="meta">May 2025 – Jun 2025</p>
            </div>
            <ul>
              <li>Developed and deployed cloud components using AWS EC2, S3, Lambda, and IAM.</li>
              <li>Built secure serverless modules aligned with cloud and DevOps best practices.</li>
              <li>Gained hands-on experience deploying scalable applications and managing cloud infrastructure.</li>
            </ul>
          </article>
        </section>

        <section className="section certifications" id="certifications">
          <div className="section-header reveal reveal-up">
            <p className="eyebrow">Credentials</p>
            <h2>Certifications &amp; Achievements</h2>
          </div>
          <div className="Certify-grid">
            <div className="Certify-card reveal reveal-up">
              <div className="cert-header">
                <img className="cert-logo" src={awsLogo} alt="AWS logo" loading="lazy" />
                <h3><a href="https://www.credly.com/badges/3551e84e-e450-4b7d-ae8e-3dec23d76a20/public_url" target="_blank" rel="noopener">AWS Developer Associate</a></h3>
              </div>
            </div>
            <div className="Certify-card reveal reveal-up">
              <div className="cert-header">
                <img className="cert-logo" src={redhatLogo} alt="Red Hat logo" loading="lazy" />
                <h3>Red Hat Certified System Administrator (RHCSA)</h3>
              </div>
            </div>

            <div className="Certify-card reveal reveal-up">
              <div className="cert-header">
                <img className="cert-logo" src={w3cLogo} alt="HTML5 logo" loading="lazy" />
                <h3>IT Specialist – HTML and CSS</h3>
              </div>
            </div>

            <div className="Certify-card reveal reveal-up">
              <div className="cert-header">
                <img className="cert-logo" src={javaLogo} alt="Java logo" loading="lazy" />
                <h3>Java Certified Foundations Associate (Oracle)</h3>
              </div>
            </div>

            <div className="Certify-card reveal reveal-up">
              <div className="cert-header">
                <img className="cert-logo" src={oracleLogo} alt="Oracle logo" loading="lazy" />
                <h3>Oracle Cloud Infrastructure 2025 Certified - Generative AI Professional</h3>
              </div>
            </div>

            <div className="Certify-card reveal reveal-up">
              <div className="cert-header">
                <img className="cert-logo" src={ciscoLogo} alt="Cisco logo" loading="lazy" />
                <h3>Python Essentials 1 (Cisco)</h3>
              </div>
            </div>

            <div className="Certify-card reveal reveal-up">
              <div className="cert-header">
                <img className="cert-logo" src={oracleLogo} alt="Red Hat logo" loading="lazy" />
                <h3>Red Hat System Administration II (RH134 - RHA) Ver. 9.3</h3>
              </div>
            </div>

            <div className="Certify-card reveal reveal-up">
              <div className="cert-header">
                <img className="cert-logo" src={googleCloudLogo} alt="Google Cloud logo" loading="lazy" />
                <h3>50+ Google Cloud Skill Badges</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="section profiles" id="profiles">
          <div className="section-header reveal reveal-up">
            <p className="eyebrow">Competitive Programming</p>
            <h2>Coding Profiles</h2>
          </div>
          <div className="profiles-grid">
            <a href="https://leetcode.com/u/G_Saidatta/" target="_blank" rel="noopener" className="profile-card reveal reveal-up">
              <div className="profile-icon leetcode-icon">
                <img className="profile-logo" alt="LeetCode logo" src={leetcodeLogo} loading="lazy" />
              </div>
              <h3>LeetCode</h3>
            </a>
            <a href="https://www.codechef.com/users/saidattagowthu" target="_blank" rel="noopener" className="profile-card reveal reveal-up">
              <div className="profile-icon codechef-icon">
                <img className="profile-logo" alt="CodeChef logo" src={codechefLogo} loading="lazy" />
              </div>
              <h3>CodeChef</h3>
            </a>
            <a href="https://www.hackerrank.com/profile/gowthusaidatta" target="_blank" rel="noopener" className="profile-card reveal reveal-up">
              <div className="profile-icon hackerrank-icon">
                <img className="profile-logo" alt="HackerRank logo" src={hackerrankLogo} loading="lazy" />
              </div>
              <h3>HackerRank</h3>
            </a>
            <a href="https://www.geeksforgeeks.org/profile/saidattagowthu" target="_blank" rel="noopener" className="profile-card reveal reveal-up">
              <div className="profile-icon geeksforgeeks-icon">
                <img className="profile-logo" alt="GeeksforGeeks logo" src={geeksLogo} loading="lazy" />
              </div>
              <h3>GeeksforGeeks</h3>
            </a>
            <a href="https://codeforces.com/profile/saidatta_gowthu" target="_blank" rel="noopener" className="profile-card reveal reveal-up">
              <div className="profile-icon codeforces-icon">
                <img className="profile-logo" alt="Codeforces logo" src={codeforcesLogo} loading="lazy" />
              </div>
              <h3>Codeforces</h3>
            </a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-header reveal reveal-up">
            <p className="eyebrow">Get In Touch</p>
            <h2>Contact</h2>
          </div>
          <div className="contact-grid">
            <a className="contact-card reveal reveal-up" href="mailto:saidattagowthu@gmail.com"><i className="fa-solid fa-envelope" /><span>Email</span><strong>saidattagowthu@gmail.com</strong></a>
            <a className="contact-card reveal reveal-up" href="tel:+919573448222"><i className="fa-solid fa-phone" /><span>Phone</span><strong>+91 9573448222</strong></a>
            <a className="contact-card reveal reveal-up" href="https://www.linkedin.com/in/v-v-satya-sai-datta-manikanta-gowthu-41709b291/" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin" /><span>LinkedIn</span><strong>Profile</strong></a>
            <a className="contact-card reveal reveal-up" href="https://github.com/gowthusaidatta" target="_blank" rel="noopener"><i className="fa-brands fa-github" /><span>GitHub</span><strong>gowthusaidatta</strong></a>
          </div>
          <p className="contact-note reveal reveal-up">Feel free to reach out for collaboration, internships, or backend/cloud projects.</p>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; <span id="current-year"></span> Sai Datta Manikanta Gowthu. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/v-v-satya-sai-datta-manikanta-gowthu-41709b291/" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin" /></a>
          <a href="https://github.com/gowthusaidatta" target="_blank" rel="noopener"><i className="fa-brands fa-github" /></a>
          <a href="https://www.instagram.com/crazyboy_datta?igsh=MWx6cHE0Z2k1cnptdA==" target="_blank" rel="noopener"><i className="fa-brands fa-instagram" /></a>
        </div>
      </footer>
    </>
  )
}
