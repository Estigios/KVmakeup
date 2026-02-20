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
- `vercel.json`: configuración explícita para despliegue en Vercel

## Despliegue en Vercel (GitHub)

1. Sube este repositorio a GitHub.
2. En Vercel, crea un proyecto nuevo y selecciona el repo.
3. Verifica en **Project Settings → General**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `.` (raíz del repo)
4. Despliega.

### Si aparece error 404 en Vercel

Revisa estos puntos (son los más comunes):

- El proyecto en Vercel apunta a otra carpeta (Root Directory incorrecto).
- El deploy se está haciendo desde una rama sin `app/page.tsx`.
- El repositorio importado no es este o no está actualizado.
- Build falló y Vercel mostró un deployment previo/placeholder.

Este repo ya incluye:

- ruta principal `/` en `app/page.tsx`
- layout en `app/layout.tsx`
- configuración de Vercel en `vercel.json`

Con eso, un deploy correcto en rama actual debe responder en `/` sin 404.

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
