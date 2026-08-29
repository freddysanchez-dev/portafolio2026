-- Tabla de proyectos
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    technologies TEXT[],
    github_url VARCHAR(500),
    live_url VARCHAR(500),
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de servicios
CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    features TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de mensajes de contacto
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar servicios iniciales
INSERT INTO services (title, description, icon, features) VALUES
('Desarrollo Web Freelance', 'Sitios web personalizados, landing pages y aplicaciones web modernas con React y tecnologías de vanguardia', '💻', ARRAY['React & Next.js', 'Diseño Responsive', 'Optimización SEO', 'Animaciones Modernas']),
('E-commerce', 'Tiendas online completas con carrito de compras, pasarelas de pago y panel de administración', '🛒', ARRAY['Stripe & PayPal', 'Carrito de Compras', 'Panel Admin', 'Reportes de Ventas']),
('Aplicaciones Full-Stack', 'Sistemas completos con frontend, backend, base de datos y autenticación segura', '🚀', ARRAY['React + Node.js', 'PostgreSQL/MongoDB', 'JWT Auth', 'APIs RESTful']),
('APIs RESTful', 'Desarrollo de APIs escalables con Node.js, Express y documentación completa', '⚡', ARRAY['Node.js & Express', 'Documentación Swagger', 'Rate Limiting', 'Versionado']),
('Optimización SEO', 'Mejora de rendimiento, SEO técnico y accesibilidad web', '📈', ARRAY['Core Web Vitals', 'Schema Markup', 'Accesibilidad WCAG', 'Performance Tuning']),
('Mantenimiento Web', 'Actualizaciones, seguridad, backups y soporte técnico continuo', '🔧', ARRAY['Actualizaciones de Seguridad', 'Backups Automáticos', 'Monitoreo 24/7', 'Soporte Técnico']);

-- Insertar proyectos de ejemplo
INSERT INTO projects (title, description, image_url, technologies, github_url, live_url, category) VALUES
('Tienda Online E-commerce', 'Plataforma de comercio electrónico completa con carrito, pagos y panel admin', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'], 'https://github.com/tuusuario/ecommerce', 'https://ecommerce-demo.com', 'E-commerce'),
('Dashboard Analytics', 'Panel de control interactivo con gráficos en tiempo real y reportes', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', ARRAY['React', 'D3.js', 'Express', 'PostgreSQL'], 'https://github.com/tuusuario/dashboard', 'https://dashboard-demo.com', 'Full-Stack'),
('App de Gestión de Tareas', 'Aplicación de productividad con autenticación, drag-and-drop y notificaciones', 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b', ARRAY['React', 'Redux', 'Node.js', 'JWT'], 'https://github.com/tuusuario/taskapp', 'https://taskapp-demo.com', 'Full-Stack');