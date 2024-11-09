
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="text-2xl ">
    <div className="min-h-screen bg-gray-200 text-gray-800 font-sans overflow-x-hidden">
      <Header />
      <main className="container mx-auto mt-8 p-4">
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
