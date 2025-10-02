"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
return (
    <section id="hero" className="hero-section">
    <div className="hero">
        <motion.div
        className="hero-text"
        initial="hidden"
        animate="visible"
        variants={{
            visible: { transition: { staggerChildren: 0.3 } },
        }}
        >
        <motion.h1
            variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
        >
            Optimiza tu CV con nuestra tecnología de análisis inteligente
        </motion.h1>

        <motion.p
            variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
        >
            Conoce cómo tu CV se alinea con los requisitos de las mejores
            empresas y mejora tu empleabilidad
        </motion.p>

          {/* ---- Botón: aparece y luego late en su lugar ---- */}
            <motion.a
            href="https://cv-analytics-webpage.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            variants={{
            hidden: { opacity: 0, y: 40 },
              // transición de entrada definida aquí
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            // luego, cuando esté en viewport, aplica el latido en loop
            whileInView={{
              scale: [1, 1.06, 1], // ajustá la intensidad aquí
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            },
            }}
            viewport={{ once: true }} // aparece/late solo después de verse la primera vez
        >
            Analiza tu CV ahora
        </motion.a>
        </motion.div>

        <Image src="/assets/hero.png" alt="Hero" width={500} height={300} />
    </div>
    </section>
);
}
