import { ApolloServer } from "apollo-server-micro";
import { schema } from "graphql/schema";
import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { createContext } from "graphql/context";

const path = "/api/graphql";

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
  tracing: process.env.NODE_ENV === "development",
  introspection: process.env.NODE_ENV === "development",
  subscriptions: {
    path,
    keepAlive: 9000,
    onConnect: () => console.log("connected"),
    onDisconnect: () => console.log("disconnected"),
  },
  playground: {
    subscriptionEndpoint: path,

    settings: {
      "request.credentials": "same-origin",
    },
  },
});

// dont parse the body, next. apollo got this
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

type CustomSocket = Exclude<NextApiResponse<any>["socket"], null> & {
  server: Parameters<ApolloServer["installSubscriptionHandlers"]>[0] & {
    apolloServer?: ApolloServer;
    apolloServerHandler?: any;
  };
};

type CustomNextApiResponse<T = any> = NextApiResponse<T> & {
  socket: CustomSocket;
};

const graphqlWithSubscriptionHandler = (
  req: NextApiRequest,
  res: CustomNextApiResponse
) => {
  const oldOne = res.socket.server.apolloServer;
  if (
    //we need compare old apolloServer with newOne, because after hot-reload are not equals
    oldOne &&
    oldOne !== apolloServer
  ) {
    console.warn("FIXING HOT RELOAD !!!!!!!!!!!!!!! ");
    delete res.socket.server.apolloServer;
  }

  if (!res.socket.server.apolloServer) {
    console.log(`* apolloServer (re)initialization *`);

    apolloServer.installSubscriptionHandlers(res.socket.server);
    res.socket.server.apolloServer = apolloServer;
    const handler = apolloServer.createHandler({ path });
    res.socket.server.apolloServerHandler = handler;
    //clients losts old connections, but clients are able to reconnect
    oldOne?.stop();
  }

  return res.socket.server.apolloServerHandler(req, res);
};

export default graphqlWithSubscriptionHandler;
