"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Clientes() {
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting) {
        setIsVisible(true);
          observer.disconnect(); // 👈 para que solo ocurra una vez
        }
    },
    {
        threshold: 0.3,
        rootMargin: "0px 0px -35% 0px", // igual que slogan
    }
    );

    if (sectionRef.current) {
    observer.observe(sectionRef.current);
    }

    return () => {
    if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
}, []);

const reviews = [
    {
    img: "/assets/user1.png",
    text: "Conseguí entrevista más rápido gracias a la optimización",
    },
    {
    img: "/assets/user2.png",
    text: "Me ayudó a resaltar mis puntos fuertes",
    },
    { img: "/assets/user3.png", text: "Mejoré mi CV en minutos" },
];

return (
    <section className="section happy" ref={sectionRef}>
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
        {reviews.map((r, i) => (
            <motion.div
            key={i}
            className="review"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.4 }}
            >
            <Image
                src={r.img}
                alt="Usuario"
                width={70}
                height={100}
                className="review__avatar"
            />
            <p className="review__text">{r.text}</p>
            </motion.div>
        ))}
        </div>
    </div>
    </section>
);
}
