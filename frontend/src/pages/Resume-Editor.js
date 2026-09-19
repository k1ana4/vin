import '../App.css';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Nav from '../components/Nav-bar';

const Editor = () => {
  return (
    <div className="resume-container">
      <Header title = '"Comparison is the thief of joy"'></Header>
      <Welcome message = "Coming soon..." ></Welcome>
      <Nav></Nav>
    </div>
  );
}

export default Editor;