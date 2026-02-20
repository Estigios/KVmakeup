import { customers } from "@/data/mock";

export default function CrmPage() {
  return (
    <section>
      <h2>Panel CRM</h2>
      <p>Vista inicial para gestionar clientes de KVmakeup.</p>

      <div className="card">
        <h3>Clientes recientes</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Última compra</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.lastPurchase}</td>
                <td>{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
