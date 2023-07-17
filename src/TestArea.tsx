import {PropsWithChildren} from "react";

const TestArea = (props: PropsWithChildren) => {
    return(
        <div>
            <section style={{border: '2px solid blue', margin: '2px', padding: '2px'}}>
                <div>{props.children}</div>
            </section>
        </div>
    )
}

export default TestArea;