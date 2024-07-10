import { ArrowRight, UserRoundPlus } from 'lucide-react'

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  handleOpenGuestModal: () => void
  handleOpenConfirmModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  handleOpenGuestModal,
  handleOpenConfirmModal
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button onClick={handleOpenGuestModal} type="button" className="flex flex-1 items-center gap-2 text-left">
        <UserRoundPlus className="size-5 text-zinc-400" />

        {emailsToInvite.length > 0 ? (
          <span className="flex-1 bg-transparent text-lg text-zinc-100">
            {emailsToInvite.length} pessoa{emailsToInvite.length === 1 ? null : 's'} convidada
            {emailsToInvite.length === 1 ? null : 's'}
          </span>
        ) : (
          <span className="bg-transparent text-lg text-zinc-400">Quem você vai convidar ?</span>
        )}
      </button>

      <div className="flex items-center gap-4">
        <div className="h-6 w-px bg-zinc-800" />

        <button
          onClick={handleOpenConfirmModal}
          className="group flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
        >
          Confirmar viagem
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}
