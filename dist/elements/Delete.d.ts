/* Copyright © 2025 Navarrotech */
import { StandardProps, AsSize } from '../types';
type Props = Omit<StandardProps, 'fullwidth'> & AsSize & Record<string, unknown>;
export declare function Delete(props: Props): import("react/jsx-runtime").JSX.Element;
export {};