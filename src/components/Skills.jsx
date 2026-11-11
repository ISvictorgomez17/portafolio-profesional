import { skills } from '../data/site'

export default function Skills() {
    return (
        <section className="section section-soft" id="tecnologias">
            <div className="container skills-layout">
                <div className="section-heading reveal"><p className="eyebrow">03 / TECNOLOGÍAS</p><h2>Herramientas para<br /><span>convertir ideas en soluciones.</span></h2><p className="heading-aside">Un conjunto de tecnologías y conocimientos que aplico según el contexto, los objetivos y las necesidades de cada proyecto.</p></div>
                <div className="skills-grid reveal">{skills.map((skill, i) => <div className="skill-item" key={skill.name}><span className="skill-index">{String(i + 1).padStart(2, '0')}</span><div><h3>{skill.name}</h3><p>{skill.level}</p></div><span className="skill-plus">↗</span></div>)}</div>
            </div>
        </section>
    )
}