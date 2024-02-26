import Navbar from './Navbar'
import Aboutme from './About'
import Project from './Project'
import Footer from './Footer'

function App() {

  return (
    <>
      <div id='navbar'>
        <Navbar />
      </div>
      <div id='aboutme'>
        <Aboutme />
      </div>
      <div id='projects'>
        <Project />
      </div>
      <div id='contacts'>
        <Footer />
      </div>
    </>
  )
}

export default App
