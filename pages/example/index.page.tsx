import type { NextPage } from "next";
import { Example } from "~/presenter/component/Example";
import type { StaticProps } from "./type";
export { getStaticProps } from "./getStaticProps";

const Page: NextPage<StaticProps> = (props) => (
  <>
    {props.name}
    <Example />
  </>
);

export default Page;
