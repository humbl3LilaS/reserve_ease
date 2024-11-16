"use client"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/pop-over";
import {Calendar} from "@/components/ui/calendar";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";

type DatePickerProps = {
    value: Date;
    onValueChange: (date: Date | undefined) => void;
}

const DatePicker = ({value, onValueChange}: DatePickerProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon/>
                    {value ? format(value, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={"w-auto"}>
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onValueChange}
                />
            </PopoverContent>
        </Popover>
    )
};

export default DatePicker;