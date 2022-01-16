import Palatte from "./Palatte";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div>
      <Palatte {...seedColors[4]}/>
    </div>
  );
}

export default App;
