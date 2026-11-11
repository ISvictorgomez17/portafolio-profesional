import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
    ['Sobre mí', '#sobre-mi'],
    ['Servicios', '#servicios'],
    ['Tecnologías', '#tecnologias'],
    ['Proyectos', '#proyectos'],
    ['Contacto', '#contacto'],
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <header className="site-header">
            <nav className="nav container" aria-label="Navegación principal">
                <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
                    <span className="brand-mark">VG</span>
                    <span>Victor Gómez<span className="brand-dot">.</span></span>
                </a>
                <button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
                <div className={`nav-links ${open ? 'is-open' : ''}`}>
                    {links.map(([label, href]) => (
                        <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
                    ))}
                    <a className="nav-cta" href="#contacto" onClick={() => setOpen(false)}>Hablemos <ArrowUpRight size={15} /></a>
                </div>
            </nav>
        </header>
    )
}