import './App.css';
import Header from "./Components/Header.js";
import TinderCards from "./Components/TinderCards.js";
import SwipeButtons from './Components/SwipeButtons';
import Chats from './Components/Chats';
import {
  BrowserRouter as Router,
  Route,
  Switch


} from "react-router-dom";
import ChatScreen from './Components/ChatScreen';


function App() {
  return (
    <div className="app">
      {/* <h1>Come On, Let's Build the MERN Tinder Clone!!</h1> */}
      <Router>
        <Switch>
          {/* regx is used to divert for specific person url for the chat screen */}
          <Route path="/chat/:person">
            <Header backbutton="/chat" />
            <ChatScreen />
          </Route>
          
          <Route path="/chat">
            <Header backbutton="/" />
            <Chats /> 
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />

          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;

