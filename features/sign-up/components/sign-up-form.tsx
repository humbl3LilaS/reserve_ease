"use client"

import {SubmitHandler, useForm} from "react-hook-form";
import {SignUpSchema, SignUpSchemaType} from "@/validation/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {singUp} from "@/features/sign-up/actions/sign-up-actions";
import {Loader2} from "lucide-react";


const SignUpForm = () => {

    const router = useRouter();
    const form = useForm<SignUpSchemaType>(
        {
            mode: "onChange",
            resolver: zodResolver(SignUpSchema),
            defaultValues: {
                email: "",
                name: "",
                username: "",
                password: "",
                confirmPassword: "",
            }
        }
    )

    const submitHandler: SubmitHandler<SignUpSchemaType> = async (value) => {
        const user = await singUp(value);
        if (user) {
            router.push("/");
        }
    }

    return (
        <div className="w-full max-w-[560px] bg-white p-8 lg:p-10 rounded-xl">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitHandler)}
                      className={"flex flex-col gap-y-4"}
                >

                    {/*Username  */}
                    <FormField
                        name="username"
                        control={form.control}
                        render={({field}) =>
                            <FormItem>
                                <FormLabel htmlFor={"username"}>
                                    Username
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} id={"username"}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }/>

                    {/*name  */}
                    <FormField
                        name="name"
                        control={form.control}
                        render={({field}) =>
                            <FormItem>
                                <FormLabel htmlFor={"name"}>
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} id={"name"}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }/>

                    {/*Email*/}
                    <FormField
                        name="email"
                        control={form.control}
                        render={({field}) =>
                            <FormItem>
                                <FormLabel htmlFor={"email"}>
                                    Email:
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} id={"email"}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }/>

                    {/*Password  */}
                    <FormField
                        name="password"
                        control={form.control}
                        render={({field}) =>
                            <FormItem>
                                <FormLabel htmlFor={"password"}>
                                    Password:
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type={"password"}
                                        id={"password"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }/>


                    {/*ConfirmPassword  */}
                    <FormField
                        name="confirmPassword"
                        control={form.control}
                        render={({field}) =>
                            <FormItem>
                                <FormLabel htmlFor={"confirmPassword"}>
                                    ConfirmPassword:
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type={"password"}
                                        id={"confirmPassword"}
                                        {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }/>

                    <Button
                        type="submit"
                        className={"w-full disabled:text-slate-300"}
                        disabled={form.formState.isSubmitting || !form.formState.isValid}

                    >
                        {
                            form.formState.isSubmitting
                            ? <>
                                <Loader2 className={"size-3 text-slate-300 animate-spin"}/>
                                <span>Submitting</span>
                            </>
                            : <span>Sign Up</span>
                        }
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default SignUpForm;