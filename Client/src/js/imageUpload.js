export async function imageUpload(file) {
  
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
