import React from "react"

function ButtonPannel(props){

 

    return(
        <div className="buttons">
               <div className="button number" onClick={props.clickHandler}>7</div>
               <div className="button number" onClick={props.clickHandler}>8</div>
               <div className="button number" onClick={props.clickHandler}>9</div>
               <div className="button del" onClick={props.backspace}>Del</div>
               <div className="button number" onClick={props.clickHandler}>4</div>
               <div className="button number" onClick={props.clickHandler}>5</div>
               <div className="button number" onClick={props.clickHandler}>6</div>
               <div className="button symbol" onClick={props.clickHandler}>+</div>
               <div className="button number" onClick={props.clickHandler}>1</div>
               <div className="button number" onClick={props.clickHandler}>2</div>
               <div className="button number" onClick={props.clickHandler}>3</div>
               <div className="button symbol" onClick={props.clickHandler}>-</div>
               <div className="button symbol" onClick={props.clickHandler}>.</div>
               <div className="button number" onClick={props.clickHandler}>0</div>
               <div className="button symbol" onClick={props.clickHandler}>/</div>
               <div className="button symbol" onClick={props.clickHandler}>x</div>
               <div className="button reset" onClick={props.reset}>Reset</div>
               <div className="button symbol equal" onClick={props.showAnswer}>=</div>
        </div>
    )
}

export default ButtonPannel