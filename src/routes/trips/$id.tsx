import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/trips/$id')({
  component: () => <TripById />
})

function TripById() {
  const { id } = Route.useParams()
  return <div>Hello {id}!</div>
}
