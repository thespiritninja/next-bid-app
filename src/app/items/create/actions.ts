"use server";
import { database } from "@/db/database";
import { bids } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createItemAction(formData: FormData) {
  const bidVal = parseInt(formData.get("bid") as string, 10);
  await database.insert(bids).values({ amount: bidVal });
  revalidatePath("/");
}
