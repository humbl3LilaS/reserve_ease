"use client"
import {useRouter} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";
import {SignInSchema, SignInSchemaType} from "@/validation/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {signInAction} from "@/features/sign-in/actions/sign-in-action";

const SignInForm = () => {
    const router = useRouter();
    const form = useForm<SignInSchemaType>(
        {
            mode: "onChange",
            resolver: zodResolver(SignInSchema),
            defaultValues: {
                email: "",
                password: "",
            }
        }
    )

    const submitHandler: SubmitHandler<SignInSchemaType> = async (value) => {
        const user = await signInAction(value);
        if(user) {
            router.push("/");
        }
    }

    return (
        <div className="w-full max-w-[560px] bg-white p-8 lg:p-10 rounded-xl">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitHandler)}
                      className={"flex flex-col gap-y-4"}
                >

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

export default SignInForm;