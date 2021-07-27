import { h } from "preact";
import { css } from "goober";

import { Viewer } from "./viewer";

export const Preview = ({
  flavors,
  withCone,
}: {
  flavors: Array<string>;
  withCone: boolean;
}) => (
  <section class={itemStyle}>
    <h2>Preview</h2>
    <Viewer order={{ flavors, withCone }} />
  </section>
);

const itemStyle = css({
  backgroundColor: "#fff",
  padding: "16px",
});
