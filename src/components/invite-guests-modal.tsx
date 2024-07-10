import { AtSign, Plus, XIcon } from 'lucide-react'

interface InviteGuestsModalProps {
  handleCloseGuestModal: () => void
  handleAddEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void
  handleRemoveEmailToInvite: (emailToRemove: string) => void
  emailsToInvite: string[]
}

export function InviteGuestsModal({
  handleCloseGuestModal,
  handleAddEmailToInvite,
  handleRemoveEmailToInvite,
  emailsToInvite
}: InviteGuestsModalProps) {
  return (
    <>
      <div onClick={handleCloseGuestModal} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="absolute z-10 flex min-w-[42rem] max-w-2xl items-center justify-center">
        <div className="w-full space-y-5 rounded-xl bg-zinc-900 px-5 py-6 shadow-shape">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Selecionar convidados</h2>
              <button onClick={handleCloseGuestModal}>
                <XIcon className="size-5 text-zinc-400" />
              </button>
            </div>
            <p className="text-sm text-zinc-400">
              Os convidados serão notificados por email para confirmar a participação na viagem.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Emails to invite */}
            {emailsToInvite.map((email) => (
              <div key={email} className="flex items-center justify-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
                <span className="text-zinc-300">{email}</span>
                <button onClick={() => handleRemoveEmailToInvite(email)} type="button">
                  <XIcon className="size-5 text-zinc-400" />
                </button>
              </div>
            ))}
          </div>
          <div className="h-px w-full bg-zinc-800" />
          <form
            onSubmit={handleAddEmailToInvite}
            className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
          >
            <div className="flex flex-1 items-center gap-2 px-2">
              <AtSign className="size-5 text-zinc-400" />
              <input
                required
                type="email"
                placeholder="Digite o email do convidado"
                name="email"
                id="email"
                className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
            >
              Convidar
              <Plus className="ease size-5 transition-transform group-hover:rotate-180" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
