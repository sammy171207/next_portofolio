type skill = {
    name: string,
    image: string,
    category: string
}

type project = {
    name: string,
    image: string,
    techstack: string[],
    category: string,
    links: {
        visit: string,
        code: string,
        video: string,
        article?: string
    };
    description: string;
}

type experience = {
    company: string,
    position: string,
    duration: string,
    desc: string[]
}

type education = {
    institute: string,
    degree: string,
    duration: string,
    desc?: string[],
}

type main = {
    name: string,
    titles: string[],
    resumeUrl: string,
    heroImage: string,
    shortDesc: string,
    techStackImages: string[],
}

type about = {
    aboutImage: string,
    aboutImageCaption: string,
    title: string,
    about: string,
    resumeUrl: string,
    callUrl: string
}

type social = {
    name?: string,
    icon: string,
    link: string
}

type data = {
    main: main,
    about: about,
    skills: skill[],
    projects: project[],
    experiences: experience[],
    educations: education[]
    socials: social[]
}

export type { data, main, about, skill, project, experience, education, social };