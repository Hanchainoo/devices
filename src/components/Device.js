import React from 'react';
 
function handleDeviceClick(){}

const Device = ({device, setInterfaceIds, setDeviceSelected}) => {
  return (
    <div className="card clickable" key={device._id} onClick={()=>{
      setInterfaceIds(device.interfaces);
      setDeviceSelected(device.name)
      }}>
        <div key={device._id}>
            <strong>Id: </strong>{device._id}
        </div>
        <div>
            <strong>Name: </strong>{device.name}
        </div>
        <div>
            <strong>Description:</strong> {device.description}
        </div>
        <div>
          <strong>Interfaces: </strong>{device.interfaces.length}
        </div>
    </div>
  )
}

export default Device