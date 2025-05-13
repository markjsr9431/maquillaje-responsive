"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSliderProps {
  images: {
    src: string
    alt: string
  }[]
  autoSlideInterval?: number
}

export default function ImageSlider({ images, autoSlideInterval = 5000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!autoSlideInterval) return

    const interval = setInterval(goToNext, autoSlideInterval)
    return () => clearInterval(interval)
  }, [autoSlideInterval, goToNext])

  // Si no hay imágenes, no renderizar nada
  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Controles de navegación */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
