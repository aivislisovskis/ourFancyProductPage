'use client'

import { Slider as SliderUI } from "./ui/slider"

interface SliderProps {
    emoji: string
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
            <div className="text-xl">{emoji}</div>
        </div>
    )
}