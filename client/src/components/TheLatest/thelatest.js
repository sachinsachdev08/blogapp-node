import React from "react";
import { useContext } from "react";
import { BlogContext } from "../../Context/blogcontext";
import "./thelatest.css"
import { NavLink } from "react-router-dom";
export default function Thelatest(){
    const blogdetails = useContext(BlogContext)
    return(
        <div className="thelatest-main">
            <p className="main-title">The Latest</p>
            <hr className="main-hr"/>
            <div className="thelatest-flexbox">
              {
                  blogdetails.slice(0,3).map((item)=>(
                    <div key={item.id} className="thelatest-div">
                    <div >
                        <img src={item.img1} className="img-div" alt=""/>
                    </div>
                    <div className="blog-desp">
                        <NavLink to={`/${item.category}/${item.id}`} exact>
                        <p className="title1">{item.title}</p>
                        </NavLink>
                        <p className="description">{item.description} </p>
                        <p className="category"><span className="travel">{item.category}</span> / {item.date}</p>
                    </div>
                    </div>
                  ))
              }
            </div>
        </div>
    )
}