"use client"
import DataSelector from "@/components/data-selector";
import {User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Form, FormField} from "@/components/ui/form";
import {SubmitHandler, useForm} from "react-hook-form";
import {BookTableSchema, BookTableSchemaType} from "@/validation/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import DatePicker from "@/components/date-picker";
import {PERSONS, TIMES} from "@/constants";
import {useRouter} from "next/navigation";




const BookTableForm = () => {

    const router = useRouter();
    const form = useForm<BookTableSchemaType>(
        {
            resolver: zodResolver(BookTableSchema),
            mode: "onChange",
            defaultValues: {
                date: new Date(),
                person: "1",
                time: "9 AM",
            }
        }
    );

    const onSubmit: SubmitHandler<BookTableSchemaType> = async (value) => {
        router.push(`/find-table/?person=${value.person}&date=${Date.parse(value.date.toISOString())}&time=${value.time}`);
    }


    return (
        <Form {...form}>
            <form
                className="relative pb-10 px-6"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="md:flex items-center justify-center gap-x-10">
                    <FormField name={"person"} control={form.control}
                               render={({field}) =>
                                   <DataSelector
                                       options={PERSONS}
                                       icon={<User/>}
                                       suffix={"Person"}
                                       placeholder={"Num of Person"}
                                       defaultValueIndex={0}
                                       onValueChange={field.onChange}
                                   />
                               }
                    />

                    <FormField name={"date"} control={form.control}
                               render={({field}) =>
                                   <DatePicker
                                       value={field.value}
                                       onValueChange={field.onChange}
                                   />
                               }
                    />

                    <FormField name={"time"} control={form.control}
                               render={({field}) =>
                                   <DataSelector
                                       options={TIMES}
                                       icon={<User/>}
                                       placeholder={"Ideal Time for reservation"}
                                       defaultValueIndex={0}
                                       onValueChange={field.onChange}
                                   />
                               }
                    />

                    <Button type={"submit"}>
                        Find a table
                    </Button></div>
            </form>
        </Form>
    );
};

export default BookTableForm;