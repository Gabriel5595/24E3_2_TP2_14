import styles from "./home.module.css";
import MainProfile from "../../components/MainProfile"
import AboutMe from "../../components/AboutMe"
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contacts from "../../components/Contacts";

export default function Home() {
    return (
        <div>
            <MainProfile />
            <AboutMe />
            <Skills />
            <Projects />
            <Contacts />
        </div>
    )
}