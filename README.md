# KVmakeup CRM + Tienda virtual (Next.js)

Proyecto base para construir en un solo código:

- **CRM interno** para gestión de clientas, seguimiento comercial y ventas.
- **Tienda virtual** pública para mostrar catálogo y vender en web.

## Stack

- Next.js (App Router)
- TypeScript
- CSS global simple

## Ejecutar local

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Estructura inicial

- `app/`
  - `app/page.tsx`: portada de plataforma
  - `app/crm/page.tsx`: KPIs + tabla de clientas
  - `app/tienda/page.tsx`: catálogo inicial
  - `app/layout.tsx`: layout + navegación
- `data/mock.ts`: tipos y datos de ejemplo

## Problemas comunes de instalación (entornos corporativos/proxy)

Si `npm install` da `403 Forbidden`:

1. Verifica si tienes variables de proxy forzadas (`HTTP_PROXY`, `HTTPS_PROXY`, `npm_config_http_proxy`).
2. Prueba instalación sin esas variables:

```bash
env -u npm_config_http_proxy -u npm_config_https_proxy -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY npm install
```

3. Si sigue fallando, tu red está bloqueando el registry npm y necesitas:
   - habilitar acceso a `registry.npmjs.org`, o
   - configurar un registry interno permitido por tu empresa.

## Roadmap recomendado

1. **Fase 1 (UI + flujo):** clientes, pedidos, seguimiento, carrito.
2. **Fase 2 (backend):** Prisma + PostgreSQL/Supabase.
3. **Fase 3 (seguridad):** autenticación y roles (admin / vendedor).
4. **Fase 4 (ventas):** pagos y automatización WhatsApp/email.
5. **Fase 5 (deploy):** Vercel + dominio final KVmakeup.

## Cursor Free: estrategia práctica

- Divide en tareas pequeñas (1 pantalla o 1 endpoint por prompt).
- Pide cambios incrementales y revisables.
- Mantén un checklist técnico corto para no gastar tokens en contexto irrelevante.
