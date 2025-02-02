import UserButton from "@/components/user-button";
import { MainNav } from "./main-nav";

export default function Header() {
  return (
    <header className="z-10 sticky flex justify-center">
      <div className="mx-auto flex h-[70px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <MainNav />
        <UserButton />
      </div>
    </header>
  );
}
