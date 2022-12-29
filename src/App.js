import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hive from './Hive';

window.initialTimer = 2;
window.maxRetries = 5;
function App() {
  return (
    <div className="App">
      <Hive />
    </div>
  );
}

export default App;
