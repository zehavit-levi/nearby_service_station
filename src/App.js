import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import AttributesList from './components/AttributesList/AttributesList';
import ResultRow from './components/ResultRow/ResultRow';

function App() {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [results , setResults] = useState(null);
  const [lat,setLat] = useState('');
  const [lon,setLon] = useState('');
  //get lan&lon from api
  useEffect(()=>{
    function success(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      const searchURL = "https://ravkavonline.co.il/api/pos/service-station/search/?lat=" + position.coords.latitude + '&lon=' + position.coords.longitude;
      axios.get(searchURL).then(response => {
        setResults(response.data)
        console.log(response.data)
      });
    }
    function error() {
      alert('Unable to retrieve your location');
    }
    if(!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  },[]);
 
  //builed get request for chacked attributes and lan&lon
  useEffect(()=>{
    if (lon!=='' && lat!==''){
    let searchURL="";
    if (selectedAttributes.length > 0 && lon!=='' && lat!=='') {
      searchURL = "https://ravkavonline.co.il/api/pos/service-station/search/?attributes="+selectedAttributes.toString() +"&lat=" + lat + '&lon=' + lon;
  }else{
    searchURL = "https://ravkavonline.co.il/api/pos/service-station/search/?lat=" + lat + '&lon=' + lon;
  }
  axios.get(searchURL).then(response => {
    setResults(response.data)
  });
}},[selectedAttributes]);
  //create list rows updated when sttributes change
  
  //create row component that get data
  return ( 
  <div className="app">
      <h1>Search Service Station Nearby</h1>
      <div className="attributes_list_container">
      <AttributesList  selectedAttributes={selectedAttributes} setSelectedAttributes={setSelectedAttributes}/>
      </div>
       <div>
        {results!== undefined && results!==null? results.data.results.map(res => {
          return(
        <ResultRow 
        address={res.service_station.address ? res.service_station.address : null}
        comments={res.service_station.comments ? res.service_station.comments : null}
        activity_hours={res.service_station.activity_hours ? res.service_station.activity_hours : null} />)}) : null}
       </div>
    </div>
  );
}

export default App;