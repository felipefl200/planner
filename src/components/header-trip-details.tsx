import { MapPin, Calendar, Settings2 } from 'lucide-react'
import { Button } from './ui/Button'

export function HeaderTripDetails() {
  return (
    <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Porto Alegre, Brasil</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">17 à 23 de agosto 2025</span>
        </div>

        <div className="h-6 w-px bg-zinc-800" />
        <Button variant='secondary'>
          Alterar local/Data
          <Settings2 className="size-5 transition-transform ease-in-out group-hover:scale-125" />
        </Button>
      </div>
    </div>
  )
}
