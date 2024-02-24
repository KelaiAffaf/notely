// <TabsContainer tabs={['home', 'business', 'personal']} />

import React ,{useState} from 'react'
import Tab from '../atoms/Tab/Tab.jsx'
import Button from '../atoms/Button/Button.jsx'
import Icon from '../atoms/Icon/Icon.jsx'

const filters={
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
}

const styledTabContainer={

}
const ContainersTab = ({categories}) => {
    const tabs = [{ value: '', displayValue: 'All' }, ...categories]
    const [indexSelectedTab, setIndexSelectedTab] = useState(0);
    console.log({indexSelectedTab});

    const handleTabClick = (e) => {
        const i = e.target.getAttribute("tab-index");
        const value = e.target.getAttribute('tab-value');
        setIndexSelectedTab(parseInt(i));
        // filterBy(value);
    }

  return (
   <div style={filters}>
     <div style={styledTabContainer}>
        {tabs.map((tab, i) => <Tab key={i} tabIndex={i} {...tab} selected={i === indexSelectedTab} handleTabClick={handleTabClick} />)}
    </div>
     <div className='tabs-container__show-completed'>
     <Button buttonType='ghost' icon={<Icon name="checkbox" width={24} height={24} />} text="Show only completed notes" />
 </div>
   </div>
  )
}

export default ContainersTab