import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Code from './components/code/Code';
import Testimonials from './components/testimonial/Testimonials';
import Certificate from './components/Certificate/Certificate';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Code />
      <Portfolio />
      <Testimonials />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
