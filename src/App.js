// // import logo from './logo.svg';
// import Alert from './Alert';
// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React, { useState } from 'react';
// // import About from './components/About';
// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message,type) => {
//       setAlert({
//           msg : message,
//           type : type
//       });
//       setTimeout(() => {
//         setAlert(null);
//       }, 1500);
//     }

//     const toggleMode = () => {
//       if (mode === 'light') {
//         setMode('dark');
//         document.body.style.backgroundColor = '#042743';
//         showAlert("Dark mode has been enabled","success")
//       }
//       else {
//         setMode('light');
//         document.body.style.backgroundColor = 'white';
//         showAlert("Light mode has been enabled","success")
//       }
//     }
//     return (
//       <>
//         {/* <Navbar title = "TextUtils56" Abouttext="about textutils" mode={darkMode}/> */}
//         <Navbar title="TextUtils56 " Abouttext="" mode={mode} toggleMode={toggleMode} />
//         <Alert alert={alert} />

//         <div className="container my-3" >
//           <TextForm showAlert={showAlert} heading="Give input below" mode={mode} />
//           {/* <About/> */}
//         </div>

//       </>


//       /* <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Edit <code>src/App.js</code> and save to reload.
//       //     </p>
//       //     <a
//       //       className="App-link"
//       //       href="https://reactjs.org"
//       //       target="_blank"
//       //       rel="noopener noreferrer"
//       //     >
//       //       Learn React with me
//       //     </a>
//       //   </header>
//       // </div>*/
//     );
//   }

//   export default App;


import Alert from './components/Alert';
// import Alert from './Alert';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import TextForm from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [themeColor, setThemeColor] = useState(null); // Store selected color

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleColorChange = (color) => {
    setThemeColor(color);
    if (mode === 'light') {
      document.body.style.backgroundColor = color.light; // Light mode version
      
    } else {
      document.body.style.backgroundColor = color.dark; // Dark mode version
      
    }
    showAlert(`${color.name} theme applied`, "success");
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = themeColor ? themeColor.dark : '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title ="TextUtil - dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = themeColor ? themeColor.light : 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title ="TextUtil - light mode";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils56"
        mode={mode}
        toggleMode={toggleMode}
        onColorChange={handleColorChange} // Pass handler to Navbar
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Give input below" mode={mode} />
        <About    />
      </div>
    </>
  );
}

export default App;

