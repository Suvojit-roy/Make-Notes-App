import React, { useState } from 'react'
import './Newgoal.css'

const Newgoal= props =>{
    const [enteredtext,newtexthere]=useState("")

    const addnewgoal= event =>{
        event.preventDefault();

        
        const newGoal= {
            id: Math.random.toString(),
            text:enteredtext};

        newtexthere('');
        props.getnewgoal(newGoal);
    }


    const newvalueshere = event =>{
        newtexthere(event.target.value);
    }


    return <form className="newgoal" onSubmit={addnewgoal}>
        <input type="text" value={enteredtext} onChange={newvalueshere} ></input>
        <button type="submit">Add Goal</button>
    </form>


}

export default Newgoal