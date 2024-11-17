import {IssueData, z} from "zod";
import {differenceInDays} from "date-fns";

export const SignInSchema = z.object(
    {
        email: z.string().email(),
        password: z.string(),
    }
)

export type SignInSchemaType = Zod.infer<typeof SignInSchema>


export const SignUpSchema = z.object(
    {
        username: z.string()
                   .min(5, {message: 'Username must be at least 5 characters'})
                   .max(20, {message: 'Username must be at most 20 characters'}),
        email: z.string().email({message: 'Email Required'}),
        name: z.string()
               .min(5, {message: 'Name must be at least 5 characters'})
               .max(20, {message: 'Name must be at most 20 characters'}),
        password: z.string()
                   .min(8, {message: "Password must be at least 8 characters long"})
                   .regex(/[A-Z]/, {message: "Password must contain at least one uppercase letter"})
                   .regex(/[a-z]/, {message: "Password must contain at least one lowercase letter"})
                   .regex(/[0-9]/, {message: "Password must contain at least one number"})
                   .regex(/[@$!%*?&]/, {message: "Password must contain at least one special character (@$!%*?&)"}),
        confirmPassword: z.string()
                          .min(8, {message: "Password must be at least 8 characters long"})
                          .regex(/[A-Z]/, {message: "Password must contain at least one uppercase letter"})
                          .regex(/[a-z]/, {message: "Password must contain at least one lowercase letter"})
                          .regex(/[0-9]/, {message: "Password must contain at least one number"})
                          .regex(
                              /[@$!%*?&]/, {message: "Password must contain at least one special character (@$!%*?&)"})
    }
).superRefine((arg, ctx) => {
    if (arg.password !== arg.confirmPassword) {
        ctx.addIssue(
            {
                path: ["confirmPassword"],
                message: "Password and Confirm Password must be the same",
            } as IssueData
        )
    }
})
export type SignUpSchemaType = Zod.infer<typeof SignUpSchema>

export const BookTableSchema = z.object(
    {
        person: z.string(),
        date: z.date().refine(arg => (
            differenceInDays(arg, new Date()) + 1
        ) > 0),
        time: z.string(),
    }
)

export type BookTableSchemaType = Zod.infer<typeof BookTableSchema>