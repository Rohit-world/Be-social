export async function imageUpload(file) {
   
    if (file == null){ return "https://images.pexels.com/photos/963278/pexels-photo-963278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "besocial");
    try {
      let res = await fetch("https://api.cloudinary.com/v1_1/dsdqorkme/image/upload", {
        method: "POST",
        body: formData,
      });
      let data = await res.json();
      return data.url;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
