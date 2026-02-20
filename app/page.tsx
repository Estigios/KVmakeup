import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h2>CRM + Tienda virtual en Next.js</h2>
      <p>
        Esta base te permite comenzar con un sistema interno (CRM) para KVmakeup y
        publicar la tienda virtual en el mismo proyecto.
      </p>

      <div className="grid">
        <article className="card">
          <h3>Módulo CRM</h3>
          <p>
            Seguimiento de clientes, historial de compras, tareas de seguimiento y
            embudo de ventas.
          </p>
          <Link href="/crm" className="btn">
            Ver CRM
          </Link>
        </article>

        <article className="card">
          <h3>Tienda virtual</h3>
          <p>
            Catálogo de maquillaje, fichas de producto y preparación para checkout.
          </p>
          <Link href="/tienda" className="btn">
            Ver tienda
          </Link>
        </article>
      </div>
    </section>
  );
}
