import Image from "next/image";
import Timer from "./components/Timer";
import Slogan from "./components/Slogan";
import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import Clientes from "./components/Clientes";

export default function Home() {
return (
    <main>
      {/* HEADER */}
    <header>
        <Image
        src="/assets/logo.png"
        alt="CV Analytics"
        width={150}
        height={60}
        />
        <nav>
        <a href="#timer">Lanzamiento</a>
        <a href="#hero">¿Qué ofrecemos?</a>
        <a href="#benefits">¿Cómo funciona?</a>
        </nav>
    </header>

{/* HERO */}
<section id="hero" className="hero-section">
    <Hero />
</section>



 {/* SLOGAN */}
<section id="slogan">
    <Slogan />
    </section>

    {/* TIMER (countdown) */}
    <section id="timer">
        <Timer />
    </section>

{/* BENEFICIOS / ¿POR QUÉ ELEGIR? */} 
<section id="benefits">
    <Benefits />
</section>

    {/* CLIENTES FELICES */}
    <section className="section happy">
    <Clientes />
    </section>

    {/* CONTACTO */}
<section className="contact-section">
<h2>Contactanos</h2>
<div className="contact-form">
    <div className="form-fields">
    <div className="form-group">
        <label>Nombre:</label>
        <input type="text" />
    </div>
    <div className="form-group">
        <label>Correo electrónico:</label>
        <input type="email" />
    </div>
    <div className="form-group">
        <label>Mensaje:</label>
        <textarea></textarea>
    </div>
    </div>
    <div className="form-button">
    <button type="button">Enviar</button>
    </div>
</div>
</section>
</main>
);
}
