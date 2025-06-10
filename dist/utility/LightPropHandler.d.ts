/* Copyright © 2025 Navarrotech */
import { ChildProps, LightProps } from '../types';
export type LightPropHandlerProps = LightProps & ChildProps & {
    rootClassname: string;
    as?: keyof JSX.IntrinsicElements;
} & Record<string, unknown>;
export declare function LightPropHandler({ rootClassname, ...props }: LightPropHandlerProps): import('react').ReactElement<{
    title: string;
    className: string;
}, string | import('react').JSXElementConstructor<any>>;