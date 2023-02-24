import React from 'react'

//css
import '../components/Experience.css'
import Plcards from './Plcards'

//PLICONS
import react from '../assets/images/react.png'
import csharp from '../assets/images/c#.png'
import javascript from '../assets/images/js.png'
import htmlcss from '../assets/images/htmlcss.png'
import mysql from '../assets/images/mysql.png'
import python from '../assets/images/python.jpeg'

//css
import '../components/Experience.css'


const Experience = () => {
  return (
    <>
    <div className="king">
        <Plcards plPhoto={htmlcss} />
        <Plcards plPhoto={javascript} />
        <Plcards plPhoto={react} />
        <Plcards plPhoto={csharp} />
        <Plcards plPhoto={mysql} />
        <Plcards plPhoto={python} />

    </div>
    </>
  )
}

export default Experience