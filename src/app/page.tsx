import { auth } from "@/auth";
import { SignIn } from "@/components/SignIn";
import { SignOut } from "@/components/SignOut";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/db/database";
import { bids } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const bidsFetched = await database.query.bids.findMany();
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> NextJS best practices</h1>
      {!session?.user ? <SignIn /> : <SignOut />}
      {session?.user && <h2>Welcome {session?.user?.name}</h2>}
      <form
        action={async (formData: FormData) => {
          "use server";
          const bidVal = parseInt(formData.get("bid") as string, 10);
          await database.insert(bids).values({ amount: bidVal });
          revalidatePath("/");
        }}
      >
        <Input name="bid" placeholder="Bids!" type="number" />
        <Button type="submit">Click to submit</Button>
      </form>
      {bidsFetched?.map((bid) => (
        <div key={bid.id}>{bid.id}</div>
      ))}
    </main>
  );
}
