import React from "react"
import ReactDOM from "react-dom"

function Header(props){


    return(
        <div className="header">
            <div className="logo">Calc</div>
            <div className="theme">
                <p>Theme</p>
                <div className="changeTheme">
                    <div className="nums"><span>1 </span><span>2 </span><span>3</span></div>
                    <div className="slider" onClick={props.themeChange}>
                        <div className="toggleBtn"></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header