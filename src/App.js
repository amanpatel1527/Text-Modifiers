//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import CustomButton from './Components/CustomButton';
import TextArea from './Components/TextArea';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <TextArea heading="Text Modifiers"/>
    </div>
    </>
  );
}

export default App;
