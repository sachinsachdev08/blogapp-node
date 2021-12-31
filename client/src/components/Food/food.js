import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { useEffect ,  useState } from "react";
import "../LatestArticles/latestarticles.css"
import Toppost from "../TopPosts/toppost";
import axios from "axios";

export default function Food(){
    const [ backend , setBackend ] = useState([])
    
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('http://localhost:5000/api/v1/blogs/Food')
        .then((res)=>setBackend(res.data));
      }, []);
    
    if(backend.length === 0){
        return null;
    }
    else{
        console.log(backend.filtered);
        return(
        <>
        <Navbar/>
        <div className="latest-main">
            <p className="main-title">Latest Articles</p>
            <hr className="main-hr"/>
            <div className="latest-flexbox">
                <div className="comp-div">
                    {
                        backend.filter(value=>value.category==="Food").map((item)=>(
                            <div>
                                <hr/>
                                <div className="comp-flex">
                    
                                <img src={item.img1} className="img-div1" alt=""/>
                    
                            <div className="comp-desc">
                                <NavLink to={`/${item.category}/${item.id}`}>
                                    <p className="comp-title">{item.title}</p>
                                </NavLink>
                                <p className="comp-description">{item.description}</p>
                            <p className="comp-category"><span className="comp-travel">{item.category}</span> / {item.date}</p>
                            </div>
                            </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className="advert">
                    Advertisement
                </div>
            </div>
        </div>
        <Toppost/>
        
        </>
    )
    }
}
