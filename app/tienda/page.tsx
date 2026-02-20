import { products } from "@/data/mock";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);

const categoryOrder = ["rostro", "ojos", "labios", "brochas"] as const;

export default function StorePage() {
  return (
    <section className="stack">
      <h2>Tienda virtual</h2>
      <p className="lead">Explora productos separados por categoría, como en un ecommerce real.</p>

      {categoryOrder.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category);
        if (categoryProducts.length === 0) return null;

        return (
          <section key={category} className="stack">
            <h3 className="sectionTitle">{category.toUpperCase()}</h3>
            <div className="grid">
              {categoryProducts.map((product) => (
                <article key={product.id} className="card">
                  {product.bestseller ? <span className="badge">Top ventas</span> : null}
                  <h4>{product.name}</h4>
                  <p className="muted">{product.description}</p>
                  <p>Precio: {formatPrice(product.price)}</p>
                  <p>Stock: {product.stock}</p>
                  <button type="button" className="btn" disabled>
                    Agregar al carrito
                  </button>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}
