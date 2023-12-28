import './App.css'
import {GridDisplay} from "./stories/GridDisplay.tsx";

function App() {
  return (
    <>
        <h1>(Reverse) Sudoku</h1>
      <div>
          <GridDisplay/>
      </div>
      <p >
        Click on the buttons to set the puzzle. It'll solve it as you go.
      </p>
    </>
  )
}

export default App
