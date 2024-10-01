import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `http://localhost:4000/graphql`, // backend url
  documents: ["src/graphql/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      // preset: "client",
      plugins: ["typescript", "typescript-operations"],
      config: {
        preResolveTypes: true,
      },
    },
  },
};

export default config;

// run npx graphql-codegen --config ./codegen.ts --watch --verbose
