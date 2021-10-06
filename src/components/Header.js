import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  // const dummy = 'Header';
  const headerContainer = 'border p-5 center shadow-md mb-7'
  const navButton = 'p-3 border m-3 rounded-lg'
  return (
    <div className={`${headerContainer  } flex justify-between`}>
      <Link to='/'>
        <h1 className={navButton}>home</h1>
      </Link>

      {/* <h1 className={`${navButton  } `}>cart</h1> */}
    </div>
  )
}

export default Header;