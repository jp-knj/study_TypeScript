import { FunctionalComponent } from "preact";
import { css } from "goober";

import { Viewer } from "./viewer";
import { IPickedProps } from "./type";

export const Preview: FunctionalComponent<IPickedProps> = ({
  flavors,
  withCone,
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
