import React,{useState} from 'react';

import './App.css';


import Listitem from './components/listitem/Listitem';
import Newgoal from './components/Newgoal/Newgoal';

function App() {

  let [list,liststate]=useState([
      
  ]);


  const addgoal=(goal) =>{
    liststate((presentgoal)=>{
      return presentgoal.concat(goal);
    })

    

  }

  return (
    <div className="complete">
      <div className="heading"><h2>ENTER YOUR NOTES HERE</h2></div>
      <hr></hr>
      <Newgoal getnewgoal={addgoal}/>
      <Listitem getlist={list} />

    </div>
  );
}

export default App;
