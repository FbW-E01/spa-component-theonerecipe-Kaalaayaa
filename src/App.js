import './App.css';
import './index.css';
import Title from './Title.js';
import List from './List.js';
import Steps from './Steps.js';
import Footer from './Footer.js';
import Photo from './Photo';


function App() {
  return <div className="App">
    <div className= "Container" className="font-face-gm">
    <Title />
    <Photo />
    <List />
    <Steps />
    <Footer />
    </div>
    </div>;
}

export default App;
