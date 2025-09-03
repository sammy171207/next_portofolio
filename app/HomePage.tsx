'use client';
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";
import Experiences from "@/components/experiences/Experiences";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
    data: data,
}

const HomePage = ({ data }: Props) => {
    return (
        <>
            <Header logo={data.main.name} />
            <main>
                <section id="home">
                    {/* Hero Section */}
                    <Hero mainData={data.main} />
                </section>

                <section id="socials">
                    {/* Socials Section */}
                    <Socials socials={data.socials} />
                </section>

                <section id="about">
                    {/* About Section */}
                    <About aboutData={data.about} name={data.main.name} />
                </section>

                <section id="skills">
                    {/* Skills Section */}
                    <Skills skillData={data.skills} />
                </section>

                <section id="projects">
                    {/* Projects Section */}
                    <Projects projectsData={data.projects} />
                </section>

                <section id="experiences">
                    {/* Experiences Section */}
                    <Experiences experienceData={data.experiences} educationData={data.educations} />
                </section>

                <section id="contact">
                    {/* Contact Section */}
                    <Contact />
                </section>

                <section id="cta">
                    {/* Call to Action Section */}
                    <CallToAction />
                </section>
            </main>
            <Footer socials={data.socials} name={data.main.name} />
        </>
    )
}

export default HomePage