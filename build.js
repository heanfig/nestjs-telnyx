const { build } = require("esbuild");

build({
  entryPoints: ["./src/telnyx.module.ts"],
  outfile: "./dist/telnyx.module.js",
  bundle: true,
  platform: "node",
  format: "cjs",
  target: ["node14"],
  external: ["@nestjs/common"],
})
  .then(() => {
    console.log("Build succeeded");
  })
  .catch((error) => {
    console.error("Build failed:", error);
    process.exit(1);
  });
