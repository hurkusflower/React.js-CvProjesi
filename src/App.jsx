import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="container">
            <Header />
            <Education />
            <Experience />
            <Skills />
            <Hobbies />
            <SocialMedia />
            <Footer />
        </div>
    );
}

export default App;
