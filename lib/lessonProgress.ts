import { createClient } from "@/lib/supabase";

export async function loadProgress(courseSlug: string): Promise<number[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("lesson_progress")
    .select("lesson_index")
    .eq("course_slug", courseSlug);
  return data ? data.map((r) => r.lesson_index) : [];
}

export async function saveLesson(courseSlug: string, lessonIndex: number): Promise<void> {
  const supabase = createClient();
  await supabase
    .from("lesson_progress")
    .upsert({ course_slug: courseSlug, lesson_index: lessonIndex }, { onConflict: "user_id,course_slug,lesson_index" });
}
