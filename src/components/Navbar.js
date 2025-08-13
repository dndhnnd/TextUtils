// import React from 'react'
// import PropTypes from 'prop-types'

// export default function Navbar(props) {
//   return (
//         // <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           // <nav className="navbar navbar-expand-lg bg-body-light">
//           <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">{props.Abouttext}</a>
//         </li>
//       </ul>
//       {/* <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form> */}
//       <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
//   <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
//   <label className="form-check-label" htmlFor="switchCheckDefault">Enable dark Mode</label>
// </div>
//     </div>
//   </div>
// </nav>
 
//   )
// }
// Navbar.propTypes = {title : PropTypes.string.isRequired,
//                  Abouttext : PropTypes.string.isRequired};
// Navbar.defaultProps= {
//   title : "new title",
//   Abouttext : "About"
// }; 


import React from 'react';

export default function Navbar({ title, mode, toggleMode, onColorChange }) {
  const colors = [
    { name: 'Green', light: '#90ee90', dark: '#004d00' },
    { name: 'Blue', light: '#add8e6', dark: '#001f3f' },
    { name: 'Red', light: '#ffb3b3', dark: '#660000' },
    { name: 'Purple', light: '#e6ccff', dark: '#330033' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>

        <div className="d-flex align-items-center">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => onColorChange(c)}
              className="mx-1"
              style={{
                backgroundColor: c.light,
                border: 'none',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                cursor: 'pointer'
              }}
              title={c.name}
            ></button>
          ))}
        </div>

        <div className="form-check form-switch mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={toggleMode}
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

