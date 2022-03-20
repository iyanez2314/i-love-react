import './App.css';
import Header from './components/Header';
import Nav from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
return(
  <div>
    <Header></Header>
    <Nav></Nav>
    <main>
      <Project></Project>
    </main>
    <Footer></Footer>
  </div>
  
)
}

export default App;
