import imagemin from "imagemin";
import imageminWEBP from "imagemin-webp";

const files = await imagemin(["sources/*.{jpg,png,jpeg}"], {
  destination: "build",
  plugins: [
    imageminWEBP({
      metadata: ["all"],
    }),
  ],
});

console.log(files);
