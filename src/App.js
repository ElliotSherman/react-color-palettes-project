import Palatte from "./Palatte";
import {Routes , Route } from 'react-router-dom'
import PaletteList from "./PaletteList";

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<PaletteList />}/>
      <Route path='palette/:id' element={<Palatte />} />
      </Routes>
    </>
  );
}

export default App;
