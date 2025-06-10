// Copyright © 2024 Navarrotech

/* eslint-disable @typescript-eslint/no-unused-vars */

export function omitProps(
  actualProps: Record<string, unknown>,
): Record<string, unknown> {
  const {
    as,
    text,
    icon,
    iconRight,
    children,
    fullwidth,
    expanded,
    static: isStatic,
    focused,
    active,
    inverted,
    rounded,
    outlined,
    loading,
    selected,
    iconSize,
    defaultActive,

    // Elements
    textarea,
    input,
    label,
    help,
    hovered,
    readonly,
    errorMessage,
    error,
    errors,

    // Callbacks
    onEnter,
    onOpened,

    // Positions
    left,
    right,
    centered,

    // Sizes:
    small,
    medium,
    large,

    // Colors:
    color,
    primary,
    secondary,
    warning,
    danger,
    success,
    info,
    link,
    white,
    black,
    dark,
    light,

    // Sizes:
    fluid,
    widescreen,
    maxWidescreen,
    fullhd,
    desktop,
    tablet,
    halfHeight,
    fullHeight,
    fullHeightWithNavbar,
    mobile,
    items,

    ...rest
  } = actualProps

  return rest
}
