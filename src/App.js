import './App.css';
import NavBar from './components/NavBar';
import ProjectGrid from './components/ProjectGrid';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ paddingTop: '50px' }}>
        <ProjectGrid />
      </div>
    </div>
  );
}

export default App;
