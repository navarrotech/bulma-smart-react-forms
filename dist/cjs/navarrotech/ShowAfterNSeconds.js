// Copyright © 2024 Navarrotech

"use strict";
// Copyright © 2024 Navarrotech
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowAfterNSeconds = ShowAfterNSeconds;
// Core
const react_1 = require("react");
// Misc
const constants_1 = require("@/constants");
function ShowAfterNSeconds({ children, time = 500, }) {
    const [show, setShow,] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, time);
        return () => {
            clearTimeout(timeout);
        };
    }, [time,]);
    if (show) {
        return children;
    }
    return constants_1.Nothing;
}
