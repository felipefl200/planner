import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { InviteGuestsModal } from '../../components/invite-guests-modal'
import { ConfirmTripModal } from '../../components/confirm-trip-modal'
import { DestinationAndDateStep } from '../../components/destination-and-date-step'
import { InviteGuestsStep } from '../../components/invite-guests-step'

export const Route = createFileRoute('/create-trip/')({
  component: () => <Index />
})

export function Index() {
  const navigate = useNavigate()
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
    'felipefl200@gmail.com',
    'felipefl200@hotmail.com',
    'felipefl200@ibest.com'
  ])

  function handleOpenGuestModal() {
    setIsGuestModalOpen(true)
  }

  function handleGuestInputOpen() {
    setIsGuestInputOpen(true)
  }

  function handleCloseGuestModal() {
    setIsGuestModalOpen(false)
  }

  function createTrip(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate({ to: '/trips/$id', params: { id: '1236' } })
  }

  function handleAddEmailToInvite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget).get('email')?.toString()
    if (!data) return
    if (emailsToInvite.includes(data)) return

    setEmailsToInvite([...emailsToInvite, data])
    event.currentTarget.reset()
  }

  function handleRemoveEmailToInvite(emailToRemove: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== emailToRemove))
  }

  function handleCloseConfirmModal() {
    setIsConfirmModalOpen(false)
  }

  function handleOpenConfirmModal() {
    setIsConfirmModalOpen(true)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">Convide seus amigos e planeje suas viagens</p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep handleGuestInputOpen={handleGuestInputOpen} isGuestInputOpen={isGuestInputOpen} />

          {isGuestInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              handleOpenGuestModal={handleOpenGuestModal}
              handleOpenConfirmModal={handleOpenConfirmModal}
            />
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com os{' '}
          <a href="#" className="text-zinc-300 underline">
            termos de uso do site
          </a>{' '}
          e com a{' '}
          <a href="#" className="text-zinc-300 underline">
            política de privacidade
          </a>
          .
        </p>
      </div>

      {/* Modal */}
      {isGuestModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          handleAddEmailToInvite={handleAddEmailToInvite}
          handleRemoveEmailToInvite={handleRemoveEmailToInvite}
          handleCloseGuestModal={handleCloseGuestModal}
        />
      )}

      {/* Confirm Modal */}
      {isConfirmModalOpen && (
        <ConfirmTripModal
          handleCloseConfirmModal={handleCloseConfirmModal}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          createTrip={createTrip}
        />
      )}
    </div>
  )
}
