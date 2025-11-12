import React, { useState } from 'react';
import './App.css';
import PostThumbnail from './components/PostThumbnail';
import meeting01 from './images/meeting01.png';
import PostOne from './posts/postOne.js';



function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'one') {
    return (
      <div className="App">
        <header className="App-header">
          <PostOne onBack={() => navigateTo('home')} />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <title>Etown Homelab Blog</title>

        <div id='title-container'>
          <h1>Etown Homelab Blog</h1>
          <p className="subtitle">Welcome to the Etown Homelab Blog!</p>
        </div>

        <div>
          <h2>Posts</h2>
          <div id="posts-container">
            <nav>
              <button className="postButton" onClick={() => navigateTo('one')}>
                <PostThumbnail title="Setup Meeting" img={meeting01} alt="Meeting Img">
                  Meeting with Netizen
                </PostThumbnail>
              </button>


            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;



