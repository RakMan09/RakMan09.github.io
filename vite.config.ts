import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const githubRepository = (globalThis as { process?: { env?: Record<string, string | undefined> } })
  .process?.env?.GITHUB_REPOSITORY;
const repoName = githubRepository?.split("/")[1];
const isUserPagesRepo = !!repoName && repoName.endsWith(".github.io");
const base = !repoName ? "/" : isUserPagesRepo ? "/" : `/${repoName}/`;

export default defineConfig({
  plugins: [react()],
  base,
});
