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

class App extends React.Component {
    //The initial state is set as 3 newBoxes
    state = {
        boxes: [this._newBox(), this._newBox(), this._newBox()]
    }

    _newBox() {
        return {
            color: this._randomColor()

        }
    }

    _randomColor() {
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }

    render () {
        return (
            <div>
                <RandomizeDiv />
                <ColorBox color="yellow" width="100"/>
                {/* <div>{this.state.boxes}</div> */}
            </div> 
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))



/* 

// Lessons Learned/Reminders

*  React JSX expressions can only have one parent element, so wrap everything in the return statement
in a div.
* If App is defined as a class, then your return statement must be in nested in a render component. Before when you
wrote App as a function definition you only needed a return.

*/