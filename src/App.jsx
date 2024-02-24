import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/atoms/Button/Button.jsx'
import Icon from './components/atoms/Icon/Icon.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button text={"Primary"} buttonType='primary'/>
     <Button text={"Ghost"} buttonType='ghost'/>
     <Button text={"danger"} buttonType='danger'/>
     <Button text={"Add"} icon={<Icon name='add' width={20} height={20}/>} buttonType='primary' />
   
    </>
  )
}

export default App
