import logo from './assets/images/logo.svg';
import Autocomplete from './components/Autocomplete/Autocomplete';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { useShorts } from './hooks/useShorts';

function App() {

  const {shorts, getShorts } = useShorts();
  const videoId = getShorts('TEST')

  return (
    <div className="app">
      <header className="app-header">
        <p className="header">Youtube 📺 Recipe Searcher 🥑</p>
        <img src={logo} className="app-logo" alt="logo" />
        <Autocomplete></Autocomplete>
        <VideoPlayer videoId={videoId}></VideoPlayer>
      </header>
    </div>
  );
}

export default App;
