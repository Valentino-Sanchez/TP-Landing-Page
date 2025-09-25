"use client";
import { useEffect, useRef } from "react";

export default function Slogan() {
const sloganRef = useRef<HTMLParagraphElement>(null);

useEffect(() => {
    if (!sloganRef.current) return;

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // 👈 asegura que no desaparezca
        }
        });
    },
    {
        threshold: 0.3, // qué porcentaje debe ser visible
        rootMargin: "0px 0px -35% 0px", 
        /* con este margin "reduce" el viewport:
        el slogan aparecerá solo cuando esté
        un poco más abajo del centro */
    }
    );

    observer.observe(sloganRef.current);

    return () => {
    if (sloganRef.current) observer.unobserve(sloganRef.current);
    };
}, []);

return (
    <section className="slogan-section">
    <p ref={sloganRef}>
        “Donde tus habilidades encuentran su lugar”
    </p>
    </section>
);
}
