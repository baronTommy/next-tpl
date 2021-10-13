import { Example } from "@app/front/presenter/component/Example";
import type { NextPage } from "next";
import type { StaticProps } from "./type";
export { getStaticProps } from "./getStaticProps";

const Page: NextPage<StaticProps> = (props) => (
  <>
    {props.name}
    <Example />
  </>
);

export default Page;
