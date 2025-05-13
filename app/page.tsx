import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ImageSlider from "@/components/image-slider"

export default function Home() {
  // Imágenes para el slider
  const heroImages = [
    {
      src: "/images/productos1.jpeg",
      alt: "Colección de productos de maquillaje y brochas",
    },
    {
      src: "/images/productos2.png",
      alt: "Productos de maquillaje en tonos nude y coral",
    },
  ]

  // Productos destacados con nombres y precios actualizados
  const featuredProducts = [
    {
      id: 1,
      name: "Base de maquillaje HD",
      price: 99.0,
      category: "Rostro",
      image: "/images/makeup-product-1.png",
    },
    {
      id: 2,
      name: "Paleta de sombras Sunset",
      price: 129.0,
      category: "Ojos",
      image: "/images/makeup-product-2.png",
    },
    {
      id: 3,
      name: "Labial mate Velvet",
      price: 79.0,
      category: "Labios",
      image: "/images/makeup-product-3.png",
    },
    {
      id: 4,
      name: "Set de brochas Premium",
      price: 149.0,
      category: "Accesorios",
      image: "/images/makeup-product-4.png",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Descubre tu belleza natural
              </h1>
              <p className="mt-6 max-w-xl text-lg text-gray-500">
                Productos de maquillaje de alta calidad que realzan tu belleza natural. Diseñados para todos los tonos
                de piel y tipos de cutis.
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Ver productos
                </Button>
                <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                  Más información
                </Button>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <ImageSlider images={heroImages} autoSlideInterval={5000} />
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Productos destacados</h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
                Descubre nuestra selección de productos más populares y mejor valorados.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        <Link href="#" className="hover:underline">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 w-full border-pink-600 text-pink-600 hover:bg-pink-50"
                  >
                    Añadir al carrito
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-pink-600 hover:bg-pink-700">Ver todos los productos</Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-pink-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Lo que dicen nuestras clientas
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
                Descubre por qué nuestras clientas aman nuestros productos.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  name: "María García",
                  image: "/images/customer-1.png",
                  text: "Los productos son increíbles. La calidad es excelente y los resultados son visibles desde la primera aplicación. Definitivamente recomendaría esta marca a todas mis amigas.",
                },
                {
                  id: 2,
                  name: "Laura Rodríguez",
                  image: "/images/customer-2.png",
                  text: "Me encanta la variedad de tonos disponibles. Por fin encontré productos que se adaptan perfectamente a mi tono de piel. Además, la duración es impresionante.",
                },
                {
                  id: 3,
                  name: "Ana Martínez",
                  image: "/images/customer-3.png",
                  text: "Los productos son hipoalergénicos y no irritan mi piel sensible. La textura es suave y fácil de aplicar. Sin duda, mi marca de maquillaje favorita.",
                },
              ].map((testimonial) => (
                <div key={testimonial.id} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-full w-full rounded-full object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
