import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { Button } from './ui/Button'

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        {/* Links */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Felipe França</span>
            <span className="block truncate text-sm text-zinc-400">felipefl200@gmail.com</span>
          </div>
          <CircleDashed className="size-5 shrink-0 text-zinc-400" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Thays Salamone</span>
            <a href="#" className="block truncate text-sm text-zinc-400">
              thayssalamone@gmail.com
            </a>
          </div>
          <CircleCheck className="size-5 shrink-0 text-lime-400" />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        <span className="">Gerenciar convidados</span>
      </Button>
    </div>
  )
}
