import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/site'

export default function Footer() {
    return <footer className="footer"><div className="container footer-inner"><a className="brand" href="#inicio"><span className="brand-mark">VG</span><span>Victor Gómez<span className="brand-dot">.</span></span></a><p>Desarrollo de software · Gestión TI · Formación</p><a href="#inicio">Volver arriba <ArrowUpRight size={14} /></a><small>© {new Date().getFullYear()} {profile.name}. Hecho con propósito.</small></div></footer>
}