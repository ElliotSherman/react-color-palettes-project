import Palette from "./Palatte";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import {Routes , Route } from 'react-router-dom'
import NewPaletteForm from "./NewPaletteForm";
import { useNavigate} from 'react-router-dom'
import {useState} from 'react'
import seedColors from "./seedColors";

function App() {
  const [palettes,setPalettes] = useState([...seedColors])
  const navigate = useNavigate();
  
  const savePalette = (newPalette) => (
    setPalettes([...palettes,newPalette]),    
    navigate('/')
    )
  return (
    <>
    <Routes>
      <Route  path='/' element={<PaletteList palettes={palettes}/>}/>
      <Route path='palette/:id' element={<Palette palettes={palettes}/>} />
      <Route path='palette/:id/:shades' element={<SingleColorPalette />} />
      <Route path='palette/new' element={<NewPaletteForm  savePalette={savePalette}/>}/>
    </Routes>
    </>
  );
}

export default App;
