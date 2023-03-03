import { useState } from "react"
import './index.css'

const App=()=>{
  const [count , setCount]=useState(0)
  const [color , setColor]=useState(false)
  const change=()=>{
    setCount(count + 1)
    // setColor(true)
    setColor(!color)   //togel
  }
  return(
    <div>
    <button className="button" onClick={change}>click here</button>
    <div className={color ? "green":"red"}>
    {count} 
    </div>
    </div>
  )
}
export default App