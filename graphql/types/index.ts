import { asNexusMethod } from "nexus";
import { DateTimeResolver, JSONObjectResolver } from "graphql-scalars";

export const GQLDATE = asNexusMethod(DateTimeResolver, "date");
export const GQLJSON = asNexusMethod(JSONObjectResolver, "json");

export * from "./models";
export * from "./queries";
export * from "./mutations";
export * from "./subscriptions";
