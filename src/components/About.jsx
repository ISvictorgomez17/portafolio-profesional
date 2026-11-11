import { BriefcaseBusiness, GraduationCap, Lightbulb } from 'lucide-react'
import { profile } from '../data/site'

const highlights = [
    { icon: BriefcaseBusiness, title: 'Experiencia aplicada', text: 'Desarrollo, soporte y acompañamiento tecnológico en entornos organizacionales.' },
    { icon: GraduationCap, title: 'Vocación formativa', text: 'Experiencia docente en informática, programación y competencias tecnológicas.' },
    { icon: Lightbulb, title: 'Visión integral', text: 'Conecto las necesidades de las personas y los procesos con soluciones de tecnología.' },
]

export default function About() {
    return (
        <section className="section section-soft" id="sobre-mi">
            <div className="container">
                <div className="section-heading reveal"><p className="eyebrow">01 / SOBRE MÍ</p><h2>Tecnología con propósito,<br /><span>personas en el centro.</span></h2></div>
                <div className="about-layout">
                    <div className="about-intro reveal">
                        <p className="lead">{profile.headline}</p>
                        <p>Soy Ingeniero de Sistemas y Especialista en Gestión TI. Mi experiencia combina el desarrollo de soluciones de software, el soporte tecnológico y la formación académica.</p>
                        <p>Me interesa comprender cada reto, proponer alternativas sostenibles y construir herramientas que simplifiquen el trabajo, organicen la información y aporten valor.</p>
                        <a className="text-link" href="#contacto">Conversemos sobre tu proyecto <span>↗</span></a>
                    </div>
                    <div className="highlight-list reveal">
                        {highlights.map(({ icon: Icon, title, text }) => <article className="highlight-item" key={title}><div className="highlight-icon"><Icon size={21} /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}
                    </div>
                </div>
            </div>
        </section>
    )
}