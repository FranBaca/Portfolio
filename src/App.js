import logo from './logo.svg';
import './App.css';
import Theme from "./styles/theme"
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/TimeLine/TimeLine';
import { Layout } from './layout/Layout';

function App() {
  return (
    <Theme>
      <Layout>  
        <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      </Layout>
    </Theme>
  );
}

export default App;
