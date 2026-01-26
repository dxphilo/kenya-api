import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	build: {
		outDir: "dist", // Output folder
		lib: {
			entry: path.resolve(__dirname, "src/server.ts"), // Your main server entry
			formats: ["es"], // Output as ESM
		},
		target: "node20", // Target Node v20
		rollupOptions: {
			external: [
				// Node built-ins to exclude from bundle
				"fs",
				"path",
				"http",
				"https",
				"os",
				"url",
				"crypto",
			],
			output: {
				entryFileNames: "[name].js", // Keep output filenames predictable
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // Optional, use @/ for src
		},
		extensions: [".ts", ".js", ".json"], // Resolve these without specifying extensions
	},
});
