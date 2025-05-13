import Link from "next/link"

import SocialButtons from "@/components/social-buttons"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">BeautyShop</h2>
            <p className="mt-4 text-gray-400">
              Productos de maquillaje de alta calidad que realzan tu belleza natural.
            </p>
            <div className="mt-6">
              <SocialButtons />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/carrito" className="text-gray-400 hover:text-white">
                  Carrito de compras
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">Av. Principal 123, Ciudad, País</li>
              <li className="text-gray-400">+1 234 567 890</li>
              <li className="text-gray-400">info@tuempresa.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} BeautyShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

