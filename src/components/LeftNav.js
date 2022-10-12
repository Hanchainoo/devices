import React from 'react';
import NavItem from './NavItem';

const LeftNav = () => {  
  const LEFT_NAV =[];
   process.env.REACT_APP_LEFT_NAV.split("|").map((e) =>{
    LEFT_NAV.push(JSON.parse(e))
   })
  return (
    <ul className="left-nav">
        {(LEFT_NAV.length >0) && LEFT_NAV.map((navItem)=>(
          <li key = {navItem.id}>
            <NavItem key = {navItem._id}  navItem = {navItem}></NavItem>
          </li>
        ))}
    </ul>
  )
}

export default LeftNav