import { Calendar, Tag, XIcon } from 'lucide-react'
import { Button } from './ui/Button'

interface CreateActivityModalProps {
  handleCreateActivityModalClose: () => void
  setIsCreateActivityModalOpen: (isCreateActivityModalOpen: boolean) => void
}

export function CreateActivityModal({
  handleCreateActivityModalClose,
  setIsCreateActivityModalOpen
}: CreateActivityModalProps) {
  return (
    <>
      <div
        onClick={() => setIsCreateActivityModalOpen(false)}
        className="fixed inset-0 z-10 bg-black/60 backdrop-blur-sm"
      />
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full min-w-[42rem] max-w-2xl space-y-5 rounded-xl bg-zinc-900 px-5 py-6 shadow-shape">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cadastrar nova atividade</h2>
              <Button variant="closeIcon" onClick={handleCreateActivityModalClose}>
                <XIcon className="size-5 text-zinc-400 transition-colors group-hover:text-zinc-300" />
              </Button>
            </div>
            <p className="text-sm text-zinc-400">Todos os convidados podem vizualizar as atividade(s)</p>
          </div>
          <div className="flex flex-wrap gap-2"></div>

          <form className="space-y-3">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
              <Tag className="size-5 text-zinc-400" />
              <input
                required
                type="text"
                placeholder="Qual a atividade?"
                name="title"
                id="title"
                className="h-14 flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
                <Calendar className="size-5 text-zinc-400" />
                <input
                  required
                  type="datetime-local"
                  placeholder="Data e horário da atividade"
                  name="occurs_at"
                  id="occurs_at"
                  className="h-14 flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
                />
              </div>
            </div>
            <Button variant="primary" size="full" type="submit">
              Salvar atividade
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
