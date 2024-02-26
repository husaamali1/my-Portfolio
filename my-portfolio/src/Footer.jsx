import { FaLinkedin } from "react-icons/fa6"
import { FaGithubSquare } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    // <div className="contacts">
    //   <h3>Contacts</h3>
    //   <FaLinkedin size={40}/> <a href="https://www.linkedin.com/in/husaam-ali-991a69220">LinkedIn</a>
    //   <br />
    //   <FaGithubSquare size={40}/> <a href="https://github.com/husaamali1">GitHub</a>
    //   <br />
    //   <MdOutlineMail size={40}/> <a href="mailto:husaam.ha1@gmail.com">Email</a>
    // </div>
    <div className="contacts">
    <h4>Contacts</h4>
    <a href="https://www.linkedin.com/in/husaam-ali-991a69220" aria-label="LinkedIn">
      <FaLinkedin size={40}/>
    </a>
    <a href="https://github.com/husaamali1" aria-label="GitHub">
      <FaGithubSquare size={40}/>
    </a>
    <a href="mailto:husaam.ha1@gmail.com" aria-label="Email">
      <MdOutlineMail size={40}/>
    </a>
  </div>
  )
}
export default Footer