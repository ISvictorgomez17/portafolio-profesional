import { ArrowUpRight, Layers3 } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
    return (
        <section className="section" id="proyectos">
            <div className="container">
                <div className="section-heading section-heading-row reveal"><div><p className="eyebrow">04 / PROYECTOS</p><h2>Experiencia que se<br /><span>transforma en resultados.</span></h2></div><p className="heading-aside">Una muestra de líneas de trabajo y soluciones. Los casos se actualizarán con proyectos autorizados para publicación.</p></div>
                <div className="projects-grid">{projects.map((project, i) => <article className="project-card reveal" key={project.title}><div className={`project-art art-${i + 1}`}><div className="art-window"><div className="art-window-bar"><i /><i /><i /></div><div className="art-window-content"><span /><span /><span /><b /></div></div><div className="project-art-number">0{i + 1}</div></div><div className="project-content"><div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
                <p className="projects-note"><Layers3 size={16} /> Los nombres y descripciones son referencias iniciales; reemplázalos por casos verificables antes de publicar.</p>
            </div>
        </section>
    )
}