import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SocialButtons from "@/components/social-buttons"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contacto</h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
                Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Información de contacto</h2>
                <p className="mt-4 text-lg text-gray-500">Puedes contactarnos a través de los siguientes medios:</p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-pink-600" />
                    <span className="ml-3 text-gray-500">Av. Principal 123, Ciudad, País</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-pink-600" />
                    <span className="ml-3 text-gray-500">+1 234 567 890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-pink-600" />
                    <span className="ml-3 text-gray-500">info@tuempresa.com</span>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900">Síguenos en redes sociales</h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Mantente al día con nuestras últimas novedades y promociones siguiéndonos en nuestras redes
                    sociales.
                  </p>
                  <div className="mt-6">
                    <SocialButtons />
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900">Contacto directo</h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Estos botones te permitirán contactarnos directamente a través de WhatsApp, correo electrónico o
                    nuestras redes sociales para resolver tus dudas, hacer pedidos o solicitar información sobre
                    nuestros productos.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button className="bg-green-600 hover:bg-green-700">WhatsApp</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">Correo</Button>
                    <Button className="bg-pink-600 hover:bg-pink-700">Redes Sociales</Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-pink-50 p-8">
                <h2 className="text-2xl font-bold text-gray-900">Envíanos un mensaje</h2>
                <form className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <Input type="text" id="name" name="name" className="mt-1" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Correo electrónico
                    </label>
                    <Input type="email" id="email" name="email" className="mt-1" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Asunto
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      className="mt-1"
                      placeholder="Asunto de tu mensaje"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <Textarea id="message" name="message" rows={4} className="mt-1" placeholder="Tu mensaje" />
                  </div>
                  <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
