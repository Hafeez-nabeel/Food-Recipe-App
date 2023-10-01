import { defineConfig, loadEnv } from "vite";
// import vitePluginEnvCompatible from "vite-plugin-env-compatible";
// import replace from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     // vitePluginEnvCompatible(),
//     react(),
//     replace({
//       "process.env": JSON.stringify(process.env),
//     }),
//   ],
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_APIKEY": JSON.stringify(env.REACT_APP_APIKEY),
    },
    plugins: [react()],
  };
});
