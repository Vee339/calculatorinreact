import React from "react"
import ReactDOM from "react-dom"
import './css/style.css'
import Header from "./components/Header.js"
import ResultPanel from "./components/ResultPanel.js"
import ButtonPanel from "./components/ButtonsPanel.js"

import {evaluate , round} from "mathjs"
 
function App(){
    
    const [theme, setTheme] = React.useState("theme1")
    const [input, setInput] = React.useState("")

    function handleChange(){
        if(theme === "theme1"){
            setTheme("theme2")
        }else if(theme === "theme2"){
            setTheme("theme3")
        }else{
            setTheme("theme1")
        }
    }

    function clickHandler(event){
        var val = event.target.innerHTML
        setInput(input + val)
    }

    function backspace(){
        setInput(input.toString().slice(0,-1))
    }

    function reset(){
        setInput("")
    }

    function showAnswer(){
        if(input === "") return;
        
        let finalexpression = input;
         
        finalexpression = finalexpression.replaceAll("x","*")

        setInput(evaluate(finalexpression))
    }

    return(
        <section className={theme} >
             <Header themeChange={handleChange}/>
             <ResultPanel value={input}/>
             <ButtonPanel 
                clickHandler = {clickHandler} 
                backspace = {backspace}
                reset = {reset}
                showAnswer = {showAnswer}
             />
        </section>
    ) 
}

export default App