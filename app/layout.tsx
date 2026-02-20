import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVmakeup | CRM + Tienda",
  description:
    "Base en Next.js para gestionar clientes, ventas y una tienda virtual para KVmakeup."
};

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/crm", label: "CRM" },
  { href: "/tienda", label: "Tienda" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <div className="container topbarContent">
            <h1>KVmakeup</h1>
            <nav>
              <ul className="navList">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
