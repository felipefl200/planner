import { ComponentPropsWithoutRef } from 'react'
import { DayPicker as DayPickerOriginal, DayPickerDefaultProps } from 'react-day-picker'
import { ptBR } from 'date-fns/locale'

export const DayPicker = (props: ComponentPropsWithoutRef<typeof DayPickerOriginal>) => (
  <DayPickerOriginal classNames={classNames} {...props} locale={ptBR} />
)

const classNames: DayPickerDefaultProps['classNames'] = {
  vhidden: 'sr-only',
  caption: 'flex justify-center items-center h-10',
  root: 'text-zinc-300',
  months: 'flex gap-4 relative px-4',
  caption_label: 'text-xl px-4',
  nav_button:
    'inline-flex justify-center items-center absolute top-0 w-10 h-10 rounded-full text-gray-600 hover:bg-zinc-300',
  nav_button_next: 'right-0',
  nav_button_previous: 'left-0',
  table: 'border-collapse border-spacing-0',
  head_cell: 'w-10 h-10 uppercase align-middle text-center',
  cell: 'w-10 h-10 align-middle text-center border-0 px-0',
  day: 'rounded-full w-11 h-11 transition-colors hover:bg-lime-700 focus:outline-none focus-visible:ring focus-visible:ring-lime-300 focus-visible:ring-opacity-50 active:bg-lime-600 active:text-white',
  day_selected: 'text-white bg-lime-500 hover:bg-lime-500',
  day_today: 'font-bold',
  day_disabled: 'opacity-25 hover:bg-white active:bg-white active:text-gray-800',
  day_outside: 'enabled:opacity-50',
  day_range_middle: 'rounded-none',
  day_range_end: 'rounded-l-none rounded-r-full',
  day_range_start: 'rounded-r-none rounded-l-full',
  day_hidden: 'hidden'
}
