"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Benefits() {
const ref = useRef(null);

  // Detecta el progreso del scroll de esta sección
const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"], 
    // tunear cuando arranca y cuando termina
});

  // Animaciones título (empiezan más abajo)
const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
const titleY = useTransform(scrollYProgress, [0.1, 0.4], [50, 0]);
const titleBlur = useTransform(scrollYProgress, [0.1, 0.4], [10, 0]);
const titleBlurFilter = useTransform(titleBlur, (b) => `blur(${b}px)`);

  // Animaciones texto
const textX = useTransform(scrollYProgress, [0.3, 0.6], [-100, 0]);
const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  // Animaciones imagen
const imgX = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
const imgOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

return (
    <section id="benefits" ref={ref} className="section benefits">
      {/* Título con blur progresivo */}
    <motion.h2
        style={{
        opacity: titleOpacity,
        filter: titleBlurFilter,
        y: titleY,
        }}
        className="benefits-title"
    >
        ¿Por qué elegir <span className="brand">CV Analytics</span>?
    </motion.h2>

    <div className="benefits__grid">
        {/* Texto desde la izquierda */}
        <motion.p
        style={{ x: textX, opacity: textOpacity }}
        className="benefits__text"
        >
        A diferencia de otras herramientas, nuestro sistema no solo compara tu CV,
        sino que lo optimiza para los trabajos más adecuados
        </motion.p>

        {/* Imagen desde la derecha */}
        <motion.div
        style={{ x: imgX, opacity: imgOpacity }}
        className="benefits__image"
        >
        <Image
            src="/assets/benefit.png"
            alt="Optimización de CV"
            width={420}
            height={420}
        />
        </motion.div>
    </div>
    </section>
);
}
