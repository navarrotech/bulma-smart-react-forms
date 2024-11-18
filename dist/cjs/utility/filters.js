// Copyright © 2024 Navarrotech

"use strict";
// Copyright © 2024 Navarrotech
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitProps = omitProps;
// Core
const lodash_es_1 = require("lodash-es");
const constants_1 = require("@/constants");
function omitProps(props, specifics = []) {
    return (0, lodash_es_1.omit)(props, [
        ...constants_1.standardPropsToOmitBeforeSpread,
        ...specifics,
    ]);
}
