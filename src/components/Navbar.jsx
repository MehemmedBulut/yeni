import React, {useRef} from'react'
import '../components/Navbar.css'

//react icons
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    
  
    const blackDivAdressRef = useRef()
    const openMenu = (e) => {
    const kliklenenElement = e.target

    if(kliklenenElement.classList.contains('menu-icon')){
      blackDivAdressRef.current.classList.add('aktiv')
    }
  }

    const closeMenu = (e) => {
    const kliklenenElement = e.target 

    if (kliklenenElement.classList.contains('cross-icon')) {
      blackDivAdressRef.current.classList.remove('aktiv')
      
    }
  }
  
  return (
    
    <>
    <div className="overlay" ref={blackDivAdressRef} >
        <RxCross1 className='cross-icon' onClick={closeMenu}/>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Social Media</a>
          <a href="#">Contact</a>
        </div>
    </div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mahammad Bulut</a>
    <button onClick={openMenu} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineBars className='menu-icon' />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Social Media</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar