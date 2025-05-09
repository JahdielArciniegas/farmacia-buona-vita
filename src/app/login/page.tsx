import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 ">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
