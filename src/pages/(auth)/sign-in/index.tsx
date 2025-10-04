import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormError } from "@/components/global/form-error";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { auth } from "@/lib/auth-client";
import { toast } from "sonner";
import { Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router";

const signInSchema = z.object({
	email: z.email("Email inválido"),
	password: z.string(),
});

type SignInFormData = z.infer<typeof signInSchema>;

export function SignInPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormData>({
		resolver: zodResolver(signInSchema),
	});

	const navigate = useNavigate();

	function onSubmit(data: SignInFormData) {
		auth.signIn.email(
			{
				email: data.email,
				password: data.password,
			},
			{
				onError: (error) => {
					toast.error(error.error.message);
				},
				onSuccess: ({ data }) => {
					toast.success(`Seja bem vindo(a) ${data.user.name ?? ""}!`);
					navigate("/");
				},
			},
		);
	}

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="w-full max-w-md p-8">
				<h1 className="text-2xl font-bold mb-10">Entre na sua conta</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
					<div className="grid gap-3">
						<Label htmlFor="email">Email</Label>

						<Input
							className={cn(errors.email ? "border-destructive" : "")}
							icon={Mail}
							id="email"
							{...register("email")}
						/>
						{errors.email && <FormError message={errors.email.message} />}
					</div>

					<div className="grid gap-3">
						<Label htmlFor="password">Senha</Label>
						<Input
							className={cn(errors.password ? "border-destructive" : "")}
							icon={Lock}
							id="password"
							type="password"
							{...register("password")}
						/>
						{errors.password && <FormError message={errors.password.message} />}
					</div>

					<Button type="submit" className="mt-2">
						Sign In
					</Button>
				</form>
			</div>
		</div>
	);
}
