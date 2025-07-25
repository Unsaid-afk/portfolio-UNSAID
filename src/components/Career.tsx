import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Career &amp; Experience
        </h2>
        <div className="career-info">
          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>B.Tech in Computer Science &amp; Engineering, 3rd Year</h5>
                <h5>KPGU, Vadodara, Gujarat</h5>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Key Projects</h4>
              </div>
            </div>
            <ul>
              <li>
                <strong>Billing Management System – Jaiswal Sales</strong><br />
                Developed a bilingual (English/Gujarati) billing and vendor system with GST calculation and CSV/Excel export.<br />
                <em>Tech Stack:</em> Next.js, React, TypeScript, Node.js, Supabase, SQL
              </li>
              <li>
                <strong>SSIP Government-Funded Startup (Ongoing)</strong><br />
                Contributing to the development of a smart agriculture platform for crop and fertilizer planning.<br />
                <em>Focus Areas:</em> UI/UX Design, Full-Stack Development
              </li>
            </ul>
          </div>

          {/* Hackathons */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons</h4>
              </div>
            </div>
            <ul>
              <li>Team Lead in 2 hackathons</li>
              <li>Built working prototypes using React, Firebase, and Node.js</li>
            </ul>
          </div>

          {/* Design & Animation */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design &amp; Animation</h4>
              </div>
            </div>
            <ul>
              <li>UI/UX Design using Figma</li>
              <li>2D/3D Modeling and Animation using Blender</li>
              <li>Visual design with Adobe Animate</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
              </div>
            </div>
            <ul>
              <li>UI/UX Design (Udemy)</li>
              <li>Ethical Hacking (Udemy)</li>
              <li>Animation &amp; Motion Graphics (Udemy)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
