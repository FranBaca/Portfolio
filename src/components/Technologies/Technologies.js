import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaMobileAlt } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { useTranslation } from 'react-i18next';

export default function Technologies  () {
  const { t } = useTranslation();

  return (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>{t("technologies")}</SectionTitle>
    <SectionText>
      {t("subTechnologies")}
    </SectionText>
    <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              {t("Front")}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              {t("Back")}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              {t("UI/UX")}
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <FaMobileAlt size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Mobile</ListTitle>
            <ListParagraph>
              {t("Mobile")}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
  );
}
