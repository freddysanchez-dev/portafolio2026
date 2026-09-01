import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
             ¡Hola! Soy Freddy Desarrollador Web y Analista de datos
          </span>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Construyo{' '}
            <span className="gradient-text">experiencias digitales</span>
            <br />
            que impresionan
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Especializado en desarrollo web , Análisis de Datos e Inteligencia Artificial.
            Transformo ideas en productos digitales de alta calidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Contactar
            </a>
          </div>

          {/* Información de contacto actualizada */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="mailto:freddysz894@gmail.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="h-4 w-4" /> freddysz894@gmail.com
            </a>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
            <a href="tel:+50670201736" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="h-4 w-4" /> +506 7020-1736
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/freddysanchez-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/freddy-s%C3%A1nchez-39b2931aa/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:freddysz894@gmail.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 animate-bounce text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;