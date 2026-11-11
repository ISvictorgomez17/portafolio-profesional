import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../data/site'

export default function Hero() {
    return (
        <section className="hero section" id="inicio">
            <div className="container hero-grid">
                <div className="hero-copy reveal">
                    <div className="eyebrow"><span className="status-dot" /> DISPONIBLE PARA NUEVOS PROYECTOS</div>
                    <p className="hero-kicker">PORTAFOLIO PROFESIONAL</p>
                    <h1>Hola, soy <span>Victor Gómez.</span><br />Construyo soluciones con tecnología.</h1>
                    <p className="hero-role">{profile.role}</p>
                    <p className="hero-description">{profile.description}</p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#servicios">Conoce mis servicios <ArrowUpRight size={17} /></a>
                        <a className="button button-ghost" href="#proyectos">Ver proyectos</a>
                    </div>
                    <div className="hero-location"><MapPin size={15} /> {profile.location}</div>
                </div>
                <div className="hero-visual reveal">
                    <div className="photo-frame">
                        <div className="photo-glow" />
                        <img src={profile.photo} alt="Fotografía profesional de Victor Gómez" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'grid' }} />
                        <div className="photo-fallback"><span>VG</span><small>Agrega tu fotografía profesional</small></div>
                        <div className="photo-caption"><span className="caption-line" /> Tecnología · Desarrollo · Gestión</div>
                    </div>
                    <div className="floating-card"><span className="floating-icon">✳</span><span><strong>Soluciones digitales</strong><small>Enfoque práctico y estratégico</small></span></div>
                    <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
                </div>
            </div>
            <a className="scroll-cue" href="#sobre-mi"><ArrowDown size={15} /> DESLIZA PARA CONOCER MÁS</a>
        </section>
    )
}