import { ArrowUpRight, Mail, MessageCircle, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '../data/site';
import {useState} from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    const submit = (e) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Contacto desde el portafolio - ${form.name}`)
        const body = encodeURIComponent(`Nombre: ${form.name}\nCorreo: ${form.email}\n\n${form.message}`)
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    }
    return (
        <section className="section contact-section" id="contacto">
            <div className="container contact-layout">
                <div className="contact-copy reveal"><p className="eyebrow">05 / CONTACTO</p><h2>¿Tienes un reto<br />tecnológico? <span>Hablemos.</span></h2><p>Cuéntame qué necesitas. Podemos explorar juntos una solución para tu proyecto, equipo u organización.</p>
                    <a className="contact-detail" href={`mailto:${profile.email}`}><Mail size={18} /><span><small>Correo electrónico</small>{profile.email}</span><ArrowUpRight size={16} /></a>
                    <a className="contact-detail" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>{profile.phone}</span><ArrowUpRight size={16} /></a>
                    <div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="FaLinkedIn"><FaLinkedin size={18} /></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="FaGitHub"><FaGithub size={18} /></a><span><MapPin size={14} /> {profile.location}</span></div>
                </div>
                <form className="contact-form reveal" onSubmit={submit}>
                    <h3>Cuéntame sobre tu proyecto</h3><p>Completa los campos y prepara un mensaje de correo.</p>
                    <label>Nombre<input name="name" value={form.name} onChange={update} placeholder="¿Cómo te llamas?" required /></label>
                    <label>Correo electrónico<input name="email" type="email" value={form.email} onChange={update} placeholder="nombre@correo.com" required /></label>
                    <label>Mensaje<textarea name="message" value={form.message} onChange={update} placeholder="Cuéntame brevemente qué necesitas..." rows="4" required /></label>
                    <button className="button button-primary" type="submit">Preparar mensaje <ArrowUpRight size={17} /></button>
                    <small className="form-note">Este formulario abre tu aplicación de correo; no almacena los datos.</small>
                </form>
            </div>
        </section>
    )
}