import {ReactNode} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";


type DataSelectorProps = {
    options: string[];
    icon?: ReactNode
    suffix?: string
    placeholder: string;
    defaultValueIndex?: number;
    onValueChange: (value: string) => void;
}

const DataSelector = (
    {
        options,
        icon,
        suffix,
        placeholder,
        defaultValueIndex,
        onValueChange
    }: DataSelectorProps
) => {
    return (
        <Select onValueChange={onValueChange} defaultValue={defaultValueIndex !== -1 ? options[defaultValueIndex!] : undefined}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder}/>
            </SelectTrigger>
            <SelectContent>
                {options.map((option) =>
                                 <SelectItem
                                     value={option}
                                     key={option}
                                 >
                                     <span className={"flex items-center gap-x-2"}>
                                         <span>
                                             {icon}
                                        </span>
                                        <span>
                                             {suffix ? `${option}  ${suffix}` : option}
                                        </span>
                                     </span>
                                 </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
};

export default DataSelector;