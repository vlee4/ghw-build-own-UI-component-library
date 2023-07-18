import './App.css'
// import {Button} from "ghw-components-library-vl-test"
import Button from "./Components/Button"
import TestArea from "./TestArea"

function App() {

  return (
    <>
      <section>
        <TestArea>
          <Button onClick={()=> console.log("Hello World")} style={{color:"red"}}>
          Hello World
          </Button>
        </TestArea>
      </section>
    </>
  )
}

export default App
