import {PropsWithChildren} from "react";

const TestArea = (props: PropsWithChildren) => {
    return(
        <div>
            <section style={{border: '2px solid blue', margin: '2em', padding: '2em'}}>
                <div>{props.children}</div>
            </section>
        </div>
    )
}

export default TestArea;