import { stringArg, nonNull, queryField } from "nexus";

export default queryField((t) => {
  t.nonNull.field("test", {
    type: "Test",
    args: {
      test: nonNull(stringArg()),
    },
    resolve: async (_, { test }, { prisma }) => {
      const user = await prisma.user.findFirst();
      if (!user) {
        return {
          name: `Chris ${test}`,
          date: new Date(),
        };
      }

      return {
        name: user.email,
        date: user.birthDate,
      };
    },
  });
});
