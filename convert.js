import sharp from "sharp";
import fs from "fs";

const inputFolder = "src/assets/images";
const outputFolder = "src/assets/optimized_images";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
  const inputFile = `${inputFolder}/${file}`;
  const outputFile = `${outputFolder}/${file.split(".")[0]}.avif`;

  sharp(inputFile)
    .toFormat("avif", { quality: 50 }) // Adjust quality (higher = better but larger file)
    .toFile(outputFile)
    .then(() => console.log(`Converted: ${file} -> ${outputFile}`))
    .catch(err => console.error(`Error converting ${file}:`, err));
});
