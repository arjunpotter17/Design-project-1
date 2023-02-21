
import './App.css';
import { Brand, Cta, Navbar} from './components'
import {Header, Footer, GPT3, Possibility, Features, Blog} from './containers'
function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <GPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
