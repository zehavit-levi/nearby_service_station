import { useState } from 'react';
import './App.css';
import AttributesList from './components/AttributesList/AttributesList';
import ResultRow from './components/ResultRow/ResultRow';

function App() {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [results , setResults] = useState([]);
  console.log(selectedAttributes);
  //get lan&lon from api
  //builed get request for chacked attributes and lan&lon
  //create list rows updated when sttributes change
  
  //create row component that get data
  return ( 
  <div className="app">
      <h1>Search Service Station Nearby</h1>
      <AttributesList selectedAttributes={selectedAttributes} setSelectedAttributes={setSelectedAttributes}/>
      {results.length > 0 ?
      results.map(result => <ResultRow data={result}/>): null}
    </div>
  );
}

export default App;