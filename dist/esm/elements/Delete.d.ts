// Copyright © 2024 Navarrotech

import type { StandardProps, AsSize } from '@/types';
type Props = Omit<StandardProps, 'fullwidth'> & AsSize & Record<string, unknown>;
export declare function Delete(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
