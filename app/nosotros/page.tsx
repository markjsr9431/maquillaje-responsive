import Image from "next/image"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Sobre Nosotros</h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
                Conoce más sobre Dinanela Beauty y nuestra misión de realzar la belleza natural.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                <Image
                  src="/images/team-photo.png"
                  alt="Nuestro equipo creando productos de maquillaje"
                  className="h-full w-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Nuestra Historia</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Fundada en 2015, Dinanela Beauty nació con la visión de crear productos de maquillaje que no solo
                  realzaran la belleza exterior, sino que también cuidaran la piel. Comenzamos como una pequeña tienda
                  local y hemos crecido hasta convertirnos en una marca reconocida a nivel nacional.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Nuestro compromiso con la calidad y la innovación nos ha permitido desarrollar fórmulas únicas que se
                  adaptan a todos los tonos de piel y tipos de cutis. Trabajamos con los mejores laboratorios y
                  utilizamos ingredientes de alta calidad para garantizar productos que no solo se vean bien, sino que
                  también sean buenos para tu piel.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">Nuestros Valores</h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Calidad",
                    description:
                      "Nos comprometemos a ofrecer productos de la más alta calidad, utilizando ingredientes premium y fórmulas innovadoras.",
                  },
                  {
                    title: "Inclusividad",
                    description:
                      "Creemos que la belleza no tiene un solo estándar. Nuestros productos están diseñados para realzar la belleza natural de todas las personas.",
                  },
                  {
                    title: "Sostenibilidad",
                    description:
                      "Nos esforzamos por minimizar nuestro impacto ambiental, utilizando envases reciclables y procesos de producción sostenibles.",
                  },
                ].map((value) => (
                  <div key={value.title} className="rounded-lg bg-pink-50 p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="mt-4 text-gray-500">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">Nuestro Equipo</h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { id: 1, name: "Sofía Vega", position: "Fundadora y CEO", image: "/images/team-member-1.png" },
                  { id: 2, name: "Carlos Mendoza", position: "Director Creativo", image: "/images/team-member-2.png" },
                  { id: 3, name: "Elena Fuentes", position: "Química Cosmética", image: "/images/team-member-3.png" },
                  {
                    id: 4,
                    name: "Javier Torres",
                    position: "Director de Marketing",
                    image: "/images/team-member-4.png",
                  },
                ].map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} - ${member.position}`}
                        className="h-full w-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{member.name}</h3>
                    <p className="text-gray-500">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
