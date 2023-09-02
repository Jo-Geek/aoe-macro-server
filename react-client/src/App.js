import { useState } from 'react';
import ButtonsPanel from './pages/ButtonsPanel';
import './simple-grid.min.css';


function App() {
  const [fs, setFs] = useState(false);
  const fullscreen = () => {
    var elem = document.documentElement;
    /* View in fullscreen */
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    setFs(true);
  }

  return (
    <div className="App">
      <ButtonsPanel />
      {!fs &&
        <button onClick={fullscreen}>
          Full screen
        </button>
      }

    </div>
  );
}

export default App;
