import { type VariantProps, cva } from 'cva'
import type * as React from 'react'

export function Button(props: Button.Props) {
  const { className, size, variant, asChild = false, ...rest } = props
  return (
    <button
      className={Button.className({ className, size, variant })}
      {...rest}
    />
  )
}

export namespace Button {
  export const displayName = 'Button'

  export interface Props
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof className> {
    asChild?: boolean
  }

  export const className = cva(
    'inline-flex items-center justify-center rounded-default whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default:
            'text-primary bg-surface hover:not-active:bg-surfaceHover text-surface border border-surface',
          invert:
            'text-invert bg-invert hover:not-active:bg-invertHover text-invert',
          accent: 'text-white bg-accent hover:not-active:bg-accentHover',
          destructive:
            'text-destructive bg-destructive hover:not-active:bg-destructiveHover',
          success: 'text-white bg-success hover:not-active:bg-successHover',
          warning: 'text-white bg-warning hover:not-active:bg-warningHover',
        },
        size: {
          default: 'h-button px-5 text-[15px]',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  )
}
