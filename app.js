require('dotenv').config();
const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DSW9 Store</title>
        <style>
          :root {
            --bg: #f7f1e8;
            --surface: #fffaf3;
            --text: #1f1a17;
            --muted: #6f6257;
            --primary: #c96c3a;
            --primary-dark: #8c4320;
            --accent: #264653;
            --border: #e7d7c6;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            background:
              radial-gradient(circle at top left, rgba(201, 108, 58, 0.16), transparent 30%),
              linear-gradient(135deg, #f7f1e8 0%, #fdf8f2 45%, #efe2d2 100%);
            color: var(--text);
          }

          .page {
            min-height: 100vh;
            padding: 32px 20px 48px;
          }

          .container {
            max-width: 1120px;
            margin: 0 auto;
          }

          .topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            margin-bottom: 32px;
          }

          .brand {
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .nav {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }

          .nav a,
          .button {
            text-decoration: none;
            color: var(--text);
            border: 1px solid var(--border);
            padding: 10px 16px;
            border-radius: 999px;
            background: rgba(255, 250, 243, 0.8);
            transition: transform 0.2s ease, background 0.2s ease;
          }

          .nav a:hover,
          .button:hover {
            transform: translateY(-2px);
            background: #fff;
          }

          .hero {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 28px;
            align-items: center;
            background: rgba(255, 250, 243, 0.88);
            border: 1px solid var(--border);
            border-radius: 28px;
            padding: 40px;
            box-shadow: 0 18px 45px rgba(38, 70, 83, 0.08);
          }

          .eyebrow {
            color: var(--primary-dark);
            text-transform: uppercase;
            letter-spacing: 0.16em;
            font-size: 0.82rem;
            margin-bottom: 12px;
          }

          h1 {
            margin: 0 0 16px;
            font-size: clamp(2.4rem, 5vw, 4.8rem);
            line-height: 0.95;
          }

          .lead {
            margin: 0 0 24px;
            font-size: 1.05rem;
            line-height: 1.7;
            color: var(--muted);
            max-width: 56ch;
          }

          .actions {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
          }

          .button.primary {
            background: var(--primary);
            color: #fff;
            border-color: var(--primary);
          }

          .panel {
            background: linear-gradient(180deg, #264653 0%, #1d3557 100%);
            color: #fff;
            border-radius: 24px;
            padding: 28px;
            position: relative;
            overflow: hidden;
          }

          .panel::after {
            content: "";
            position: absolute;
            inset: auto -30px -30px auto;
            width: 120px;
            height: 120px;
            background: rgba(233, 196, 106, 0.22);
            border-radius: 50%;
          }

          .panel h2 {
            margin-top: 0;
            font-size: 1.6rem;
          }

          .stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 24px;
          }

          .stat {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 18px;
            padding: 14px;
          }

          .stat strong {
            display: block;
            font-size: 1.4rem;
            margin-bottom: 6px;
          }

          .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 18px;
            margin-top: 28px;
          }

          .feature {
            background: rgba(255, 250, 243, 0.88);
            border: 1px solid var(--border);
            border-radius: 22px;
            padding: 22px;
          }

          .feature h3 {
            margin-top: 0;
            margin-bottom: 10px;
          }

          .meta {
            margin-top: 28px;
            color: var(--muted);
            font-size: 0.95rem;
          }

          @media (max-width: 640px) {
            .hero {
              padding: 28px 22px;
            }

            .stats {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>
      <body>
        <main class="page">
          <div class="container">
            <header class="topbar">
              <div class="brand">DSW9 Store</div>
              <nav class="nav">
                <a href="/products">Productos</a>
                <a href="/cart">Carrito</a>
                <a href="/checkout">Checkout</a>
              </nav>
            </header>

            <section class="hero">
              <div>
                <div class="eyebrow">E-commerce Node + Express</div>
                <h1>Una tienda lista para seguir creciendo.</h1>
                <p class="lead">
                  Esta pagina inicial reemplaza el ejemplo basico y presenta la
                  tienda con una interfaz mas clara, moderna y preparada para
                  conectar catalogo, carrito y flujo de compra.
                </p>
                <div class="actions">
                  <a class="button primary" href="/products">Ver catalogo</a>
                  <a class="button" href="/checkout">Ir al checkout</a>
                </div>
                <p class="meta">
                  Puerto: ${port} | Entorno: ${process.env.NODE_ENV || 'development'}
                </p>
              </div>

              <aside class="panel">
                <h2>Panel rapido</h2>
                <p>
                  Base ideal para agregar productos destacados, promociones,
                  autenticacion o integracion con base de datos.
                </p>
                <div class="stats">
                  <div class="stat">
                    <strong>3</strong>
                    secciones listas
                  </div>
                  <div class="stat">
                    <strong>100%</strong>
                    responsive
                  </div>
                  <div class="stat">
                    <strong>Node</strong>
                    listo para desplegar
                  </div>
                </div>
              </aside>
            </section>

            <section class="features">
              <article class="feature">
                <h3>Catalogo</h3>
                <p>Espacio pensado para listar productos, filtros y categorias.</p>
              </article>
              <article class="feature">
                <h3>Carrito</h3>
                <p>Seccion preparada para mostrar resumen de compra y totales.</p>
              </article>
              <article class="feature">
                <h3>Checkout</h3>
                <p>Lista para conectar formularios, pago y confirmacion de pedido.</p>
              </article>
            </section>
          </div>
        </main>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
