import logo from "./logo.svg";
import {Home} from './Home'
import {SingleTour} from './SingleTour'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 

function App() {
  <Router>
      <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/tours/:id" children={<SingleProduct/>}/>
      </Switch>
  </Router>
}

export default App;
