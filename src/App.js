import Palette from "./Palatte";
import SingleColorPalette from "./SingleColorPalette";
import PaletteList from "./PaletteList";
import {Routes , Route } from 'react-router-dom'
import NewPaletteForm from "./NewPaletteForm";
import { useNavigate ,useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import seedColors from "./seedColors";
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import Page from "./Page";
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
      <Route  path='/' element={<Page><PaletteList palettes={palettes} deletMiniPalette={deletMiniPalette} /></Page>}/>
      <Route path='palette/:id' element={<Page><Palette palettes={palettes}/></Page>} />
      <Route path='palette/:id/:shades' element={<Page><SingleColorPalette palettes={palettes}/></Page>} />
      <Route path='palette/new' element={<Page><NewPaletteForm  savePalette={savePalette} palettes={palettes}/></Page>}/>
    </Routes>
    </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
