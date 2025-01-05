import React from 'react'
import netflixLogo from 'src/assets/NetflixLogo.png'

const Navbar = ({selectedTab, setSelectedTab, tabItems}) => {
  return (
    <div>
        <img src={netflixLogo} alt="" />
        <div>
            {tabItems.map(item => <button className={`${selectedTab.value === item.value ? "font-bold text-white" : "text-zinc-300"}`} onClick={() => {
                setSelectedTab(item)
            }}>{item.title}</button>)}
        </div>
    </div>
  )
}

export default Navbar