import { products } from "@/data/mock";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

export default function StorePage() {
  return (
    <section>
      <h2>Tienda virtual</h2>
      <p>Catálogo inicial preparado para conectar carrito y checkout.</p>

      <div className="grid">
        {products.map((product) => (
          <article key={product.id} className="card">
            {product.bestseller ? <span className="badge">Top ventas</span> : null}
            <h3>{product.name}</h3>
            <p>Categoría: {product.category}</p>
            <p>Precio: {formatPrice(product.price)}</p>
            <p>Stock disponible: {product.stock}</p>
            <button type="button" className="btn" disabled>
              Añadir al carrito (siguiente fase)
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
