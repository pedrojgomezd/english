import { createClientServer } from "@/utils/supabase/server";
import OpenAI from "openai";

export async function POST(request) {
  const { phrase_id } = await request.json();

  const supabase = createClientServer();

  const { data: phrase } = await supabase
    .from("phrases")
    .select("*")
    .eq("uid", phrase_id)
    .limit(1);

  const audioBlod = await textToSpechOpenAI(phrase[0].en);

  const updaload = await supabase.storage
    .from("audios")
    .upload(`audio-${phrase_id}.mp3`, await audioBlod.blob());

  return new Response(audioBlod.body, {
    headers: {
      "Content-Type": audioBlod.type,
    },
  });
}

const textToSpechOpenAI = async (text) => {
  const openai = new OpenAI({ apiKey: process.env.API_OPENIA });

  const response = await openai.audio.speech.create({
    model: "tts-1",
    voice: "shimmer",
    input: text,
  });

  return response;
};
