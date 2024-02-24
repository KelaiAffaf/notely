import React from 'react'
import TabsContainer from './ContainersTab.jsx'
import researchResult from '../../assets/searchResult.svg'
import PopUpContainer from '../molecules/PopUpContainer/PopUpContainer.jsx'
const styledSection ={
    width:"90%",
    display:'flex',
    flexDirection:'column',
    gap:'32px'

}
const styledImageContent={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:'60px'
   
}


const MainSection = () => {
    const categories = [
        { value: 'home', displayValue: 'Home' },
        { value: 'business', displayValue: 'Business' },
        { value: 'personal', displayValue: 'Personal' },
      ];
    
  return (
    <div style={styledSection}>
   <h1>Your Notes</h1>
   <TabsContainer categories={categories} />
  <div style={styledImageContent}>
  <img src={researchResult} alt="" />
  <p>No notes found</p>
  </div>
  <PopUpContainer/>
   </div>
  )
}

export default MainSection