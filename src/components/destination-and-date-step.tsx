import { ArrowRight, Calendar, MapPin, Settings2, XIcon } from 'lucide-react'
import { Button } from './ui/Button'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { DayPicker } from './day-picker-custom'
import { format } from 'date-fns'

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean
  handleGuestInputOpen: () => void
}

export function DestinationAndDateStep({ isGuestInputOpen, handleGuestInputOpen }: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [eventsStartAndEndDate, setEventsStartAndEndDate] = useState<DateRange | undefined>()

  const displayedDate =
    eventsStartAndEndDate && eventsStartAndEndDate.from && eventsStartAndEndDate.to
      ? format(eventsStartAndEndDate.from, "d 'de ' LLL")
          .concat(' até ')
          .concat(format(eventsStartAndEndDate.to, "d 'de ' LLL"))
      : 'Quando ?'

  function handleOpenDatePicker() {
    setIsDatePickerOpen(true)
  }

  function handleCloseDatePicker() {
    setIsDatePickerOpen(false)
  }

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
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
        <button
          onClick={handleOpenDatePicker}
          disabled={isGuestInputOpen}
          className="flex items-center gap-2 text-left"
        >
          <Calendar className="size-5 text-zinc-400" />
          <span className="flex-1 bg-transparent text-lg text-zinc-400 outline-none text-nowrap">{displayedDate}</span>
        </button>
        {isDatePickerOpen && (
          <>
            <div onClick={handleCloseDatePicker} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
            <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="space-y-8 rounded-xl bg-zinc-900 px-5 py-6 shadow-shape">
                <div className="space-y-2 p-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Selecione a data</h2>
                    <Button onClick={handleCloseDatePicker} variant="closeIcon" size="icon">
                      <XIcon className="size-5 text-zinc-400 transition-colors group-hover:text-zinc-300" />
                    </Button>
                  </div>
                </div>

                <DayPicker mode="range" selected={eventsStartAndEndDate} onSelect={setEventsStartAndEndDate} />
              </div>
            </div>
          </>
        )}

        <div className="h-6 w-px bg-zinc-800" />

        {isGuestInputOpen ? (
          <Button variant="secondary">
            Alterar local/Data
            <Settings2 className="size-5 transition-transform ease-in-out group-hover:scale-125" />
          </Button>
        ) : (
          <Button onClick={handleGuestInputOpen} variant="primary">
            Continuar
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </div>
    </div>
  )
}
