import * as React from "react";
import {
  PlasmicSarvButton,
  DefaultSarvButtonProps
} from "./plasmic/sarv/PlasmicSarvButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface SarvButtonProps extends DefaultSarvButtonProps {
  // Feel free to add any additional props that this component should receive
}
function SarvButton_(props: SarvButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicSarvButton.useBehavior<SarvButtonProps>(
    props,
    ref
  );
  return <PlasmicSarvButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<SarvButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<SarvButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const SarvButton = React.forwardRef(SarvButton_) as any as ButtonComponentType;

export default Object.assign(SarvButton, { __plumeType: "button" });
