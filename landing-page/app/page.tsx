import Image from "next/image";

export default function Home() {
return (
    <main>
      {/* HEADER */}
    <header>
        <Image src="/assets/logo.png" alt="CV Analytics" width={150} height={40} />
        <nav>
        <a href="#">Lanzamiento</a>
        <a href="#">¿Qué ofrecemos?</a>
        <a href="#">¿Cómo funciona?</a>
        </nav>
    </header>

    {/* HERO */}
    <section>
        <div className="hero">
        <div>
            <h1>Optimiza tu CV con nuestra tecnología de análisis inteligente</h1>
            <p>
            Conoce cómo tu CV se alinea con los requisitos de las mejores
            empresas y mejora tu empleabilidad
            </p>
        </div>
        <Image src="/assets/hero.png" alt="Hero" width={500} height={300} />
        </div>
        <button>Analiza tu CV ahora</button>
    </section>

      {/* SLOGAN */}
    <section>
        <h2>
        “Haz que tu experiencia hable el idioma de las empresas”
        </h2>
    </section>

      {/* TIMER */}
    <section>
        <h2>Apertura de la app</h2>
        <div>
        <span>14 DÍAS</span> : <span>26 HORAS</span> : <span>06 MINUTOS</span> : <span>11 SEGUNDOS</span>
        </div>
    </section>

      {/* POR QUÉ ELEGIR */}
    <section>
        <h2>¿Por qué elegir <b>CV Analytics</b>?</h2>
        <div className="hero">
        <p>
            A diferencia de otras herramientas, nuestro sistema no solo compara
            tu CV, sino que lo optimiza para los trabajos más adecuados
        </p>
        <Image src="/assets/benefit.png" alt="Benefit" width={400} height={300} />
        </div>
    </section>

      {/* CLIENTES FELICES */}
        <section className="section happy">
        <h2>Clientes felices</h2>

        <div className="happy__card">
            <p className="happy__title">Más de <b>5000 usuarios felices</b></p>

            {/* Reemplaza stars.png por tus estrellas */}
            <div className="happy__rating">
            <Image
                src="/assets/stars.png"
                alt="Calificación 5 estrellas"
                width={160}
                height={28}
            />
            <span className="happy__ratingText">4.8/5 basado en +1000 reseñas</span>
            </div>

            <div className="happy__reviews">
            <div className="review">
                <Image
                src="/assets/user1.png"
                alt="Usuario"
                width={56}
                height={56}
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
                width={56}
                height={56}
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
                width={56}
                height={56}
                className="review__avatar"
                />
                <p className="review__text">
                Mejoré mi CV en minutos
                </p>
            </div>
            </div>
        </div>
        </section>

      {/* CONTACTO */}
    <section>
        <h2>Contáctanos</h2>
        <form>
        <label>Nombre:</label>
        <input type="text" placeholder="Escribe tu nombre" />

        <label>Correo electrónico:</label>
        <input type="email" placeholder="Escribe tu correo" />

        <label>Mensaje:</label>
        <textarea placeholder="Mensaje..."></textarea>

        <button type="submit">Enviar</button>
        </form>
    </section>
    </main>
);
}
