import logoIcon from './images/logo.png'

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (sectionId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const Navbar = () => {
  return (
    <div className="navbar">
      <img className='logo rounded-circle d-inline-block align-top' style={{ width: '100px', paddingLeft: '12px' }} src={logoIcon} alt='brand logo' />
      <div className='buttons' >
      <button className="navbar button"  onClick={() => scrollToSection('aboutme')}>About Me</button>
      <button className="navbar button"  onClick={() => scrollToSection('projects')}>Projects</button>
      <button className="navbar button"  onClick={() => scrollToSection('contacts')}>Contacts</button>
      </div>
    </div>
  )
}
export default Navbar