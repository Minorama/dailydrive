import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
    {
        variants: {
            variant: {
                default: 'bg-green-400 text-white hover:bg-green-400/80',
                secondary:
                    'bg-tundora text-white hover:bg-tundora/80 aria-expanded:bg-tundora aria-expanded:bg-tundora/80',
                ghost: 'text-grey-300 hover:bg-grey-700/80 hover:text-white aria-expanded:bg-grey-700/80 aria-expanded:text-white',
                negative: 'bg-grey-800 text-white hover:bg-grey-800/80',
                destructive:
                    'text-grey-300 hover:bg-red-700/70 hover:text-white focus-visible:border-red-700/40 focus-visible:ring-red-700/20 dark:bg-red-700/20',
            },
            size: {
                default:
                    'h-9 gap-1.5 px-4 py-2 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
                xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: 'h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5',
                lg: 'h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
                icon: 'size-10',
                'icon-xs':
                    "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
                'icon-sm':
                    'size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md',
                'icon-md': 'size-15',
                'icon-lg': 'size-20',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

function Button({
    className,
    variant = 'default',
    size = 'default',
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot.Root : 'button';

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
