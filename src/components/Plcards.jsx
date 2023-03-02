import React from 'react'

//css
import '../components/Plcards.css'

const Plcards = ({plPhoto, classAdi}) => {
  return (
    <>
    <div className="prlanguage">
        <img src={plPhoto} alt="" className={classAdi}/>
    </div>
    </>
  )
}

export default Plcards