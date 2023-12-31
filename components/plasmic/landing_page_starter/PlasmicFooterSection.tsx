// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qLp2o69PMLTDkVR2ydizGB
// Component: ltY1Xu1oYm1v

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: wRGgW2ODzrPS/component
import Button from "../../Button"; // plasmic-import: LI4MGYb9rz-K/component

import { useScreenVariants as useScreenVariantsiyEzrChoLzd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: IyEZRChoLzd-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: qLp2o69PMLTDkVR2ydizGB/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: ltY1Xu1oYm1v/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: 4ILD7kealJis/icon
import GithubIcon from "./icons/PlasmicIcon__Github"; // plasmic-import: MNKSJdu4vHOy/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: CxSf-1-q34Y4/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: XISzVTs2qwGn/icon

createPlasmicElementProxy;

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsiyEzrChoLzd()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jdWTf)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ghN8W)}
        >
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            _50Opaque={true}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hinjE)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__x9Yk2
              )}
            >
              {"Connect with us"}
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___6Kg6P)}
            >
              <TwitterIcon
                className={classNames(projectcss.all, sty.svg__d7U8C)}
                role={"img"}
              />

              <GithubIcon
                className={classNames(projectcss.all, sty.svg___1ONbJ)}
                role={"img"}
              />

              <LinkedinIcon
                className={classNames(projectcss.all, sty.svg___5KBFj)}
                role={"img"}
              />
            </p.Stack>
          </p.Stack>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vLEom)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__eF618
            )}
          >
            {"Product"}
          </div>
          <Button
            className={classNames("__wab_instance", sty.button__m0Uin)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kX66H
              )}
            >
              {"Pricing"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__jrPf7)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zccn5
              )}
            >
              {"Log in"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__sSlMq)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tIm3H
              )}
            >
              {"Integrations"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__xAe4D)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ugkaL
              )}
            >
              {"Insights"}
            </div>
          </Button>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0XXZ)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cBS
            )}
          >
            {"Support"}
          </div>
          <Button
            className={classNames("__wab_instance", sty.button__yy7Uz)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            {"Documentation"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__l5Bd)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            {"FAQs"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__s81Yy)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            {"Status"}
          </Button>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6Enzz)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kTd2D
            )}
          >
            {"Company"}
          </div>
          <Button
            className={classNames("__wab_instance", sty.button__hj15T)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            {"About"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__iMzVr)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            {"Contact us"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__zcqvb)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            {"Careers"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__abrrK)}
            color={"navLink"}
            flat={true}
            submitsForm={true}
          >
            {"Media"}
          </Button>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterSection__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
