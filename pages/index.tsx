import { GetServerSideProps, NextPage } from "next";
import { Router, useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { styled } from "components/stitches.config";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "components/Header";
import Footer from "components/Footer";
import { PropsWithServerCache } from "@gqless/react";
import {
  prepareReactRender,
  useHydrateCache,
  // useMutation,
  useQuery,
  useSubscription,
  // query,
} from "graphql/gqless";
import { RouterContext } from "next/dist/next-server/lib/router-context";

const MainDiv = styled("main", {
  background: "$blue100",
});

const Test = styled("span", {
  color: "$blue1000",
});

type PageProps = PropsWithServerCache<{
  test: string;
}>;

const Home: NextPage<PageProps> = ({ cacheSnapshot, test }) => {
  useHydrateCache({
    cacheSnapshot,

    // If it should refetch everything after the component is mounted
    // By default 'shouldRefetch' is `false` (You can change it in the 'defaults' option)
    shouldRefetch: false,
  });

  const [t] = useTranslation("common");
  const { locale } = useRouter();
  const { test: testQuery } = useQuery();
  const { name, date } = testQuery({ test });
  const { foobars } = useSubscription();
  // const [login, { isLoading, data, error }] = useMutation(
  //   (mutation, args: { email: string; password: string }) => {
  //     const res = mutation.test({ test });

  //     if (res) {
  //       return {
  //         name: res,
  //       };
  //     }

  //     return {
  //       error,
  //     };
  //   },
  //   {
  //     onCompleted(data) { },
  //     onError(error) { },
  //     refetchQueries: [query.test],
  //     awaitRefetchQueries: true,
  //     suspense: false,
  //   }
  // );

  return (
    <>
      <NextSeo title="Starter" description="Starter HomePage" />
      <MainDiv>
        <Header title={t("h1")} />
        <div>
          <h1>{test}</h1>
          <Test>{foobars ? "foo" : "bar"}</Test>
          <div>{name}</div>
          <div>{date}</div>
        </div>
        <div>
          <Link href="/" locale={locale === "en" ? "fr" : "en"}>
            <button>{t("change-locale")}</button>
          </Link>
          <Link href="/second-page">
            <button type="button">{t("to-second-page")}</button>
          </Link>
        </div>
      </MainDiv>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  locale,
  query,
}) => {
  const test = query.test?.toString() ?? "Chris";
  const { cacheSnapshot } = await prepareReactRender(
    <RouterContext.Provider value={Router as any}>
      <Home test={test} />
    </RouterContext.Provider>
  );

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "footer"])),
      cacheSnapshot,
      test,
    },
  };
};

export default Home;
