import { createLazyFileRoute } from '@tanstack/react-router'
import { Index } from './create-trip/index'

export const Route = createLazyFileRoute('/')({
  component: () => <Index />
})

