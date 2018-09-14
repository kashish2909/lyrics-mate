import React from 'react'

import Logo from '../../assets/clef.svg';

const navbar =  () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto">
        <span className="navbar-brand mb-0 h1 mx-auto">
          <img 
            src={Logo}
            alt="Logo"
            style={{
              width: '1.75em'
            }}
          />
        </span>
        LyricsMate
      </span>
    </nav>
  )
}

export default navbar;