import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="font-bold gradient-text">DevPortfolio</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-red-500 fill-red-500" /> usando React, Node.js & PostgreSQL
          </p>
          
          <p className="text-gray-500 dark:text-gray-600 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;