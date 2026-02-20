# KVmakeup CRM + Tienda virtual (Next.js)

Sistema único para KVmakeup con dos experiencias:

- **Cliente:** tienda online por categorías de producto.
- **Administrador:** dashboard con inventario, cuentas por cobrar y gestión de catálogo.

## Stack

- Next.js (App Router)
- TypeScript
- Estilo minimalista (violeta + blanco)

## Roles del sistema

### Administrador

- Acceso a dashboard (`/admin`).
- Ver métricas comerciales y operativas.
- Gestionar inventario.
- Ver cuentas por cobrar.
- Crear productos desde formularios (`/admin/productos`).
- Consumir API administrativa (`/api/admin/products`).

### Vendedor

- Acceso a dashboard comercial (CRM).
- Seguimiento de clientes y ventas.
- Consulta de inventario.
- Sin permisos para creación de productos.

### Cliente

- Acceso a tienda (`/tienda`) y navegación por categoría.
- Compra online (flujo de carrito/checkout en siguiente fase).
- Sin acceso a módulos internos.

## APIs incluidas (base para integración)

### `GET /api/storefront`

Devuelve estructura de categorías y productos para tienda (patrón de collections inspirado en ecommerce modernos como Shopify/Amazon/Falabella).

### `GET /api/admin/products`

Devuelve inventario de productos para panel administrativo.

### `POST /api/admin/products`

Valida payload de creación de producto (demo sin base de datos aún). Requiere rol objetivo: `administrador`.

## Vercel (evitar 404)

1. Subir repo a GitHub.
2. Importar en Vercel.
3. Confirmar en settings:
   - Framework: Next.js
   - Root directory: `.`
4. Desplegar rama correcta.

## Ejecutar local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.
