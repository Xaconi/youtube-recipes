import logo from './assets/images/logo.svg';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="header">Youtube 📺 Recipe Searcher 🥑</p>
        <img src={logo} className="app-logo" alt="logo" />
        <VideoPlayer videoId={'m-bTLXjSh_Q'}></VideoPlayer>
      </header>
    </div>
  );
}

export default App;
