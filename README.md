# KVmakeup CRM + Tienda virtual (Next.js)

Proyecto base para construir en un solo código:

- **CRM interno** para la gestión de clientas, ventas y seguimiento.
- **Tienda virtual** pública para mostrar y vender productos de maquillaje.

## Stack

- Next.js (App Router)
- TypeScript
- CSS global simple (listo para migrar a Tailwind o design system)

## Ejecutar local

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Estructura inicial

- `app/` rutas de la web
  - `app/page.tsx`: portada
  - `app/crm/page.tsx`: módulo CRM inicial
  - `app/tienda/page.tsx`: catálogo inicial
- `data/mock.ts`: datos de ejemplo para arrancar rápido

## Roadmap sugerido (ideal con Cursor gratuito)

1. **Fase 1 (MVP UI):**
   - Completar pantallas CRM (clientes, pedidos, seguimiento).
   - Completar tienda (detalle de producto, carrito simple).
2. **Fase 2 (Backend):**
   - Añadir Prisma + PostgreSQL/Supabase.
   - Crear autenticación para panel CRM (NextAuth o Clerk).
3. **Fase 3 (Operación):**
   - Integrar pagos (Mercado Pago / Stripe).
   - Integrar WhatsApp para seguimiento de clientas.
4. **Fase 4 (Deploy):**
   - Desplegar en Vercel.
   - Configurar dominio final de KVmakeup.

## Recomendación para Cursor Free

- Trabaja en tareas pequeñas y concretas (una pantalla o endpoint a la vez).
- Reutiliza prompts con contexto corto (archivo actual + objetivo puntual).
- Mantén una lista de tareas por sprint para no gastar solicitudes en iteraciones largas.

