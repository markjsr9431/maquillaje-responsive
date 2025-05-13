import Image from "next/image"

interface ProductoImagenProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

function ProductoImagen({
  src,
  alt,
  width = 600,
  height = 600,
  priority = false,
  className = "rounded-lg shadow-xl",
}: ProductoImagenProps) {
  return (
    <div className="mt-8 lg:mt-0 w-full max-w-md">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    </div>
  )
}

export default ProductoImagen
