// import './App.css'
import {Button} from "ghw-components-library-vl-test"
// import "ghw-components-library-vl-test/dist/style.css"
import CustomButton from "./Components/Button"
import TestArea from "./TestArea"

function App() {

  return (
    <>
      <section>
        <CustomButton color="blue" onClick={()=>console.log("Hello")} >Hello</CustomButton>
        <TestArea>
          <Button className="bg-lime-600" onClick={()=> console.log("Byeeee")} >
            Bye bye
          </Button>
        </TestArea>
      </section>
    </>
  )
}

export default App
