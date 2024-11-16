"use client"
import DataSelector from "@/components/data-selector";
import {User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Form, FormField} from "@/components/ui/form";
import {SubmitHandler, useForm} from "react-hook-form";
import {BookTableSchema, BookTableSchemaType} from "@/validation/schema";
import {zodResolver} from "@hookform/resolvers/zod";

const PERSONS = ["1", "2", "3", "4", "5"]

const BookTableForm = () => {

    const form = useForm<BookTableSchemaType>(
        {
            resolver: zodResolver(BookTableSchema),
            mode: "onChange",
            defaultValues: {
                date: new Date(),
                person: undefined,
                time: "",
            }
        }
    );

    const onSubmit: SubmitHandler<BookTableSchemaType> = async (value) => {
        console.log(value)
    }

    console.log(form.getFieldState("person"))

    return (
        <Form {...form}>
            <form
                className="pb-10 px-6"
                onSubmit={form.handleSubmit(onSubmit)}
            >

                <FormField name={"person"} control={form.control}
                           render={({field}) =>
                               <DataSelector
                                   options={PERSONS}
                                   icon={<User/>}
                                   suffix={"Person"}
                                   placeholder={"Num of Person"}
                                   defaultValueIndex={1}
                                   onValueChange={field.onChange}
                               />
                           }
                />

                <Button type={"submit"}>
                    Find a table
                </Button>
            </form>
        </Form>
    );
};

export default BookTableForm;