import React from 'react'
import {NavLink} from 'react-router-dom'
const NavItem = ({navItem}) => {
  return (
        <NavLink to={`/${navItem.path}/${navItem.org_id}`}>{navItem.menu}</NavLink>
  )
}
export default NavItem