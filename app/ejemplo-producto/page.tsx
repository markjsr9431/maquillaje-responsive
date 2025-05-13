import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductoImagen from "@/components/producto-imagen"

export default function EjemploProductoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ejemplo de Producto</h1>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
                Esta página muestra cómo usar el componente ProductoImagen de forma independiente.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <ProductoImagen
                src="/images/productos1.jpeg"
                alt="Colección de productos de maquillaje y brochas"
                priority={true}
              />

              <div className="mt-12">
                <ProductoImagen
                  src="/images/productos2.png"
                  alt="Productos de maquillaje en tonos nude y coral"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl border-4 border-pink-200"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
