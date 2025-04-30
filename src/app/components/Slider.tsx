'use client'

import { Slider as SliderUI } from "./ui/slider"
import Image from "next/image"

interface SliderProps {
    emoji: { icon: string, alt: string }
    i: number
    min?: number
    max?: number
    step?: number
    defaultValue?: number
    value?: number
    onValueChange?: (value: number[]) => void
}

export const Slider = ({
                           emoji,
                           i,
                           min = 0,
                           max = 100,
                           step = 1,
                           defaultValue = 50,
                           value,
                           onValueChange
                       }: SliderProps) => {
    return (
        <div key={i} className="flex flex-col items-center gap-4 w-full max-w-[200px]">
            <SliderUI
                defaultValue={[defaultValue]}
                value={value ? [value] : undefined}
                min={min}
                max={max}
                step={step}
                onValueChange={onValueChange}
                orientation="vertical"
                className="h-[100px]"
            />
            <div className="text-xl">
                <Image
                    src={emoji.icon}
                    alt={emoji.alt}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
}