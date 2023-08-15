import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { experience } from '../../constants/data';
import { useTranslation } from 'react-i18next';

export default function Projects ()  {
  const { t } = useTranslation();

return(
<Section nopadding id="#projects">
  <SectionTitle main>{t("projects")}</SectionTitle>
      <GridContainer>
        {experience.map((exp) =>(
           <BlogCard key={exp.id}  data-aos="fade-left" data-aos-duration="3000">
           <Img src={exp.img}/>
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
        ))}
        {projects.map((project)=>(
          <BlogCard key={project.id} data-aos="fade-right" data-aos-duration="3000">
            <Img src={project.image}/>
            <TitleContent>
              <HeaderThree title>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
              {project.tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target="_blank" href={project.visit}>{t("Code")}</ExternalLinks>
              <ExternalLinks  target="_blank" href={project.source}>{t("Source")}</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
  </Section>
)
}
  