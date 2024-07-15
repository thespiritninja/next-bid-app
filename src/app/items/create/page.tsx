import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction } from "./actions";

export default async function CreatePage() {
  return (
    <main className="container mx-auto py-10 space-y-5">
      <h1 className="text-2xl font-semibold"> Start Bidding</h1>
      <form
        className="flex flex-col border p-8 rounded-xl space-y-5 max-w-lg"
        action={createItemAction}
      >
        <Input
          className="max-w-lg"
          name="bid"
          placeholder="Bids!"
          type="number"
        />
        <Button className="self-end" type="submit">
          Click to submit
        </Button>
      </form>
    </main>
  );
}
