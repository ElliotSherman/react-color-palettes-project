import Palatte from "./Palatte";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import {Routes , Route , Outlet } from 'react-router-dom'
import { Palette } from "@mui/icons-material";
function App() {
  return (
    // <div>
    //   <Palatte palette={generatePalette(seedColors[4])}/>
    // </div>
    <>
    <Routes>
      <Route  path='/' element={<Palatte palette={generatePalette(seedColors[4])}/>}/>
      <Route path='palette' element={<h1>Individual Palette Page</h1> } />
      </Routes>
    </>
  );
}

export default App;
