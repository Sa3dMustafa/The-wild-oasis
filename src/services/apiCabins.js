import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
    console.log("Deleting cabin with ID:", id); // Add this line for debugging
    const { error } = await supabase
    .from("cabins")
    .delete().eq("id", id);
    if (error) {
      console.error(error);
      throw new Error("Cabin could not be deleted");
    }
    return id;
  }
  