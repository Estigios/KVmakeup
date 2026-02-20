export default function AdminProductsPage() {
  return (
    <section className="stack">
      <h2>Formulario de creación de productos (Admin)</h2>
      <p className="lead">Este formulario representa el flujo que solo debe usar el administrador.</p>

      <form className="card formGrid">
        <label>
          Nombre del producto
          <input type="text" placeholder="Ej: Corrector Luminous" />
        </label>

        <label>
          Categoría
          <select defaultValue="rostro">
            <option value="rostro">Rostro</option>
            <option value="ojos">Ojos</option>
            <option value="labios">Labios</option>
            <option value="brochas">Brochas</option>
          </select>
        </label>

        <label>
          Descripción
          <textarea rows={4} placeholder="Descripción corta para ficha de producto" />
        </label>

        <label>
          Precio (COP)
          <input type="number" min={0} placeholder="0" />
        </label>

        <label>
          Stock inicial
          <input type="number" min={0} placeholder="0" />
        </label>

        <label>
          URL de imagen
          <input type="url" placeholder="https://..." />
        </label>

        <button type="button" className="btn">
          Guardar producto
        </button>
      </form>
    </section>
  );
}
