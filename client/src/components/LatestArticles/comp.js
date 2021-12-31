import React from "react";
import { NavLink } from "react-router-dom";
import "./latestarticles.css"
import image1 from "../Homepage-Contents/homepage-5.jfif"

export default class Comp extends React.Component{
    state = {
        title:"Catch Waves with an adventure guide",
        description:"Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist destination. It has a plethora of temples and places.",
        category:"travel",
        date:"August 21 2017"
    }
    render(){
        return(
            <div>
                <hr/>
                <div className="comp-flex">
                    
                    <img src={image1} className="img-div1" alt=""/>
                    
                    <div className="comp-desc">
                        <p className="comp-title">{this.state.title}</p>
                        <p className="comp-description">{this.state.description}</p>
                        <p className="comp-category"><span className="comp-travel">{this.state.category}</span> / {this.state.date}</p>
                    </div>
                </div>
            </div>
        )
    }
}