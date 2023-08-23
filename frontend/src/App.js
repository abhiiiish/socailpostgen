import './App.css';
import Input from './component/Input/Input';
import Navbar from './component/Navbar/Navbar';
import Section from './component/Section/Section';
import Body from './component/body/Body';
import Footer from './component/footer/Footer';
import Post from './component/post/Post';

function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      <Input/>
      <Section/>
      <Post/>
      <Footer/>
    </>
  );
}

export default App;
