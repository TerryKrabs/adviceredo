import React from 'react';
import './App.css';
import { adviceGenerator } from './dataServices/dataServices';
import { useEffect, useState } from 'react';
import adviceString from './interface/interface';
 
function App() {

  const [trigger, setTrigger] = useState(true);
  const [adviceInfo, setAdviceInfo] = useState<adviceString>();
  const callTrigger = () => {
    setTrigger(!trigger)
  }

  useEffect(() =>{
    const adviceEffect = async () =>{
      const fetchData: adviceString = await adviceGenerator();
      setAdviceInfo(fetchData);
      console.log(fetchData)
    }
    adviceEffect();
  }, [trigger] );

  return (

    // Top div acts as a Body Tag
    <div>
    <div className="App">
    <div className="advice-card">
    <div className="advice-number" style={{paddingTop:"25px"}}>ADVICE #{adviceInfo?.slip.id}</div>
      <p className="advice-text">
   {adviceInfo?.slip.adviceString} 
      </p>
      <div>
      <svg className='divider' style={{paddingTop:"25px", paddingBottom:"45px"}} xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g  transform="translate(212)" fill="#CEE3E9"><rect   className='divider2' rx="3"/><rect x="14" className='divider3' rx="3"/></g></g></svg>
      </div>
     
      <button  className="advice-action-btn"  >
<svg width="24"  height="24" xmlns="http://www.w3.org/2000/svg" onClick={callTrigger}><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
      </button>

    </div>
    
  </div>
  </div>


  );
}

export default App;
