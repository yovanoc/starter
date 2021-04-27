import { NextSeoProps } from "next-seo";

const seo: NextSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://allympian.com/",
    site_name: "Allympian",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default seo;
