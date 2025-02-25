import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'Sobre mim'} span={'Sobre mim'} />
            <ImageSection />
            <Tittle title={'Conhecimento'} span={'Conhecimento'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Html'} progress={'94%'} width={'94%'} />
                <SkillsSection skill={'Css'} progress={'88%'} width={'88%'} />
                <SkillsSection skill={'JavaScript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'TypeScript'} progress={'73%'} width={'73%'} />
                <SkillsSection skill={'Git'} progress={'81%'} width={'81%'} />
                <SkillsSection skill={'React Js'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Node Js'} progress={'62%'} width={'62%'} />
                <SkillsSection skill={'Python'} progress={'55%'} width={'55%'} />
                <SkillsSection skill={'Php'} progress={'78%'} width={'78%'} />
                <SkillsSection skill={'Laravel'} progress={'78%'} width={'78%'} />
                <SkillsSection skill={'MySQL'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Mongo DB'} progress={'67%'} width={'67%'} />
            </div>

            <Tittle title={'Serviços'} span={'Serviços'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Front-end'} 
                text={'Desenvolvimento de websites, Interface e consumo de APIs.'}
                />
                <ServicesSection image={intelligence} title={'Back-end'} 
                text={'Modelo MVC, Auth e CRUD.'}
                />

                
            </div>  

        </div>
    )
}

export default AboutPage;
