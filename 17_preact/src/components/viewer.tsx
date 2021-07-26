import { FunctionalComponent } from "preact";
import { css } from "goober";

interface IOrderProps {
  order: {};
}
export const Viewer: FunctionalComponent<IOrderProps> = ({ order }) => (
  <pre class={previewStyle}>{JSON.stringify(order, null, 2)}</pre>
);

const previewStyle = css({
  margin: "32px auto",
  padding: "8px",
  backgroundColor: "#eee",
});
