// import './App.css'
import {Button} from "ghw-components-library-vl-test"
import "ghw-components-library-vl-test/dist/style.css"
import CustomButton from "./Components/Button"
import TestArea from "./TestArea"

function App() {

  return (
    <>
      <section>
        <CustomButton className="hover:bg-pink-400 text-yellow-50" onClick={()=>console.log("Hello")} >Hello</CustomButton>
        <TestArea>
          <Button className="hover:bg-rose-600 text-yellow-50" onClick={()=> console.log("Byeeee")} >
            Bye bye
          </Button>
        </TestArea>
      </section>
    </>
  )
}

export default App
