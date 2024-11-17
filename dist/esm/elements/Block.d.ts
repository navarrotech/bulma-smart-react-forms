// Copyright © 2024 Navarrotech

import type { ChildProps, LightProps } from '@/types';
import type { HTMLAttributes } from 'react';
type Props = LightProps & ChildProps & Record<string, unknown> & HTMLAttributes<HTMLDivElement>;
export declare function Block(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
