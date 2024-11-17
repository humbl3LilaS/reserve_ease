"use client"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/pop-over";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";

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
                        "w-full justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon/>
                    {value ? format(value, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent  className={"w-[340px]"}>
                <Calendar
                    mode={"single"}
                    selected={value}
                    onSelect={onValueChange}
                    className="w-full rounded-md border"
                />
            </PopoverContent>
        </Popover>
    )
};

export default DatePicker;