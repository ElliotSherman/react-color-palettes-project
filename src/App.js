import Palatte from "./Palatte";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div>
      <Palatte palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
