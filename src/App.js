import logo from './logo.svg';
import './App.css';
import steak1 from './images/steak1.jfif';
import steak2 from './images/steak2.jfif';

function App() {
  return (
    <div className="App">
      <h1>Imported images</h1>
      <div className="import-images">
        <img src={steak1} alt="Steak" className="imp-steak" />
        <img src={steak2} alt="Steak" className="imp-steak"/>
      </div>
      <h1>Absolute path images</h1>
      <div className="abs-images">
        <img src="./images/steak1.jfif" alt="steak" className="abs-steak"/>
        <img src="./images/steak2.jfif" alt="steak" className="abs-steak"/>
      </div>
    </div>
  );
}

export default App;
