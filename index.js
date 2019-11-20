// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

const RandomizeDiv = () => {
    return( 
        <div class="text-center bg-dark fixed-top">
            <button class="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
        </div>
    )
}

const ViewScreen = (props) => {
    return (
        <div style="background-color: blue" class="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>#FF00FF</h1>
            <button class="btn btn-dark">UNLOCK</button>
        </div>
    )
}

const App = () => {

    render() {
        return(
            <div>
                <RandomizeDiv /> 
                {/* <ViewScreen /> */}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))



/* 

// Lessons Learned/Reminders

*  React JSX expressions can only have one parent element, so wrap everything in the return statement
in a div.

*/