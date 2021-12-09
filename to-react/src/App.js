import './App.css';
import AutoInput from './components/auto-input/AutoInput';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <AutoInput/> */}
      <SearchBar items={["cat", "dog", "music", "shopping", "hair brush", "hello world", "pop"]} />
     </div>
  );
}

export default App;
