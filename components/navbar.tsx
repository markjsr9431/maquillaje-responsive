"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-pink-600">
              BeautyShop
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.href)
                      ? "bg-pink-100 text-pink-600"
                      : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/carrito"
                className={`ml-4 p-2 rounded-md ${
                  isActive("/carrito")
                    ? "bg-pink-100 text-pink-600"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                }`}
              >
                <ShoppingBag className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <Link href="/carrito" className="p-2 rounded-md text-gray-600 hover:bg-pink-50 hover:text-pink-600">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <button
              type="button"
              className="ml-2 p-2 rounded-md text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? "bg-pink-100 text-pink-600"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

