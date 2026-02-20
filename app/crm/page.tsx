import { customers, sales } from "@/data/mock";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

const getBadgeClass = (status: string) => {
  if (status === "fiel") return "status statusFiel";
  if (status === "nuevo") return "status statusNuevo";
  return "status statusInactivo";
};

export default function CrmPage() {
  const monthlyRevenue = sales.reduce((acc, sale) => acc + sale.total, 0);
  const activeCustomers = customers.filter((customer) => customer.status !== "inactivo").length;

  return (
    <section>
      <h2>Panel CRM</h2>
      <p>Vista operativa inicial para ventas, seguimiento y fidelización de clientas.</p>

      <div className="grid">
        <article className="card">
          <h3>Ventas registradas</h3>
          <p className="metric">{sales.length}</p>
        </article>
        <article className="card">
          <h3>Ingresos del mes</h3>
          <p className="metric">{formatPrice(monthlyRevenue)}</p>
        </article>
        <article className="card">
          <h3>Clientas activas</h3>
          <p className="metric">{activeCustomers}</p>
        </article>
      </div>

      <div className="card">
        <h3>Clientes recientes</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
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
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>
                  <div>{customer.phone}</div>
                  <div className="muted">{customer.email}</div>
                </td>
                <td>{customer.city}</td>
                <td>{formatPrice(customer.totalSpent)}</td>
                <td>
                  <span className={getBadgeClass(customer.status)}>{customer.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
