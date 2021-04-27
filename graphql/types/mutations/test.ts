import { mutationField, nonNull, stringArg } from "nexus";

export default mutationField((t) => {
  t.nonNull.string("test", {
    args: {
      test: nonNull(stringArg()),
    },
    resolve: (root, { test }) => {
      return test + " Youhou";
    },
  });
});
