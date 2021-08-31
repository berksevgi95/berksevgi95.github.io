import Introduction from "../views/Introduction/Introduction";
import Whoami from "../views/Whoami/Whoami";
import PersonalInformation from "../views/PersonalInformation/PersonalInformation";
import Experiences from "../views/Experiences/Experiences";
import TechnicalSkills from "../views/TechnicalSkills/TechnicalSkills";
import Projects from "../views/Projects/Projects";
import Activities from "../views/Activities/Activities";

export default [/* {
    index: 0,
    path: 'introduction',
    title: "Introduction",
    component: Introduction
}, */ {
    index: 1,
    path: 'whoami',
    title: "Who am I?",
    component: Whoami
}, {
    index: 2,
    path: 'personal-information',
    title: "Personal Information",
    component: PersonalInformation
}, {
    index: 3,
    path: 'experiences',
    title: "Experiences",
    component: Experiences
}, {
    index: 4,
    path: 'technical-skills',
    title: "Technical Skills",
    component: TechnicalSkills
},/*  {
    index: 5,
    path: 'projects',
    title: "Projects",
    component: Projects
} */, {
    index: 6,
    path: 'activities',
    title: "Activities",
    component: Activities
}]