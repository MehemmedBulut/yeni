import React from 'react'

//css
import '../components/Plcards.css'

const Plcards = ({plPhoto}) => {
  return (
    <>
    <div className="prlanguage">
        <img src={plPhoto} alt="" />
    </div>
    </>
  )
}

export default Plcards