import { Link2, Plus } from 'lucide-react'
import { Button } from './ui/Button'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">
        {/* Links */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva AirBnB</span>
            <a href="#" className="block truncate text-xs text-zinc-400 transition-colors hover:text-zinc-200">
              https://reservaairbnb.com.br/rooms/123dqwdwqdqwd123123123456
            </a>
          </div>
          <Link2 className="size-5 shrink-0 text-zinc-400" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva AirBnB</span>
            <a href="#" className="block truncate text-xs text-zinc-400 transition-colors hover:text-zinc-200">
              https://reservaairbnb.com.br/rooms/123dqwdwqdqwd123123123456
            </a>
          </div>
          <Link2 className="size-5 shrink-0 text-zinc-400" />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <Plus className="size-5 opacity-0 transition-all ease-in-out group-hover:scale-125 group-hover:opacity-100" />
        <span className="-translate-x-4 transition-transform delay-100 group-hover:-translate-x-0">
          Cadastrar novo link
        </span>
      </Button>
    </div>
  )
}
