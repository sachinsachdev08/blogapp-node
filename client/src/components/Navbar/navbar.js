import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import MenuIcon from '@material-ui/icons/Menu';

export default class Navbar extends React.Component{
    state={
        nav:false
    }
    showNav=()=>{
        this.setState({nav:!this.state.nav})
        console.log(this.state.nav);
    }
    render(){
        return(
            <>
                        <div className="menu" onClick={this.showNav} ><MenuIcon></MenuIcon></div>

            {
                    (this.state.nav) && (
                        <div className="second-nav">
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                            <NavLink exact to="/Bollywood" activeClassName="active">Bollywood</NavLink>
                            <NavLink exact to="/Technology" activeClassName="active">Technology</NavLink>
                            <NavLink exact to="/Hollywood" activeClassName="active">Hollywood</NavLink>
                            <NavLink exact to="/Fitness" activeClassName="active">Fitness</NavLink>
                            <NavLink exact to="/Food" activeClassName="active">Food</NavLink>
                        </div>
                    )
                }
            <div className="nav-main">
                <NavLink to ="/">
                <div className="siren">
                    <div className="rotate">The</div><div className="heading"> Siren</div>
                    
                </div>
                </NavLink>
                <hr className="res-hr"/>
                
                <div className="nav">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="/Bollywood" activeClassName="active">Bollywood</NavLink>
                <NavLink exact to="/Technology" activeClassName="active">Technology</NavLink>
                <NavLink exact to="/Hollywood" activeClassName="active">Hollywood</NavLink>
                <NavLink exact to="/Fitness" activeClassName="active">Fitness</NavLink>
                <NavLink exact to="/Food" activeClassName="active">Food</NavLink>

                <hr className="nav-hr"/>
                </div>
            </div>
            </>
        )
    }
}
