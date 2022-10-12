import React from 'react'
import {NavLink} from 'react-router-dom'

const DeviceList = ( ) => {
  return (
    <li>
        <NavLink to={`/device/${device._id}`}>{device.name}</NavLink>
    </li>
    
  )
}

export default DeviceList