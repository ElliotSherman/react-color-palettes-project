import Palatte from "./Palatte";
import seedColors from "./seedColors";
function App() {
  return (
    <div>
      <Palatte {...seedColors[4]}/>
    </div>
  );
}

export default App;
