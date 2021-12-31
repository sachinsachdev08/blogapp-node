import { Switch , Route } from "react-router-dom";
import App from "../../App";
import Bollywood from "../Bollywood/bollywood";


export default function Switchroute(){
    return(
        <Switch>
            <Route exact to="/" component={App}></Route>
            <Route exact to="/Bollywood" component={Bollywood}></Route>
        </Switch>
    )
}
