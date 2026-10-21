import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, BrainCircuit, Target, TrendingUp } from 'lucide-react';

// Importación de imágenes locales
import dataLabImg from '../img/DataLABEDA.png';
import Logistica from '../img/Logistica.png';
import TalentLens from '../img/TalentLens.png';

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
      image_url: Logistica,
      github_url: 'https://github.com/freddysanchez-dev/PANEL-CONTROL-ABARCASAS_LOGISTICA',
      live_url: 'https://freddysanchez-dev.github.io/PANEL-CONTROL-ABARCASAS_LOGISTICA/appweb/html/prueba.html',
    },
    {
      id: 2,
      title: 'PowerVital - HealthTech AI: Generador Adaptativo de Rutinas Según Patologías',
      category: 'Inteligencia Artificial & HealthTech',
      description: 'Sistema inteligente enfocado en salud preventiva que evalúa condiciones médicas y limitaciones físicas para prescribir planes de ejercicio seguros. Integra un backend en .NET/C# con la API de OpenAI para analizar datos clínicos de los usuarios y generar planes de entrenamiento personalizados en tiempo real.',
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
      image_url: dataLabImg,
      github_url: 'https://github.com/freddysanchez-dev/Ciencias-de-datos/tree/main/Analisis%20exploratorio%20de%20datos(EDA)/PROYECTO_FINAL_FREDDY',
      live_url: 'https://github.com/freddysanchez-dev/Ciencias-de-datos/tree/main/Analisis%20exploratorio%20de%20datos(EDA)/PROYECTO_FINAL_FREDDY',
    },
    {
      id: 4,
      title: 'TalentLens Analytics - People Analytics & Retención de Talento',
      category: 'Data Analytics & RR.HH.',
      description: 'Análisis end-to-end de datos de RR.HH. (1,470 empleados) para identificar las causas raíz de la rotación voluntaria (16.1%) y cuantificar su impacto financiero ($6.8M). Incluye pipeline de limpieza en Python, ingeniería de características (Flight Risk Score) y un dashboard interactivo en Power BI con simulador financiero de retención que proyecta un ahorro de $1.32M.',
      technologies: ['Python', 'Power BI', 'DAX', 'Pandas', 'Data Storytelling'],
      image_url: TalentLens,
      github_url: 'https://github.com/freddysanchez-dev',
      live_url: 'https://app.powerbi.com/view?r=eyJrIjoiN2IxMDQ4NTYtYmRjNS00NTEwLTgwYjYtZTQyZjRkMDk4Yjc2IiwidCI6ImU3OTg0Y2FjLTI1NDMtNGY4OC04Zjk3LTk1MjQzMzVlNmJjNCIsImMiOjR9',
      softSkills: [
        'Pensamiento Crítico: Detección de anomalías en el modelo predictivo (Flight Risk Score) y recalibración de pesos empíricos.',
        'Traducción de Negocio (Business Translation): Convertir hallazgos técnicos complejos (burnout, horas extra) en recomendaciones gerenciales accionables.',
        'Comunicación Ejecutiva: Diseño de un dashboard orientado a la toma de decisiones estratégicas para el Comité Ejecutivo (C-Level).',
        'Resolución de Problemas Complejos: Gestión de datos sucios mediante imputación jerárquica, winsorización y estandarización de categorías.'
      ],
      methodology: [
        'Pipeline ETL: Limpieza automatizada de 35 variables, eliminación de duplicados y estandarización de datos en Python (Pandas).',
        'Feature Engineering: Creación de KPIs avanzados como Compa-Ratio, Burnout Risk Score, Flight Risk Score y matriz Nine-Box.',
        'Modelado DAX: Implementación de simulador financiero de retención y cálculo de ahorro neto proyectado en Power BI.',
        'Data Storytelling: Estructura estratégica de 4 páginas (Diagnóstico, Causas Raíz, Equidad Salarial y Simulador de Alerta Temprana).'
      ]
    }
  ];

  useEffect(() => {
    const found = projectsData.find(p => p.id === parseInt(id));
    setProject(found || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 text-center text-gray-600 dark:text-gray-400">
        Cargando detalles del proyecto...
      </div>
    );
  }

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

          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
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

          <div className="flex flex-wrap gap-3 mb-10">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* SECCIÓN EXTRA EXCLUSIVA PARA TALENTLENS (Proyecto 4) */}
          {project.softSkills && (
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  <BrainCircuit className="text-purple-500" /> Habilidades Blandas Aplicadas
                </h3>
                <ul className="space-y-4">
                  {project.softSkills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  <Target className="text-emerald-500" /> Metodología y Herramientas
                </h3>
                <ul className="space-y-4">
                  {project.methodology.map((met, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <TrendingUp className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{met}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex gap-4 flex-wrap pt-6 border-t border-gray-200 dark:border-gray-800">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
              >
                <ExternalLink className="h-5 w-5" /> 
                {project.id === 4 ? 'Ver Dashboard en Power BI' : 'Ver Demo'}
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Github className="h-5 w-5" /> Código / Repositorio
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;