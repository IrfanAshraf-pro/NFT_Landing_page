import { Container } from 'react-bootstrap';
import './App.css';
import { Companies, Footer, Hero, MarketPlace, NavbarCustom, Subscribe, TopCreators } from './components';
import Creators from './components/Creators';

function App() {
  return (
    <div className='bg-custom'>
      <NavbarCustom/>
      <Container fluid="lg" className='pb-5'>
        <Hero/>
        <Companies/>
        <MarketPlace/>
        <Creators/>
        <TopCreators/>
        <Subscribe/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
