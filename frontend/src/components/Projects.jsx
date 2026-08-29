import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Datos estáticos de tus proyectos (sin llamada a API)
  const projects = [
    {
      id: 1,
      title: 'Abarcasas - Puerto de Nueva Orleans',
      category: 'Simulación Logística',
      description: 'Sistema de simulación de eventos discretos para optimizar operaciones portuarias. Utiliza el Método de Monte Carlo para modelar llegadas, descargas y retrasos de barcazas, generando un dashboard analítico para la toma de decisiones logísticas.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Monte Carlo'],
      image_url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&auto=format&fit=crop',
      github_url: 'https://github.com/freddysanchez-dev/PANEL-CONTROL-ABARCASAS_LOGISTICA',
      live_url: 'https://dragonmanprogrammer.github.io/PANEL-CONTROL-ABARCASAS_LOGISTICA/appweb/html/prueba.html',
    },
    {
      id: 2,
      title: 'PowerVital - Recomendación de Ejercicios con IA',
      category: 'Inteligencia Artificial',
      description: 'Plataforma web que recomienda rutinas de ejercicio personalizadas. Los clientes se registran, indican sus padecimientos y un backend en C# usa la API de OpenAI para generar una rutina segura y adaptada a sus capacidades.',
      technologies: ['C#', '.NET', 'API OpenAI', 'JavaScript', 'HTML', 'CSS'],
      image_url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop',
      github_url: 'https://github.com/freddysanchez-dev',
      live_url: 'https://powervital.vercel.app/',
    },
    {
      id: 3,
      title: 'DataLab EDA - Análisis y Limpieza de Datos',
      category: 'Ciencia de Datos',
      description: 'Aplicación de escritorio profesional para análisis exploratorio de datos (EDA) con interfaz gráfica moderna. Ofrece limpieza auditable, estadísticas descriptivas, detección de outliers, dashboards interactivos y gestión completa de datos.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Tkinter', 'Seaborn'],
      image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      github_url: 'https://github.com/freddysanchez-dev/Ciencias-de-datos/tree/main/Analisis%20exploratorio%20de%20datos(EDA)/PROYECTO_FINAL_FREDDY',
      live_url: 'https://github.com/freddysanchez-dev/Ciencias-de-datos/tree/main/Analisis%20exploratorio%20de%20datos(EDA)/PROYECTO_FINAL_FREDDY',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más relevantes en simulación logística, inteligencia artificial y ciencia de datos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x400/1e293b/ffffff?text=Proyecto';
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                    <Github className="h-5 w-5 text-gray-900" />
                  </a>
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="h-5 w-5 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                >
                  Ver detalles <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;