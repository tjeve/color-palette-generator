// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

const HelloWorld = () => {
    return(
        <div><h1>Hello World!</h1></div>
    )
}

const ColorBox = (props, idx, _allBoxes) => {

    let style = {
        border: "2px solid gray",
        backgroundColor: props.color,
        width: "200px",
        height: "100vh"

    }

    let btnText = 'Unlocked'
        if (props.isLocked) {
            btnText = 'Locked'
        }

    console.log(idx)
    return(
        <div key={idx} style={style} className="w-100 d-flex flex-column align-items-center justify-content-center">
            {/* <h1>#FF00FF</h1>
            <button className="btn btn-dark">UNLOCK</button> */}
            <h1>{props.color}</h1>
            <button className="btn btn-secondary m-1" onClick={props.toggleLock}>{btnText}</button>
        </div>

    )
}

class App extends React.Component {
    //The initial state is set as 3 newBoxes
    state = {
        boxes: [
            this._newBox(), 
            this._newBox(), 
            this._newBox()
        ]
    }

    _newBox() {
        return {
            color: this._randomColor(),
            isLocked: false
          }
    }

    randomize() {
        const currentBoxes = [...this.state.boxes]
        const newBoxes = currentBoxes.map((box) => {
          if (!box.isLocked) {
            box.color = this._randomColor();
          }
          return box;
        })
        this.setState({boxes: newBoxes})
      }

    _randomColor() {
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }

    toggleLock(idx) {
        // TODO: check here that idx is a valid array index
        const newBoxes = [...this.state.boxes]
        newBoxes[idx].isLocked = !newBoxes[idx].isLocked
        this.setState({boxes: newBoxes})
      }
    
    addBox() {
        // newBoxes takes the current state of boxes and adds a new box to that array
        const newBoxes = [...this.state.boxes, this._newBox()]
        this.setState({boxes: newBoxes})
    }

    removeBox() {
        const newBoxes = [...this.state.boxes]
        newBoxes.pop()
        this.setState({boxes: newBoxes})
    }

    render () {

        const boxesWithClickFn = this.state.boxes.map((box, idx) => {
            box.toggleLock = () => this.toggleLock(idx)
            return box
          })

        return (
            <div className="container">
                <div className="text-center">
                    <div className="text-center bg-dark fixed-top">
                        <button className="btn btn-secondary m-1" onClick={() => this.randomize()}>Randomize!</button>
                        <button className="btn btn-secondary m-1" onClick={() => this.addBox()}>Add Box</button>
                        <button className="btn btn-secondary m-1" onClick={() => this.removeBox()}>Remove Box</button>
                        <div className="container">
                            {boxesWithClickFn.map(ColorBox)}
                        </div>
                    </div>
                </div>
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