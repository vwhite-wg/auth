import React, {useEffect, useState} from 'react';
import './App.css';
import Table from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import {data} from './lpr_partial'
import logo from './assets/logo-dark.png';
// import map from './assets/Map.png';
// import {gsmData} from './gsm_data'
// import GsmInterface from './components/GsmInterface';

function App() {
  const [search, setSearch] = useState('')


//   const handleChange = (e) => {
//     setGsmSearch(e.target.value)
// }
// function gsmSearchCb(GsmInterface){
//   console.log(gsmSearch)
// }
  
  // const [gsmSearch, setGsmSearch] = useState('')
  // console.log(gsmSearch)
  // const vehicleColors = [
  //   { label: 'white', value: 'White' },
  //   { label: 'black', value: 'Black' },
  //   { label: 'silver', value: 'Silver' },
  //   { label: 'red', value: 'Red' },
  //   { label: 'blue', value: 'Blue' },
  //   { label: 'yellow', value: 'Yellow' },
  //   { label: 'brown', value: 'Brown' },
  //   { label: 'multi', value: 'Multi' }
    
  // ];
  
  return (
    <div className="App">
      <Container>
        <img  className='logo' src={logo} alt='logo'></img>
        <Form>
          <InputGroup>
          <label>
            License Plate:
          </label>
            <FormControl onChange={(e) => setSearch(e.target.value)} placeholder='Search' minLength='2'>
            </FormControl>
          </InputGroup>
          {/* <label>
            Vehicle Color:
          </label>
          <Select
            options={vehicleColors}
            onChange={opt => console.log(opt.label, opt.value)}
          /> */}
          {/* Eventually change the functions that handle the IMSI # and MAC address */}
          <InputGroup>
          <label>
            IMSI Number:
          </label>
            <FormControl placeholder='Search'>
            </FormControl>
          </InputGroup>

          {/* <GsmInterface handleChange={handleChange} gsmSearch={gsmSearch} setGsmSearch={setGsmSearch} /> */}
        
          <Table className='table table-striped'>
            <thead >
              <tr>
                <th>License Plate</th>
                <th>Plate Confidence</th>
                <th>Make</th>
                <th>Color</th>
                <th>Last Traced Address</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody key={data.id}>
              {data.filter((item) => {
                return search.toLowerCase() === '' ? item : item.license_plate.toLowerCase().includes(search)
              })
              .map((item) =>(
                <tr>
                <td className='col1'>{item.license_plate}</td>
                <td>{item.plate_confidence}</td>
                <td>{item.make}</td>
                <td>{item.color}</td>
                <td>{item.loc_address}</td>
                <td>{item.loc_state}</td>
                <td>{item.loc_zip}</td>
                <td>{item.color}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
              </tr>
              ))}
            </tbody>
            {/* <tbody key={gsmData.id}>
        {gsmData.filter((item) => {
          return gsmSearch === '' ? item : item.imsi.includes(gsmSearch)
        })
        .map((item) =>(
          <tr>
          <td className='col1'>{item.imsi}</td>
          <td class='imsiData'>{item.network}</td>
          <td class='imsiData'>{item.operator}</td>
          <td class='imsiData'>{item.loc_name}</td>
          <td class='imsiData'>{item.loc_city}</td>
          <td class='imsiData'>{item.loc_state}</td>
          <td class='imsiData'>{item.date}</td>
          <td class='imsiData'>{item.time}</td>
        </tr>
        ))}
      </tbody> */}
          </Table>
          </Form>
          {/* <img src={map}></img> */}
      </Container>
    </div>
  );
}

export default App;