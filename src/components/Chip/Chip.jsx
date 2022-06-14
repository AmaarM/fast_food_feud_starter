import * as React from "react"
import "./Chip.css"


export function Chip({ label = "", isActive = false , onOpen = () => {}, onClose = () => {}}){
  
  return (
    <button className={isActive ? "chip active" : "chip"} onClick={onOpen}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={onClose}>{`X`}</span>
    </button>
  )
}

export default Chip
