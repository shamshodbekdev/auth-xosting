import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ildiz papkani aniq belgilaymiz (tashqaridagi lock fayllar e'tiborga olinmasin)
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
