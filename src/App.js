import Palette from "./Palatte";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import {Routes , Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<PaletteList />}/>
      <Route path='palette/:id' element={<Palette />} />
      <Route path='palette/:id/:shades' element={<SingleColorPalette />} />
    </Routes>
    </>
  );
}

export default App;
