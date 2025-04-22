import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AllTodo from './todoList/AllTodo';
import Home from './Home';
import Timeline from './timeline/Timeline'
import Start from './Start';
import Header from './hamburger/Header';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Timeline />}/>
          <Route path="/todo" element={<AllTodo />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/start" element={<Start />}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
