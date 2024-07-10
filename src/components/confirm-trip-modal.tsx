import { Mail, Send, User, XIcon } from 'lucide-react'

interface ConfirmTripModalProps {
  handleCloseConfirmModal: () => void
  setIsConfirmModalOpen: (isConfirmModalOpen: boolean) => void
  createTrip: (event: React.FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({ handleCloseConfirmModal, createTrip }: ConfirmTripModalProps) {
  return (
    <>
      <div onClick={handleCloseConfirmModal} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="absolute z-10 flex items-center justify-center">
        <div className="w-full min-w-[42rem] max-w-2xl space-y-5 rounded-xl bg-zinc-900 px-5 py-6 shadow-shape">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Confirmar criação de viagemm</h2>
              <button onClick={handleCloseConfirmModal}>
                <XIcon className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Para concluir a criação da viagem para{' '}
              <span className="font-semibold text-zinc-100">Porto Alegre, Brasil </span> nas datas de{' '}
              <span className="font-semibold text-zinc-100">15/02/2025 à 18/02/2025</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2"></div>

          <form onSubmit={createTrip} className="space-y-3">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
              <User className="size-5 text-zinc-400" />
              <input
                required
                type="text"
                placeholder="Seu nome completo"
                name="name"
                id="name"
                className="h-14 flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
              <Mail className="size-5 text-zinc-400" />
              <input
                required
                type="email"
                placeholder="Informe seu email"
                name="email"
                id="email"
                className="h-14 flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>
            <button
              onClick={() => createTrip}
              type="submit"
              className="group flex w-full items-center justify-center gap-1 overflow-hidden rounded-lg bg-lime-300 px-5 py-3 font-medium text-lime-950 transition-colors hover:bg-lime-400"
            >
              Convidar
              <Send className="size-5 transition-transform duration-500 ease-in-out group-hover:-translate-y-10 group-hover:translate-x-20 group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
