import React from 'react'
import {useParams} from 'react-router-dom'
import{useEffect, useState} from 'react'
import Device from '../components/Device'
import Interfaces from '../components/Interfaces'


const DevicePage = () => {
  const apiToken = process.env.REACT_APP_API_TOKEN;  
  const [devices, setDevices] = useState([]);
  const [interfaceIds, setInterfaceIds] = useState([]);
  const [deviceSelected, setDeviceSelected] = useState('');
  const [interfaceDev, setInterfaceDev] = useState([]);
  let { org_id } = useParams();
   const [device, setDevice] = useState({
  })
  useEffect(()=>{
    fetchDevice()
  }, [org_id]); 


  const fetchDevice = async () => {
    const DEVIDES_URI = `https://api.invitenetworks.com/v0/${org_id}/devices/` 
    const searchResult = await (await fetch(DEVIDES_URI, {
      methid:'get',
      headers: new Headers({
        'Authorization': apiToken
      })
    })).json();
    setDevices(searchResult);
  }

  const fetchInterface = async (interfaceIds) => {
    const interfaceDevRes=[];
    for(let i = 0;i< interfaceIds.length; i++){
      const INTERFACE_URI = `https://api.invitenetworks.com/v0/${org_id}/interfaces/${interfaceIds[i]}` 
      const searchResult = await (await fetch(INTERFACE_URI, {
       methid:'get',
       headers: new Headers({
         'Authorization': apiToken
       })
     })).json()
     interfaceDevRes.push(searchResult)
    }
     setInterfaceDev([interfaceDevRes])
   }
   useEffect(()=>{
   },[interfaceDev])


  useEffect(()=>{ 
    if(interfaceIds.length>0){
      fetchInterface(interfaceIds)
    }else{
      setInterfaceDev([])
    }
  }, [interfaceIds])

  return (
    <div className="content">
      <section className='main-content'>
      {
         devices.length > 0 && <h3>Devices:</h3>
      }

      {
        devices.map((device)=>(
          <Device key={device._id} device={device} setInterfaceIds ={setInterfaceIds} setDeviceSelected={setDeviceSelected}></Device>))
      }
      </section>
      <aside>
      
        {
         interfaceDev.length > 0 && <h3>{deviceSelected}  Interfaces:</h3>
        }
      {  
      interfaceDev.map((interfaceDev)=>(
          <Interfaces key={interfaceDev[0]._id} interfaceDev={interfaceDev[0]} ></Interfaces>
        ))
      }
      </aside>
    </div>
  )
}

export default DevicePage