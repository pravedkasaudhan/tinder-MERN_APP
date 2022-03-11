import './App.css';
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
     {/* <h1>Come On, Let's Build the MERN Tinder Clone!!</h1> */}
     <Header/>  
    {/* header */}
    <TinderCards/> 
    <SwipeButtons/>
    {/* tindercards */}
    {/* swipebuttons */}
    </div>
  );
}

export default App;
