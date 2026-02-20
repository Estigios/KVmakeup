import Link from "next/link";

const bullets = [
  "CRM para clientes, seguimiento y ventas.",
  "Tienda virtual en el mismo proyecto.",
  "Base lista para conectar auth, DB y pagos."
];

export default function HomePage() {
  return (
    <section>
      <span className="badge">KVmakeup Platform</span>
      <h2>CRM + Tienda virtual en Next.js</h2>
      <p>
        Construimos una sola plataforma para operar el negocio interno y vender online
        sin duplicar código.
      </p>

      <ul className="bulletList">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="grid">
        <article className="card">
          <h3>Módulo CRM</h3>
          <p>Gestiona clientes, ventas, estados y tareas comerciales desde un panel único.</p>
          <Link href="/crm" className="btn">
            Abrir CRM
          </Link>
        </article>

        <article className="card">
          <h3>Tienda virtual</h3>
          <p>Publica tu catálogo y prepara el flujo de carrito + checkout para la web.</p>
          <Link href="/tienda" className="btn">
            Abrir tienda
          </Link>
        </article>
      </div>
    </section>
  );
}
