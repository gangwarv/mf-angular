# Seller workspace

An Angular microfrontend workspace for a simple seller portal. It uses
[Angular Architects Native Federation](https://www.npmjs.com/package/@angular-architects/native-federation)
to load the Products and Orders pages into the Shell at runtime.

## Applications

| Application | Role | Shell route | Development URL |
| --- | --- | --- | --- |
| `shell` | Host application with the home page and top navigation | `/` | http://localhost:4200 |
| `products` | Remote exposing the hardcoded product catalog table | `/products` | http://localhost:4201 |
| `orders` | Remote exposing the hardcoded orders table | `/orders` | http://localhost:4202 |

The Shell loads remote components through the `./Component` federation
exposure. Products exposes `ProductsPage` and Orders exposes `OrdersPage`.
The remote URLs are configured in
[`projects/shell/public/federation.manifest.json`](./projects/shell/public/federation.manifest.json);
each remote's exposed component is configured in its `federation.config.mjs`.

## Run locally

Install dependencies once:

```bash
npm install
```

Run each application in a separate terminal:

```bash
npm run start:shell
npm run start:products
npm run start:orders
```

Open http://localhost:4200. The Shell navigation loads the remote pages without
leaving the Shell URL. The standalone remote development URLs can also be
opened directly.

## Build

Build the host and both remotes:

```bash
npx ng build shell
npx ng build products
npx ng build orders
```

## Tests

Run the workspace test suite:

```bash
npm test
```

## Project layout

```text
projects/
  shell/      Host app, home page, routes, and federation manifest
  products/   Products remote app and exposed product page
  orders/     Orders remote app and exposed orders page
```
