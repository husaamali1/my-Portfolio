import project1 from './images/Project-1.png'
import project2 from './images/Project-2.png'
import project3 from './images/Project-3.png'
import project4 from './images/Project-4.png'
import { FaExternalLinkAlt, FaRegFileAlt } from 'react-icons/fa'

const Project = () => {
  return (
    <section className="project-section">
      <h3>Projects</h3>
      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h4>Project 1: Chicken Cross (January 22nd to January 29th 2024)</h4>
          <p>A solo project where I created a single-player game with auto-generated obstacles on a JavaScript grid. Deployed as Project-1, documentation available in ReadMe.</p>
          <div className="project-image">
            <img src={project1} alt="Project 1" />
            <div className="image-overlay">
              <a href="https://husaamali1.github.io/Project-1/" target="_blank" rel="noopener noreferrer" className="image-link">
                <FaExternalLinkAlt size={30} />
              </a>
              <a href="https://github.com/husaamali1/Project-1" target="_blank" rel="noopener noreferrer" className="image-link">
                <FaRegFileAlt size={30} />
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card">
          <h4>Project 2: E-commerce (Nov 22nd - Nov 24th, 2023)</h4>
          <p>Collaborated with Nasiim Nuur to create an e-commerce platform in React. Deployment: Project-2, documentation available in ReadMe.</p>
          <div className="project-image"></div>
          <img src={project2} alt="Project 2" />
          <div className="image-overlay">
            <a href="https://e-commercehn.netlify.app/" target="_blank" rel="noopener noreferrer" className="image-link">
              <FaExternalLinkAlt size={30} />
            </a>
            <a href="https://github.com/husaamali1/Project-2" target="_blank" rel="noopener noreferrer" className="image-link">
              <FaRegFileAlt size={30} />
            </a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="project-card">
          <h4>Project 3: Infinite Wheels (Dec 7th - Dec 17th 2023)</h4>
          <p>Solo project focusing on a fully functional app with integrated self-created APIs and CRUD operations. Deployment: Project-3, documentation available in ReadMe.</p>
          <div className="project-image">
            <img src={project3} alt="Project 3" />
            <div className="image-overlay">
              <a href="https://infinite-wheels-b5e907416190.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image-link">
                <FaExternalLinkAlt size={30} />
              </a>
              <a href="https://github.com/husaamali1/Project-3" target="_blank" rel="noopener noreferrer" className="image-link">
                <FaRegFileAlt size={30} />
              </a>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="project-card">
          <h4>Project 4: Tech Mobile (Jan 11th - Jan 22nd 2024)</h4>
          <p>Independently developed an app with MongoDB and Python backend and React frontend. Deployment: Project-4, documentation available in ReadMe.</p>
          <div className="project-image">
            <img src={project4} alt="Project 4" />
            <div className="image-overlay">
              <a href="https://tech-mobile-998d3d8214b9.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image-link">
                <FaExternalLinkAlt size={30} />
              </a>
              <a href="https://github.com/husaamali1/Project-4" target="_blank" rel="noopener noreferrer" className="image-link">
                <FaRegFileAlt size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
export default Project









// <section className="project">
//   <h3>Projects</h3>
//   <div className="pj1">
//     <h4>Project 1: Chicken Cross (January 22nd to January 29th):</h4>
//     <p> A solo project where I created a single-player game with auto-generated obstacles on a JavaScript grid. I concentrated on making the gameplay dynamic and interactive through DOM manipulation.
//       Deployed as Project-1, documentation available in ReadMe.</p>
//     <img src={project1} alt="project-1" style={{width:"500px"}} />
//   </div>
//   <div className="pj2">
//     <h4>Project 2: E-commerce (Nov 22nd - Nov 24th, 2023):</h4>
//     <p>Collaborated with Nasiim Nuur to create an e-commerce platform in React, employing collaborative coding to swiftly address issues and integrated a third party API for dynamic product displays.
//       Deployment: Project-2, documentation available in ReadMe.</p>
//     <img src={project2} alt="project-2"  style={{width:"500px"}}/>
//   </div>
//   <div className="pj3">
//     <h4>Project 3: Infinite Wheels (Dec 7th - Dec 17th):</h4>
//     <p>Solo project focusing on a fully functional app with integrated self-created APIs and CRUD operations, using JavaScript, mongoose, Jsonwebtoken, and Dotenv, plus React Router DOM for improved UX.
//       Deployment: Project-3, documentation available in ReadMe.</p>
//     <img src={project3} alt="project-3"  style={{width:"500px"}}/>
//   </div>
//   <div className="pj4">
//     <h4>Project 4: Tech Mobile (Jan 11th - Jan 22nd):</h4>
//     <p>Independently developed an app with MongoDB and Python backend and React frontend, emphasising CRUD operations and data relationships.
//       Deployment: Project-4, documentation available in ReadMe.</p>
//     <img src={project4} alt="project-4"  style={{width:"500px"}}/>
//   </div>
// </section>

