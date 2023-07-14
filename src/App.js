import React from "react";
import Animation from "./components/Animation";
import Header from "./components/header";
import Feature from "./components/feature";
import About from "./components/About";
import Contact from "./components/contact";
import Presentation from "./components/presentation";
import aboutimages from './images/Frame 19.png';
import aboutimages1 from './images/download.png';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Animation/> */}
      <Feature/>
      <About image={aboutimages} title='srnunfqKQWENMQP EIOFJMQK FQEPOD' button='Get The App'/>
      <Presentation/>
      <About image={aboutimages1} title='Download and Get the app now' button='Download'/>
      <Contact/>
    </div>
  );
}

export default App;
