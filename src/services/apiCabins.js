// import toast from "react-hot-toast";
import supabase ,{ supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  // toast.success("Cabins loaded successfully");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
    console.log("Deleting cabin with ID:", id);
    const { error } = await supabase
    .from("cabins")
    .delete().eq("id", id);
    if (error) {
      console.error(error);
      throw new Error("Cabin could not be deleted");
    }
    return id;
  }
  

  export async function createCabin(newCabin) {
    // Generate a unique image name
    const imagename = `${Math.random()}-${newCabin.image.name.replace("/", "")}`;
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imagename}`;
  
    // Insert cabin data into the database
    const { data, error } = await supabase
      .from("cabins")
      .insert({ ...newCabin, image: imagePath })
      .select();
  
    if (error) {
      console.error("Error inserting cabin:", error);
      throw new Error("Cabin could not be created");
    }
  
    // Upload image to storage
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imagename, newCabin.image);
  
    if (storageError) {
      // Rollback cabin creation if image upload fails
      await supabase.from("cabins").delete().eq("id", data[0].id);
      console.error("Error uploading image:", storageError);
      throw new Error("Cabin image could not be uploaded and cabin creation rolled back");
    }
  
    return data[0];
  }
  
