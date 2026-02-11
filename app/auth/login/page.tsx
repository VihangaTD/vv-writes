"use client";
import { loginSchema } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export default function LoginPage() {

    const [isPending, startTransition] = useTransition();

    const form = useForm({
            resolver:zodResolver(loginSchema),
            defaultValues:{
                email:"",
                password:"",
            }
        })
    
        const router = useRouter();

        function onSubmit(data : z.infer<typeof loginSchema>){

                startTransition(async()=>{
                    await authClient.signIn.email({
                    email: data.email,
                    password:data.password,
                    fetchOptions: {
                        onSuccess:()=>{
                        toast.success("Logged in successfully");
                        router.push("/");
                        },
                        onError:(error)=>{
                        toast.error(error.error.message);
                        }
                    }
                })
                })
            }
  return (
    <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Log In</CardTitle>
                <CardDescription>Login to get started right away</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup className="gap-4">
                        <Controller name="email" control={form.control} render={({field, fieldState}) =>(
                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <Input aria-invalid={fieldState.invalid} placeholder="John@email.com" type="email" {...field}/>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}/>
                        <Controller name="password" control={form.control} render={({field, fieldState}) =>(
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input aria-invalid={fieldState.invalid} placeholder="******" type="password" {...field}/>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}/>
                        <Button disabled={isPending}>{isPending ? (
                            <>
                            <Loader2 className="size-4 animate-spin"/>
                            <span>Logging in...</span>
                            </>
                        ):(
                            <span>Log In</span>
                        )}</Button>
                    </FieldGroup>
                </form>
                <p className="text-sm text-center mt-4 text-muted-foreground">Don't you have an account? <Link href="/auth/signup" className="hover:text-white">Sign up</Link></p>
            </CardContent>
        </Card>
  )
}
