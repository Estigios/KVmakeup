import Link from "next/link";
import { products, receivables, sales } from "@/data/mock";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

export default function AdminPage() {
  const totalStock = products.reduce((acc, product) => acc + product.stock, 0);
  const receivableTotal = receivables.reduce((acc, item) => acc + item.amount, 0);
  const pendingSales = sales.filter((sale) => sale.status === "pendiente").length;

  return (
    <section className="stack">
      <h2>Dashboard de administración</h2>
      <p className="lead">
        Acceso para administradores: control de inventarios, cuentas por cobrar y gestión
        de catálogo.
      </p>

      <div className="grid">
        <article className="card">
          <h3>Inventario total</h3>
          <p className="metric">{totalStock} unidades</p>
        </article>
        <article className="card">
          <h3>Cuentas por cobrar</h3>
          <p className="metric">{formatPrice(receivableTotal)}</p>
        </article>
        <article className="card">
          <h3>Ventas pendientes</h3>
          <p className="metric">{pendingSales}</p>
        </article>
      </div>

      <div className="grid">
        <article className="card">
          <h3>Gestión de inventario</h3>
          <p>Revisa stock por producto y define reposición de forma semanal.</p>
        </article>
        <article className="card">
          <h3>Cuentas por cobrar</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Vencimiento</th>
                <th>Monto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {receivables.map((item) => (
                <tr key={item.id}>
                  <td>{item.customer}</td>
                  <td>{item.dueDate}</td>
                  <td>{formatPrice(item.amount)}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>

      <article className="card">
        <h3>Catálogo de productos</h3>
        <p>Solo administradores deben crear y actualizar productos.</p>
        <Link href="/admin/productos" className="btn">
          Abrir formularios de producto
        </Link>
      </article>
    </section>
  );
}
