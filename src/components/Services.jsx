import { ArrowUpRight, Code2, Compass, Headset, Presentation, ChartNoAxesCombined } from 'lucide-react'
import { services } from '../data/site'

const icons = [Code2, Compass, Headset, Presentation, ChartNoAxesCombined]

export default function Services() {
    return (
        <section className="section" id="servicios">
            <div className="container">
                <div className="section-heading section-heading-row reveal"><div><p className="eyebrow">02 / SERVICIOS</p><h2>En qué puedo <span>ayudarte.</span></h2></div><p className="heading-aside">Servicios tecnológicos pensados para resolver necesidades reales y acompañar el crecimiento de tu organización.</p></div>
                <div className="services-grid">
                    {services.map((service, i) => { const Icon = icons[i]; return <article className="service-card reveal" key={service.number}><div className="service-top"><span>{service.number}</span><Icon size={23} /></div><h3>{service.title}</h3><p>{service.description}</p><div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contacto" aria-label={`Consultar por ${service.title}`} className="card-arrow"><ArrowUpRight size={19} /></a></article> })}
                </div>
            </div>
        </section>
    )
}