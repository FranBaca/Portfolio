import React from 'react';
import './App.css';
import Theme from "./styles/theme"
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/TimeLine/TimeLine';
import { Layout } from './layout/Layout';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Route, Routes } from 'react-router-dom';

function App() {
  AOS.init();
  return (
    <Theme>
      <Layout>  
        <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/techs" element={<Technologies/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/timeline" element={<Timeline/>}/>
        </Routes>
      </Layout>
    </Theme>
  );
}

export default App;
