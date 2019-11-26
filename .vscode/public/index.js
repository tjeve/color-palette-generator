// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

const HelloWorld = () => {
    return(
        <div><h1>Hello World!</h1></div>
    )
}

const ColorBox = (props) => {

    let style = {
        border: "2px solid gray",
        backgroundColor: props.color,
        width: "200px",
        height: "100vh"

    }
    console.log(style)
    return(
        <div style= { style } className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>#FF00FF</h1>
            <button className="btn btn-dark">UNLOCK</button>
        </div>

    )
}

const RandomizeDiv = () => {
    return( 
        <div className="text-center bg-dark fixed-top">
            <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
        </div>
    )
}

const App = () => {

    // render()
    return(
        <div>
            <RandomizeDiv />
            <ColorBox color="yellow" width="100"/>
            <ColorBox color="red" width="100" />
        </div>
        )
    }

ReactDOM.render(<App />, document.getElementById("root"))



/* 

// Lessons Learned/Reminders

*  React JSX expressions can only have one parent element, so wrap everything in the return statement
in a div.

*/