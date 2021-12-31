import { useEffect } from "react";
import "./top.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Toppost(){
    const [ backend , setBackend ] = useState([]);
    const [showMore,setshowMore] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('/api/v1/top')
        .then((res)=>setBackend(res.data));
      }, []);
    return(
        <div className="top-main">
            <p className="top-title">Top Post</p>
            <hr className="top-hr"/>
            <div className="top-flexbox">
              {
                  backend.slice(0,3).map((item)=>(
                    <div key={item.id} className="top-div">
                    <div >
                        <img src={item.img1} className="img-div" alt=""/>
                    </div>
                    <div className="blog-desp">
                        <NavLink to={`/${item.category}/${item.id}`} exact>
                        <p className="title1">{item.title}</p>
                        </NavLink>
                        <p className="description">{item.description} </p>
                        <p className="category"><span className="travel">{item.category}</span> / {item.date}/ Likes - <span className="likes">{item.likes}</span></p>
                    </div>
                    </div>
                  ))
              }
              {
                  (showMore) && (
                    backend.slice(3,5).map((item)=>(
                        <div className="top-div">
                        <div >
                            <img src={item.img1} className="img-div" alt=""/>
                        </div>
                        <div className="blog-desp">
                            <NavLink to={`/${item.category}/${item.id}`} exact>
                            <p className="title1">{item.title}</p>
                            </NavLink>
                            <p className="description">{item.description} </p>
                            <p className="category"><span className="travel">{item.category}</span> / {item.date}/ Likes - <span className="likes">{item.likes}</span></p>
                        </div>
                        </div>
                      ))
                  )
              }
            
            </div>
            {
                showMore?(<button className="top-button" onClick={()=>setshowMore(false)}>Load less</button>):(<button className="top-button" onClick={()=>setshowMore(true)}>Load More</button>)
            }
        </div>
    )
}
