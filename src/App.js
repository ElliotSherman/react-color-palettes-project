import Palette from "./Palatte";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import {Routes , Route } from 'react-router-dom'
import NewPaletteForm from "./NewPaletteForm";
import { useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import seedColors from "./seedColors";

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
  const [palettes,setPalettes] = useState( savedPalettes || seedColors)

  const navigate = useNavigate();

  const deletMiniPalette = (id) =>{
    setPalettes(palettes.filter(palette => palette.id !== id))
  }
  const savePalette = (newPalette) => {
    setPalettes([...palettes,newPalette])
    navigate('/')
  }
  function syncLocalStorage(){
     window.localStorage.setItem("palettes",
      JSON.stringify(palettes)
      );
  }
  useEffect(()=>{
    syncLocalStorage();
  },[palettes])

  return (
    <>
    <Routes>
      <Route  path='/' element={<PaletteList palettes={palettes} deletMiniPalette={deletMiniPalette} />}/>
      <Route path='palette/:id' element={<Palette palettes={palettes}/>} />
      <Route path='palette/:id/:shades' element={<SingleColorPalette palettes={palettes}/>} />
      <Route path='palette/new' element={<NewPaletteForm  savePalette={savePalette} palettes={palettes}/>}/>
    </Routes>
    </>
  );
}

export default App;
