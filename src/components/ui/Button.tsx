import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

const buttonVariants = tv({
  base: 'group flex items-center gap-2 text-nowrap rounded-lg px-5 transition-colors',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 justify-center hover:bg-lime-400 overflow-hidden',
      primaryFull: 'bg-lime-300 text-lime-950 justify-center w-full hover:bg-lime-400 overflow-hidden',
      secondary: 'bg-zinc-800 text-zinc-200 justify-center hover:bg-zinc-700',
      tertiary: 'bg-zinc-900 hover:bg-zinc-800',
      ghost: 'bg-transparent hover:bg-zinc-800',
      closeIcon: ''
    },
    size: {
      default: 'py-2',
      full: 'w-full h-11',
      icon: 'p-0'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default'
  }
})

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size })} {...props}>
      {children}
    </button>
  )
}
