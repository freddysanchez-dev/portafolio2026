import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // ⚠️ IMPORTANTE: Estos datos DEBEN ser IDÉNTICOS a los de Projects.jsx
  const projectsData = [
    {
      id: 1,
      title: 'Abarcasas - Puerto de Nueva Orleans',
      category: 'Simulación Logística',
      description: 'Sistema de simulación de eventos discretos para optimizar operaciones portuarias. Utiliza el Método de Monte Carlo para modelar llegadas, descargas y retrasos de barcazas, generando un dashboard analítico para la toma de decisiones logísticas. El sistema permite visualizar en tiempo real el impacto de diferentes estrategias operativas y tomar decisiones basadas en datos.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Monte Carlo'],
      image_url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&auto=format&fit=crop',
      github_url: 'https://github.com/freddysanchez-dev/PANEL-CONTROL-ABARCASAS_LOGISTICA',
      live_url: 'https://dragonmanprogrammer.github.io/PANEL-CONTROL-ABARCASAS_LOGISTICA/appweb/html/prueba.html',
    },
    {
      id: 2,
      title: 'PowerVital - Recomendación de Ejercicios con IA',
      category: 'Inteligencia Artificial',
      description: 'Plataforma web que recomienda rutinas de ejercicio personalizadas. Los clientes se registran en el sistema de administración, indican sus padecimientos y condiciones físicas. Un backend desarrollado en C# utiliza la API de OpenAI para generar una rutina segura y adaptada a sus capacidades, garantizando que no se incurra en problemas médicos durante la práctica.',
      technologies: ['C#', '.NET', 'API OpenAI', 'JavaScript', 'HTML', 'CSS'],
      image_url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop',
      github_url: 'https://github.com/freddysanchez-dev',
      live_url: 'https://powervital.vercel.app/',
    },
    {
      id: 3,
      title: 'DataLab EDA - Análisis y Limpieza de Datos',
      category: 'Ciencia de Datos',
      description: 'Aplicación de escritorio profesional para análisis exploratorio de datos (EDA) con interfaz gráfica moderna. Ofrece limpieza auditable con registro de acciones, estadísticas descriptivas (media, mediana, moda, varianza), detección de outliers, análisis de correlación, dashboards interactivos con 6 gráficos, filtrado dinámico, agrupaciones y gestión completa de datos. Desarrollada con Python, Pandas, Matplotlib y Tkinter, esta herramienta está diseñada para científicos de datos y analistas que buscan una solución sin depender de notebooks o líneas de comando.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Tkinter', 'Seaborn', 'NumPy'],
      image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      github_url: 'https://github.com/freddysanchez-dev/Ciencias-de-datos/tree/main/Analisis%20exploratorio%20de%20datos(EDA)/PROYECTO_FINAL_FREDDY',
      live_url: 'https://github.com/freddysanchez-dev/Ciencias-de-datos/tree/main/Analisis%20exploratorio%20de%20datos(EDA)/PROYECTO_FINAL_FREDDY',
    },
  ];

  useEffect(() => {
    // Buscar el proyecto por ID en los datos estáticos
    const found = projectsData.find(p => p.id === parseInt(id));
    setProject(found || null);
    setLoading(false);
  }, [id]);

  // Mostrar mensaje de carga
  if (loading) {
    return (
      <div className="pt-24 text-center text-gray-600 dark:text-gray-400">
        Cargando detalles del proyecto...
      </div>
    );
  }

  // Mostrar mensaje si no se encuentra el proyecto
  if (!project) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
          Proyecto no encontrado
        </h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
        >
          <ArrowLeft className="h-5 w-5" /> Volver al inicio
        </Link>
      </div>
    );
  }

  // Renderizar los detalles del proyecto
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-5 w-5" /> Volver al inicio
          </Link>

          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-64 sm:h-96 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400/1e293b/ffffff?text=Proyecto';
              }}
            />
          </div>

          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            {project.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">{project.title}</h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
              >
                <ExternalLink className="h-5 w-5" /> Ver Demo
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Github className="h-5 w-5" /> Código
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;