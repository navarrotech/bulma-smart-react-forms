/* Copyright © 2025 Navarrotech */
import { AsLeftCenteredRight, AsSize } from '../types';
export declare function useHotkey(key: string, callback: () => void, deps?: any[], disabled?: boolean): void;
export declare function useLeftCenteredRight(props: AsLeftCenteredRight, prefix?: string): string;
export declare function useSize(props: AsSize, prefix?: string): string;