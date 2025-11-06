import './App.css';
import PostThumbnail from './components/PostThumbnail';
import meeting01 from './images/meeting01.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        
          <title>
            Etown Homelab Blog
          </title>
        

        <div id='title-container'>
          <h1>
            Etown Homelab Blog
          </h1>
          <p>
            Welcome to the Etown Homelab Blog!
          </p>
        </div>


        <div>
          <h2>
            Posts
          </h2>
          <div id="posts-container">
            <PostThumbnail title="Setup Meeting" img={meeting01} alt="Meeting Img">
              The start of the etown homelab
            </PostThumbnail>
          </div>



        </div>

      </header>
    </div>
  );
}

export default App;



