import { fireEvent, render, screen } from "@testing-library/react";
import { vi, test, expect, describe} from "vitest";
import Button from "../../Components/Button"


describe("The button...", ()=>{
    const onClick = vi.fn() //mock onClick event

    test("is rendered", ()=>{
        render(<Button onClick={onClick}>GHW</Button>)
        const buttonEl = screen.getByRole('button', {name: /GHW/i})
    
        expect(buttonEl).toBeInTheDocument()
    
    
    })

    test("triggers an onClick event when clicked", ()=>{
        render(<Button onClick={onClick}>GHW</Button>)
        const buttonEl = screen.getByRole('button', {name: /GHW/i})
    
        fireEvent.click(buttonEl)
        expect(onClick).toHaveBeenCalled()

    })
})