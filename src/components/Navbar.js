import React from 'react';

const Navbar = ({text , SetText}) => {
    return (
        <div className='Navigation'>
      <input onChange={(e)=>SetText(e.target.value)} placeholder='Search your film.....'></input>
        </div>
    );
}

export default Navbar;
