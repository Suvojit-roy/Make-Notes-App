import React from 'react';
import './Listitem.css'

const Listitem = props => {
    return(
        <div>
            <ul className="tasklist">

                {
                props.getlist.map((item) => {
                return <li>{item.text}</li>        
                    })
                }
             </ul>
         </div>
    );

}

export default Listitem;