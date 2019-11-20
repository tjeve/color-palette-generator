// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

const HelloWorld = () => {
    return(
        <div><h1>Hello World!</h1></div>
    )
}

const ColorBox = (props) => {

    let style = {
        backgroundColor: props.color,
        // flex: 1,
        width: "200px",
        height: "100vh"
    }
    console.log(style)
    return(
        <div style= {style} >Hello World!</div>
    )
}

const RandomizeDiv = () => {
    return( 
        <div className="text-center bg-dark fixed-top">
            <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
        </div>
    )
}

const ViewScreen = (props) => {
    return (
        <div style="background-color: blue" className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>#FF00FF</h1>
            <button className="btn btn-dark">UNLOCK</button>
        </div>
    )
}

const App = () => {
    // render()
    return(
        <div>
            <RandomizeDiv />
            <ColorBox color="red"/>
            <ColorBox color="white"/>
            <ColorBox color="blue"/>
            {/* <ViewScreen /> */}
        </div>
        )
    }

ReactDOM.render(<App />, document.getElementById("root"))



/* 

// Lessons Learned/Reminders

*  React JSX expressions can only have one parent element, so wrap everything in the return statement
in a div.

*/