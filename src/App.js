import './App.css';
import BlogPost from './BlogPost';
import BlogList from './BlogList';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/posts/:postName" element={<BlogPost />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;



