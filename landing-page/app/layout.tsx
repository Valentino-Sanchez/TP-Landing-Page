import "./styles.css";

export const metadata = {
title: "CV Analytics",
description: "Optimiza tu CV con inteligencia artificial",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
    <html lang="es">
    <body className="bg-gradient-to-b from-sky-400 to-sky-100 font-sans">
        {children}
    </body>
    </html>
);
}
