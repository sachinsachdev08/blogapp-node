import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"

import BlogProvider from './Context/blogcontext';
import Homepage from './components/Homepage/homepage';
import Bollywood from './components/Bollywood/bollywood';
import Hollywood from './components/Hollywood/hollywood';
import Technology from './components/Technology/technology';
import BlogPage from './components/Blogpage/blogpage';
import Fitness from './components/Fitness/fitness';
import Food from './components/Food/food';

function App() {
  return (
      <Router>
        <BlogProvider>
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/Bollywood"component={Bollywood}></Route>
            <Route exact path="/Hollywood"component={Hollywood}></Route>
            <Route exact path="/Technology"component={Technology}></Route>
            <Route exact path="/Fitness" component={Fitness}></Route>
            <Route exact path="/Food" component={Food}></Route>

            <Route exact path="/:category/:id" component={BlogPage}></Route>
          </Switch>
        </BlogProvider>
      
      </Router>
      );
}

export default App;
