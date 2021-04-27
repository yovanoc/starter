import { makeSchema } from "nexus";
import path from "path";
import * as types from "./types";
import { nexusPrisma } from "nexus-plugin-prisma";

export const schema = makeSchema({
  types,
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
  contextType: {
    module: path.join(process.cwd()) + "/graphql/context.ts",
    export: "Context",
  },
  shouldExitAfterGenerateArtifacts: Boolean(
    process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION
  ),
  outputs: {
    schema: path.join(process.cwd()) + "/graphql/nexus/schema.graphql",
    typegen: path.join(process.cwd()) + "/graphql/nexus/typings.ts",
  },
  plugins: [
    nexusPrisma({
      prismaClient: (ctx) => ctx.prisma,
      experimentalCRUD: true,
    }),
  ],
});
