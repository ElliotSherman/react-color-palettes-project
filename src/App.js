import Palatte from "./Palatte";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import {Routes ,Route, Outlet } from 'react-router-dom'
import ColorBox from "./ColorBox";

function App() {
  return (
    <div>
      {/* <Palatte palette={generatePalette(seedColors[4])}/> */}
      <Routes>

        <Route 
          path='/' 
          element={<Palatte palette={generatePalette(seedColors[4])}/>}
          />

          <Route path="palette/:id" element={<h1>Palette Color :id</h1>} />
          
      </Routes>
    </div>
  );
}

export default App;
