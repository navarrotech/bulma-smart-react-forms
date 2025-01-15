/* Copyright © 2025 Navarrotech */
import { ChildProps, LightProps, AsLeftCenteredRight, AsSize } from '../types';
type AsArrowSeparator = {
    hasArrowSeparator: true;
    hasBulletSeparator?: never;
    hasDotSeparator?: never;
    hasSucceedsSeparator?: never;
};
type AsBulletSeparator = {
    hasArrowSeparator?: never;
    hasBulletSeparator: true;
    hasDotSeparator?: never;
    hasSucceedsSeparator?: never;
};
type AsDotSeparator = {
    hasArrowSeparator?: never;
    hasBulletSeparator?: never;
    hasDotSeparator: true;
    hasSucceedsSeparator?: never;
};
type AsSucceedsSeparator = {
    hasArrowSeparator?: never;
    hasBulletSeparator?: never;
    hasDotSeparator?: never;
    hasSucceedsSeparator: true;
};
type Props = LightProps & ChildProps & AsSize & AsLeftCenteredRight & (AsArrowSeparator | AsBulletSeparator | AsDotSeparator | AsSucceedsSeparator) & {
    id: string;
};
export declare function Breadcrumb(props: Props): import("react/jsx-runtime").JSX.Element;
export {};