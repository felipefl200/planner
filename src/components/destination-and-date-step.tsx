import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean
  handleGuestInputOpen: () => void
}

export function DestinationAndDateStep({ isGuestInputOpen, handleGuestInputOpen }: DestinationAndDateStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai ?"
          name=""
          id=""
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <input
            disabled={isGuestInputOpen}
            type="text"
            placeholder="Quando ?"
            name=""
            id=""
            className="w-40 bg-transparent text-lg placeholder-zinc-400 outline-none"
          />
        </div>

        <div className="h-6 w-px bg-zinc-800" />

        {isGuestInputOpen ? (
          <button className="group flex items-center gap-2 text-nowrap rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
            Alterar local/Data
            <Settings2 className="size-5 transition-transform ease-in-out group-hover:scale-125" />
          </button>
        ) : (
          <button
            onClick={handleGuestInputOpen}
            className="group flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
          >
            Continuar
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  )
}
