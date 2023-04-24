import { useEffect, useState } from "react";
import Head from "next/head";

export default function home() {
    const [skills, setSkills] = useState(null);
    useEffect(() => {
        const getSkills = async () => {
            let res = await fetch('/myData/skills.json');
            let data = await res.json();
            setSkills(data);
        }
        getSkills();
    }, []);

    return (
        <>
            <Head>
                <title>My Skills</title>
            </Head>

            <ul className="skills-detail">
                {skills && skills.map((skill) => (
                    <li key={skill.id}>
                        <h2>{skill.Name}</h2>
                        <img src={skill.Image} alt={skill.Name}></img>
                    </li>
                ))}
            </ul>
        </>
    );
}