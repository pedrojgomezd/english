import { createClient } from "@/utils/supabase/client";
import { Card } from "flowbite-react";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  const { data: categories } = await supabase.from("categories").select();

  return (
    <main className="min-h-screen p-4">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Link href={`/category/${category.id}`}>
            <Card key={category.id}>
              <h3 className="font-bold ">{category.name_en}</h3>
              <span className="font-normal">{category.name_es}</span>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
