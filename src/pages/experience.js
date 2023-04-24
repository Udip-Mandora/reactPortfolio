import { useEffect, useState } from "react";
import Head from "next/head";
// import styles from '../styles/Home.module.css'

export default function home() {
    const [experience, setExperience] = useState(null);
    useEffect(() => {
        const getExperience = async () => {
            let res = await fetch('/myData/experience.json');
            let data = await res.json();
            // let edu = data.data;
            setExperience(data);
        }
        getExperience();
    }, []);

    return (
        <>
            <Head>
                <title>My Experience</title>
            </Head>

            <ul className="experience-detail">
                {experience && experience.map((exp) => (
                    <li key={exp.id}>
                        <h2>{exp.Company}</h2>
                        <p>{exp.Title}</p>
                        <p>{exp.Started}</p>
                        <p>{exp.End}</p>
                        <p>{exp.Location}</p>
                        <p>{exp.Description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}