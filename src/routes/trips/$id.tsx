import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateActivityModal } from '../../components/create-activity-modal'
import { ImportantLinks } from '../../components/important-links'
import { Guests } from '../../components/guests'
import { Activities } from '../../components/activities'
import { HeaderTripDetails } from '../../components/header-trip-details'
import { Button } from '../../components/ui/Button'

export const Route = createFileRoute('/trips/$id')({
  component: () => <TripById />
})

function TripById() {
  const { id } = Route.useParams()
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function handleCreateActivityModalOpen() {
    setIsCreateActivityModalOpen(true)
  }

  function handleCreateActivityModalClose() {
    setIsCreateActivityModalOpen(false)
  }
  return (
    <>
      {/* Modal de criação de atividade */}
      {isCreateActivityModalOpen && (
        <CreateActivityModal
          handleCreateActivityModalClose={handleCreateActivityModalClose}
          setIsCreateActivityModalOpen={setIsCreateActivityModalOpen}
        />
      )}
      <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        {/* Header */}
        <HeaderTripDetails />

        <main className="flex gap-16 px-4">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Atividades</h2>
              <Button
                onClick={handleCreateActivityModalOpen}
                className="group flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
              >
                <Plus className="size-5 transition-transform duration-300 group-hover:rotate-180" />
                Cadastrar atividade
              </Button>
            </div>
            <div className="space-y-8">
              <Activities />
            </div>
          </div>

          {/* SideBar */}
          <div className="w-80 space-y-6">
            {/* Links importantes */}
            <ImportantLinks />
            <div className="h-px w-full bg-zinc-800" />
            {/* Convidados */}
            <Guests />
          </div>
        </main>
      </div>
    </>
  )
}
