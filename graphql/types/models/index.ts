import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
  },
});

export const test = objectType({
  name: "Test",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.date("date");
  },
});
