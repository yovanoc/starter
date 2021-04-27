/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: "/api/graphql",
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: "string" },
  preImport: "",
  introspection: {
    endpoint: "./graphql/nexus/schema.graphql",
    headers: {},
  },
  destination: "./graphql/gqless/index.ts",
  subscriptions: true,
};

module.exports = config;
