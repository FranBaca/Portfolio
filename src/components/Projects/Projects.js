import React, { useState, useEffect } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { experience } from '../../constants/data';
import { useTranslation } from 'react-i18next';
import ProjectsSkeleton from './ProjectsSkeleton';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
`;

export default function Projects() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section nopadding id="projects">
      {isLoading ? (
        <ProjectsSkeleton />
      ) : (
        <>
          <TitleWrapper className="animate-fade-in">
            <SectionTitle main>{t("projects")}</SectionTitle>
          </TitleWrapper>
          <GridContainer>
            {experience.map((exp, index) => (
              <div key={exp.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <BlogCard>
                  <Img src={exp.img} />
                  <TitleContent>
                    <HeaderThree title>{exp.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo>{exp.description}</CardInfo>
                  <div>
                    <TagList>
                      <Tag>{exp.time}</Tag>
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={exp.link}>{t("Source")}</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              </div>
            ))}
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${(index + experience.length) * 0.2}s` }}>
                <BlogCard>
                  <Img src={project.image} />
                  <TitleContent>
                    <HeaderThree title>{project.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo>{project.description}</CardInfo>
                  <div>
                    <TitleContent>Stack</TitleContent>
                    <TagList>
                      {project.tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                      ))}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks target="_blank" href={project.visit}>{t("Code")}</ExternalLinks>
                    <ExternalLinks target="_blank" href={project.source}>{t("Source")}</ExternalLinks>
                  </UtilityList>
                </BlogCard>
              </div>
            ))}
          </GridContainer>
        </>
      )}
    </Section>
  );
}
  