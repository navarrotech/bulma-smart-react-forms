// Copyright © 2024 Navarrotech

// Copyright © 2024 Navarrotech
// Core
import { omit } from 'lodash-es';
import { standardPropsToOmitBeforeSpread } from '@/constants';
export function omitProps(props, specifics = []) {
    return omit(props, [
        ...standardPropsToOmitBeforeSpread,
        ...specifics,
    ]);
}
