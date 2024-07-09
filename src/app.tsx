import { useState } from 'react'
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, XIcon, AtSign, Plus } from 'lucide-react'
export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
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

  return (
    <div className="bg-pattern flex h-screen w-full items-center justify-center bg-center bg-no-repeat">
      <div className="max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">Convide seus amigos e planeje suas viagens</p>
        </div>

        <div className="space-y-4">
          <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
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

          {isGuestInputOpen && (
            <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
              <button onClick={handleOpenGuestModal} type="button" className="flex flex-1 items-center gap-2">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="bg-transparent text-lg text-zinc-400">Quem você vai convidar ?</span>
              </button>

              <div className="flex items-center gap-4">
                <div className="h-6 w-px bg-zinc-800" />

                <button className="group flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400">
                  Confirmar viagem
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="shadow-shape w-full max-w-2xl space-y-5 rounded-xl bg-zinc-900 px-5 py-6">
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
                <div
                  key={email}
                  className="flex items-center justify-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
                >
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
      )}
    </div>
  )
}
