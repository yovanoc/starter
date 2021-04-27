import { useSubscription, useQuery } from "graphql/gqless";
import { useTranslation } from "next-i18next";

const Footer: React.FC = () => {
  const [t] = useTranslation(["footer"]);
  const { foobars } = useSubscription();
  const { test } = useQuery();

  const { name, date } = test({ test: "Chris" });

  return (
    <footer>
      <div>{foobars?.toString()}</div>
      <p>{t("description")}</p>
      <div>{name}</div>
      <div>{date}</div>
    </footer>
  );
};

export default Footer;
