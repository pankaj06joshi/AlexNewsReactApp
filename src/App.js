import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div>
       <Router>
      <Navbar/>
        <Switch>
        <Route exact path="/"> <News  topic="news" /></Route>
        <Route exact path="/tech"> <News  topic="tech" /></Route>
        <Route exact path="/sports"> <News topic="sport" /></Route>
        <Route exact path="/finance"> <News  topic="finance" /></Route>
        <Route exact path="/politics"> <News  topic="politics" /></Route>
        <Route exact path="/entertaiment"> <News  topic="entertainment" /></Route>
        <Route exact path="/travel"> <News  topic="travel" /></Route>
        <Route exact path="/science"> <News  topic="science" /></Route>
      </Switch>
      </Router>
    </div>
  )
}



export default App
