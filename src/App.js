import Palette from "./Palatte";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import {Routes , Route } from 'react-router-dom'
import NewPaletteForm from "./NewPaletteForm";
import { useNavigate ,useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import seedColors from "./seedColors";
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import './App.css'
function App() {
  const location = useLocation();
  // console.log("location", location);
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
    <TransitionGroup component={null}>
    <CSSTransition
        key={location.pathname}
        classNames='fade'
        timeout={500}
      >
    <Routes location={location}>
      <Route  path='/' element={<div className="page"><PaletteList palettes={palettes} deletMiniPalette={deletMiniPalette} /></div>}/>
      <Route path='palette/:id' element={<div className="page"><Palette palettes={palettes}/></div>} />
      <Route path='palette/:id/:shades' element={<div className="page"><SingleColorPalette palettes={palettes}/></div>} />
      <Route path='palette/new' element={<div className="page"><NewPaletteForm  savePalette={savePalette} palettes={palettes}/></div>}/>
    </Routes>
    </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
