import React from "react";
import './button.css'
function Button({title = "Get Started"}) {
    return (
        <>
            <button className="button">
                <span className="button__title">
                    {title}
                </span>
            </button>
        </>
    )
}

export default Button;