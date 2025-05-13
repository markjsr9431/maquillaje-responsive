import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SocialButtons() {
  return (
    <div className="flex space-x-4">
      <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white">
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white">
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white">
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white">
        <Youtube className="h-5 w-5" />
        <span className="sr-only">YouTube</span>
      </Button>
    </div>
  )
}
