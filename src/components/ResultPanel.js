import React from "react"

function ResultPanel(props){
    return(
        <div className="result">
                <input type="text" value={props.value}/>
             
        </div>
    )
}

export default ResultPanel