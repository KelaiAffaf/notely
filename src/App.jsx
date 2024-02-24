import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/atoms/Button/Button.jsx'
import Icon from './components/atoms/Icon/Icon.jsx'
import Searchbar from './components/molecules/SearchBar/Searchbar.jsx'
import MainSection from './components/containers/MainSection'



const main ={
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  marginTop:'50px'
}
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Searchbar searchText=""/>
    <div style={main}>
    <MainSection/> 
    </div>
    </>
  )
}

export default App
