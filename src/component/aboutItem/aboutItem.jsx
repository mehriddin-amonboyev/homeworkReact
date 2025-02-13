import React from "react";
import "./aboutItem.css"
import Button from "../button/button";

function AboutItem({button, title, subTitle}) {
    return (
        <>
            <div className="about_item__block">
                <Button title = {button} />
                <div className="about_item__title_block">
                    <h3 className="about_item__title">
                        {title}
                    </h3>
                    <p className="about_item__sub_title">
                        {subTitle}
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutItem;