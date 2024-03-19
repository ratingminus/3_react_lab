import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home';
import ListBox from './ListBox';
import TaskList from './TaskList';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/ListBox" element={<ListBox />} />
        <Route path="/TaskList" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
