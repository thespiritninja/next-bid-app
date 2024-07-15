import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { database } from "@/db/database";
import { bids } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const bidsFetched = await database.query.bids.findMany();
  return (
    <main className="container mx-auto py-10 space-y-5">
      <h2 className="font-bold text-2xl">Listed Items</h2>
      <div className="grid grid-cols-4 gap-3 ">
        {bidsFetched?.map((bid) => (
          <div className="border p-8  rounded-xl" key={bid.id}>
            {bid.id}
          </div>
        ))}
      </div>
    </main>
  );
}
