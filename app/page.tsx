import Link from "next/link";
import { rolePermissions } from "@/data/mock";

export default function HomePage() {
  return (
    <section className="stack">
      <span className="badge">Minimal Commerce · Violeta / Blanco</span>
      <h2>Plataforma KVmakeup</h2>
      <p className="lead">
        Inspirado en patrones de tiendas online modernas (catálogo por categorías,
        tarjetas limpias y dashboard administrativo por módulos).
      </p>

      <div className="grid">
        <article className="card">
          <h3>Experiencia cliente</h3>
          <p>Tienda separada por tipo de producto: rostro, ojos, labios y brochas.</p>
          <Link href="/tienda" className="btn">
            Ir a tienda
          </Link>
        </article>
        <article className="card">
          <h3>Experiencia administrador</h3>
          <p>Dashboard, inventarios, cuentas por cobrar y formularios de creación.</p>
          <Link href="/admin" className="btn btnGhost">
            Ir a admin
          </Link>
        </article>
      </div>

      <article className="card">
        <h3>Roles y permisos</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Rol</th>
              <th>Dashboard</th>
              <th>Inventario</th>
              <th>Cuentas por cobrar</th>
              <th>Crear productos</th>
              <th>Comprar online</th>
            </tr>
          </thead>
          <tbody>
            {rolePermissions.map((role) => (
              <tr key={role.role}>
                <td>{role.role}</td>
                <td>{role.canAccessDashboard ? "Sí" : "No"}</td>
                <td>{role.canManageInventory ? "Sí" : "No"}</td>
                <td>{role.canManageReceivables ? "Sí" : "No"}</td>
                <td>{role.canCreateProducts ? "Sí" : "No"}</td>
                <td>{role.canBuyOnline ? "Sí" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
