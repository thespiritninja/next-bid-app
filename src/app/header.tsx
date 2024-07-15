import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@/components/SignIn";
import { SignOut } from "@/components/SignOut";

export async function Header() {
  const session = await auth();
  return (
    <div className="bg-slate-600 py-2">
      <div className="container flex justify-between">
        <div className="flex items-center gap-6">
          <div className="">
            <Link href="/" className="hover:underline">
              <Image src="/next.svg" width="50" height="50" alt="logo" />
              Home
            </Link>
          </div>
          <div>
            <Link href="/items/create" className="hover:underline">
              Create
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          {session?.user && <h2>Welcome {session?.user?.name}</h2>}
        </div>
        <div>{!session?.user ? <SignIn /> : <SignOut />}</div>
      </div>
    </div>
  );
}
