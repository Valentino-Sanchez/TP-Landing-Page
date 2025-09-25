import Image from "next/image";
import Timer from "./components/Timer";
import Slogan from "./components/Slogan";
import Benefits from "./components/Benefits";

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
<div className="hero">
    <div className="hero-text">
    <h1>Optimiza tu CV con nuestra tecnología de análisis inteligente</h1>
    <p>
        Conoce cómo tu CV se alinea con los requisitos de las mejores
        empresas y mejora tu empleabilidad
    </p>
    <a
        href="https://cv-analytics-webpage.onrender.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-btn"
>
        Analiza tu CV ahora
</a>
    </div>

    <Image src="/assets/hero.png" alt="Hero" width={500} height={300} />
</div>
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
        <h2>Clientes felices</h2>

        <div className="happy__card">
        <p className="happy__title">
            Más de <b>5000 usuarios felices</b>
        </p>

        <div className="happy__rating">
            <Image
            src="/assets/stars.png"
            alt="Calificación 5 estrellas"
            width={160}
            height={28}
            />
            <span className="happy__ratingText">
            4.8/5 basado en +1000 reseñas
            </span>
        </div>

        <div className="happy__reviews">
            <div className="review">
            <Image
                src="/assets/user1.png"
                alt="Usuario"
                width={70}
                height={100}
                className="review__avatar"
            />
            <p className="review__text">
                Conseguí entrevista más rápido gracias a la optimización
            </p>
            </div>

            <div className="review">
            <Image
                src="/assets/user2.png"
                alt="Usuario"
                width={70}
                height={100}
                className="review__avatar"
            />
            <p className="review__text">
                Me ayudó a resaltar mis puntos fuertes
            </p>
            </div>

            <div className="review">
            <Image
                src="/assets/user3.png"
                alt="Usuario"
                width={70}
                height={100}
                className="review__avatar"
            />
            <p className="review__text">Mejoré mi CV en minutos</p>
            </div>
        </div>
        </div>
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
