import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ButtonSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!  <br/>
        Welcome to my personal portfolio
      </SectionTitle>
      <SectionText>
          I'm Francisco Baca Alurralde, Full Stack Developer from Argentina.<br/>
          I want to make beatiful things, even if nobody cares, as oposse to ugly things, thats my intent
      </SectionText>
      <ButtonSection>

      <Button onClick={()=> window.location = "#about"}  target="_blank">Learn More</Button>
      </ButtonSection>
    </LeftSection>
  </Section>
);

export default Hero;