import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Create from './components/Create';
import Nav from './components/Nav-bar';

const App = () => {
  return (
    <div className="App-container">
      <Header title = '"Comparison is the thief of joy"'></Header>
      <Welcome message = "Welcome" user = "user" ></Welcome>
      <Create></Create>
      <Nav></Nav>
    </div>
  );
}

export default App;
