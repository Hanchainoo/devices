import React from 'react'

const Interfaces = ({interfaceDev}) => {
  return (
    
    <div key={interfaceDev._id} className="card">
        <div><strong>name :</strong> {interfaceDev.name}</div>
        <div><strong>Type :</strong>{interfaceDev.type}</div>
        <div><strong>Device :</strong> {interfaceDev.device}</div>
        <div><strong>Description :</strong> {interfaceDev.description}</div>
        <div><strong>IP V4 Address :</strong> {interfaceDev.ipv4_address}</div>
        <div><strong>ipv4_address :</strong> {interfaceDev.security_group}</div>
        <div><strong>Id :</strong> {interfaceDev._id}</div>
        <div><strong>Hardware Id :</strong> {interfaceDev.hardware_id}</div>
    </div>
  )
}

export default Interfaces