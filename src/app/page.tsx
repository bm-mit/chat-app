import LoginForm from "@/components/LoginForm";

import { montserrat } from "@/styles/fonts";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center
                 min-h-screen bg-gradient-to-r from-[#0f2027] to-[#203a43]"
    >
      <div>
        <h1
          className={`${montserrat.className} text-4xl font-bold text-center hover:text-slate-300 transition-all`}
        >
          Socket Chat
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
