import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 border-t border-gray-200">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Cláudio Faustino. Todos os direitos reservados.
      </p>
    </footer>
  );
}
