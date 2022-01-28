import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PersonalInformation from './components/personalInformation/PersonalInformation';
import WorkExperience from './components/workexperience/WorkExperience';
import WorkExperienceForm from './components/Forms/WorkExpirience';
import SkillForm from './components/Forms/Skill';
import PortfolioForm from './components/Forms/Portfolio';
import PersonalInformationForm from './components/Forms/PersonalInformation';
import ContactForm from './components/Forms/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Administrator from './components/Administrator/Administrator';
import Skills from './components/skills/Skills';
import { UserProvider } from './context/UserContext';
import Messages from './components/messages/Messages';

function App() {

    return (
        <>
            <Router className="App">
                <UserProvider>
                    <Header/>
                    <Routes>
                        <Route path="/formPersonaInformation" element={<PersonalInformationForm/>} exact></Route>
                        <Route path="/formPorfolio" element={<PortfolioForm/>} exact></Route>
                        <Route path="/formSkill" element={<SkillForm/>} exact></Route>
                        <Route path="/formContact" element={<ContactForm/>} exact></Route>
                        <Route path="/formWorkExpirience" element={<WorkExperienceForm/>} exact></Route>
                        <Route path="/workexperience" element={<WorkExperience/>} exact></Route>
                        <Route path="/portfolio" element={<Portfolio/>} exact></Route>
                        <Route path="/Skills" element={<Skills />} exact></Route>
                        <Route path="/contact" element={<Contact />} exact></Route>
                        <Route path="/messages" element={<Messages />} exact></Route>
                        <Route path="/administrator" element={<Administrator />} exact></Route>
                        <Route path="/" element={<PersonalInformation/>} exact></Route>
                    </Routes>
                </UserProvider>
            </Router>
        </>
    );
}

export default App;
