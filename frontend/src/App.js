import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div className="App-container">
      <Header title = '"Comparison is the thief of joy"'></Header>
      <Welcome message = 'Welcome, user'></Welcome>
    </div>
  );
}

export default App;
