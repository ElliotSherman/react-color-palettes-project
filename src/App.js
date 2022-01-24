import Palatte from "./Palatte";
import {Routes , Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<h1>Individual Palette Page</h1>}/>
      <Route path='palette/:id' element={<Palatte />} />
      </Routes>
    </>
  );
}

export default App;
