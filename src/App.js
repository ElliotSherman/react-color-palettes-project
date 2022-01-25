import Palatte from "./Palatte";
import {Routes , Route } from 'react-router-dom'
import PaletteList from "./PaletteList";

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<PaletteList />}/>
      <Route path='palette/:id' element={<Palatte />} />
      <Route path='palette/:id/:shades' element={<h1>Single color page</h1>} />
    </Routes>
    </>
  );
}

export default App;
