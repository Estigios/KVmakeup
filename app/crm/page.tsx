import { customers, sales } from "@/data/mock";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

export default function CrmPage() {
  const monthlyRevenue = sales.reduce((acc, sale) => acc + sale.total, 0);
  const activeCustomers = customers.filter((customer) => customer.status !== "inactivo").length;

  return (
    <section className="stack">
      <h2>CRM Comercial</h2>
      <p className="lead">Seguimiento de clientas, ventas y salud comercial del negocio.</p>

      <div className="grid">
        <article className="card">
          <h3>Ventas registradas</h3>
          <p className="metric">{sales.length}</p>
        </article>
        <article className="card">
          <h3>Ingresos</h3>
          <p className="metric">{formatPrice(monthlyRevenue)}</p>
        </article>
        <article className="card">
          <h3>Clientas activas</h3>
          <p className="metric">{activeCustomers}</p>
        </article>
      </div>

      <article className="card">
        <h3>Base de clientes</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Contacto</th>
              <th>Ciudad</th>
              <th>Total comprado</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>
                  <div>{customer.phone}</div>
                  <div className="muted">{customer.email}</div>
                </td>
                <td>{customer.city}</td>
                <td>{formatPrice(customer.totalSpent)}</td>
                <td>{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
