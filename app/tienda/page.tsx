import { products } from "@/data/mock";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

export default function StorePage() {
  return (
    <section>
      <h2>Tienda virtual</h2>
      <p>Catálogo inicial conectado a datos del proyecto.</p>

      <div className="grid">
        {products.map((product) => (
          <article key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>Categoría: {product.category}</p>
            <p>Precio: {formatPrice(product.price)}</p>
            <p>Stock: {product.stock}</p>
            <button type="button" className="btn" disabled>
              Próximamente
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
