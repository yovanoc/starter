import { subscriptionField } from "nexus";

async function* truthStream() {
  while (true) {
    const answer = [true, false][Math.round(Math.random())];
    yield answer;
    await new Promise((res) => setTimeout(res, 1000));
  }
}

export default subscriptionField((t) => {
  t.nonNull.boolean("foobars", {
    subscribe() {
      return truthStream();
    },
    resolve(eventData: boolean) {
      return eventData;
    },
  });
});
