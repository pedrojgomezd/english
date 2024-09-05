import { createClient } from "@/utils/supabase/client";
import { PhrasesComponent } from "./components/phrase";

export default async function CategoryPage({ params }) {
  const supabe = createClient();

  const { data: phrases } = await supabe
    .from("phrases")
    .select("*")
    .eq("category_id", params.id);

  return <PhrasesComponent phrases={phrases} />;
}
