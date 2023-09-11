// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type EmptyValue = "empty";
export const EmptyContext = React.createContext<EmptyValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useEmpty() {
  return React.useContext(EmptyContext);
}

export default EmptyContext;
/* prettier-ignore-end */
