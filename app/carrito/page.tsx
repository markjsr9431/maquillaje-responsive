"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CartPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Carrito de compras</h1>

            <div className="mt-12">
              <CartItems />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function CartItems() {
  // Actualizar los productos del carrito con imágenes reales
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Base de maquillaje",
      price: 99.99,
      quantity: 1,
      image: "/images/makeup-product-1.png",
    },
    {
      id: 2,
      name: "Labial mate",
      price: 79.99,
      quantity: 2,
      image: "/images/makeup-product-3.png",
    },
    {
      id: 3,
      name: "Paleta de sombras",
      price: 129.99,
      quantity: 1,
      image: "/images/makeup-product-2.png",
    },
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium text-gray-900">Tu carrito está vacío</h2>
        <p className="mt-4 text-gray-500">Parece que aún no has añadido ningún producto a tu carrito.</p>
        <div className="mt-6">
          <Button asChild className="bg-pink-600 hover:bg-pink-700">
            <Link href="/">Continuar comprando</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
      <div className="lg:col-span-7">
        <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {items.map((item) => (
            <li key={item.id} className="flex py-6 sm:py-8">
              <div className="flex-shrink-0">
                <div className="h-24 w-24 rounded-md border border-gray-200 bg-gray-200 sm:h-32 sm:w-32">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="ml-4 text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Categoría</p>
                </div>

                <div className="mt-4 flex flex-1 items-end justify-between">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button type="button" className="p-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 text-center w-12">{item.quantity}</span>
                    <button type="button" className="p-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-pink-600 hover:text-pink-500"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium text-gray-900">Resumen del pedido</h2>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Subtotal</p>
            <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600">Envío</p>
            <p className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <p className="text-base font-medium text-gray-900">Total</p>
            <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-full bg-pink-600 hover:bg-pink-700">Proceder al pago</Button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            o{" "}
            <Link href="/" className="font-medium text-pink-600 hover:text-pink-500">
              Continuar comprando
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

