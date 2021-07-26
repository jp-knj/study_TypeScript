import { h } from "preact";
import { css } from "goober";

export const Viewer = ({ order }: { order: any }) => (
  <pre class={previewStyle}>{JSON.stringify(order, null, 2)}</pre>
);

const previewStyle = css({
  margin: "32px auto",
  padding: "8px",
  backgroundColor: "#eee",
});
