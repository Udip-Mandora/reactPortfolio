import { useEffect, useState } from "react";
import Head from "next/head";

export default function home() {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        const getProjects = async () => {
            let res = await fetch('/myData/project.json');
            let data = await res.json();
            setProjects(data);
        }
        getProjects();
    }, []);

    return (
        <>
            <Head>
                <title>My Projects</title>
            </Head>

            <ul className="projects-detail">
                {projects && projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.Name}</h2>
                        <p>{project.Content}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}