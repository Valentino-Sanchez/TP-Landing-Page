"use client";
import { useEffect, useState } from "react";

export default function Timer() {
  // Fecha de apertura de la app
const targetDate = new Date("2025-12-09T12:00:00").getTime();

const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
});

useEffect(() => {
    const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        });
    } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        });
    }
    }, 1000);

    return () => clearInterval(interval);
}, [targetDate]);

return (
    <section className="section timer">
    <h2 className="timer__title">Apertura de la app</h2>
    <div className="timer__row">
        <div className="time">
        <div className="time__num">{timeLeft.days}</div>
        <div className="time__label">Días</div>
        </div>
        <span className="time__sep">:</span>
        <div className="time">
        <div className="time__num">{timeLeft.hours}</div>
        <div className="time__label">Horas</div>
        </div>
        <span className="time__sep">:</span>
        <div className="time">
        <div className="time__num">{timeLeft.minutes}</div>
        <div className="time__label">Minutos</div>
        </div>
        <span className="time__sep">:</span>
        <div className="time">
        <div className="time__num">{timeLeft.seconds}</div>
        <div className="time__label">Segundos</div>
        </div>
    </div>
    </section>
);
}
