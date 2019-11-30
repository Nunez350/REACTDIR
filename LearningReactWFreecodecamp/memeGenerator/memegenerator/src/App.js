import React from 'react';

import './style.css';
import MemeGenerator from "./MemeGenerator"
import Header from './Header';
/** create 2 new component s - header and memgenerator
 * header will only display thinf=gs
 * memgenerator will be calling to an API and holding on to data
 * each should be in their  own file of the same name
 */
function App() {
  
  return (
    <div>
       <h1> Hello ROy! </h1>
       
      <Header/>
      <MemeGenerator/>
    </div>
   
      

  );
}

export default App


