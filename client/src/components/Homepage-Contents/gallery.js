import React , { useContext , useEffect , useState } from "react";
import { NavLink } from "react-router-dom";
import { BlogContext } from "../../Context/blogcontext";
import Thelatest from "../TheLatest/thelatest";
import "./gallery.css"
import axios from "axios";


export default function Gallery() {
    const [ backend , setBackend ] = useState([]);
    const blogdetails = useContext(BlogContext)
    console.log(blogdetails)
    const details1 = blogdetails.filter(value=>value.id===5);

    console.log(details1)
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('/api/v1/gallery')
        .then((res)=>setBackend(res.data));
      },[]);
      console.log(backend)

    if(backend.length===0){
        return null;
    }
    else{
         return(
        <>
        <div className="gallery-main">
            <div>
                <NavLink to={`/${backend[1].category}/${backend[1].id}`}><img src={backend[1].img1} className="gallery-1" alt="blog"/></NavLink>
            </div>
            <div className="gallery-2">
                <div>
                    <NavLink to={`/${backend[2].category}/${backend[2].id}`}><img className="img-2" src={backend[2].img1} alt="blog" /></NavLink>
                </div>
                <div>
                   <NavLink to={`/${backend[0].category}/${backend[0].id}`}> <img className="img-3" src={backend[0].img1} alt="blog" /></NavLink>
                </div>
            </div>

            
            
        </div>
        <Thelatest/>
        
        </>
    )
    }
   
}