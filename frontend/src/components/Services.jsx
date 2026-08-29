import { motion } from 'framer-motion';
import { Check, BarChart3, Brain, Code2 } from 'lucide-react';

const Services = () => {
  // Servicios estáticos (sin llamada a API)
  const services = [
    {
      id: 1,
      icon: <BarChart3 className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: 'Simulación & Análisis Logístico',
      description: 'Desarrollo de sistemas de simulación de eventos discretos y dashboards analíticos para optimizar operaciones y toma de decisiones.',
      features: ['Simulación Monte Carlo', 'Dashboards interactivos', 'Análisis predictivo', 'Optimización de procesos'],
    },
    {
      id: 2,
      icon: <Brain className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      title: 'Soluciones con Inteligencia Artificial',
      description: 'Integración de APIs de IA para crear experiencias personalizadas y automatizadas que resuelven problemas complejos.',
      features: ['API OpenAI', 'Recomendación personalizada', 'Automatización inteligente', 'Procesamiento de lenguaje natural'],
    },
    {
      id: 3,
      icon: <Code2 className="h-12 w-12 text-green-600 dark:text-green-400" />,
      title: 'Desarrollo Web Full-Stack',
      description: 'Creación de aplicaciones web modernas, escalables y con excelente experiencia de usuario, desde el frontend hasta el backend.',
      features: ['React / Next.js', 'Node.js / .NET', 'Bases de datos', 'Despliegue en la nube'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mis <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones digitales completas, desde simulación logística hasta inteligencia artificial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all card-hover"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;