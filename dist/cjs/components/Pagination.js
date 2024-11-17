// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = Pagination;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const hooks_1 = require("@/utility/hooks");
const hooks_2 = require("@/utility/hooks");
// Misc
const lodash_es_1 = require("lodash-es");
const constants_1 = require("@/constants");
function Pagination(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    const sizeClassname = (0, hooks_2.useSize)(props);
    const positionClassname = (0, hooks_2.useLeftCenteredRight)(props);
    const id = props.id || 'pagination';
    const classes = [
        sizeClassname,
        positionClassname,
        props.rounded && 'is-rounded',
        props.disabled && 'is-disabled',
        props.className,
    ].filter(Boolean).join(' ') || '';
    const minPage = 0;
    let maxPage = 0;
    let currentPage = 0;
    if (props.page) {
        if (typeof props.page?.current === 'string') {
            currentPage = parseInt(props.page.current || '0');
        }
        else {
            currentPage = props.page?.current || 0;
        }
        if (typeof props.page?.total === 'string') {
            maxPage = parseInt(props.page.total || '0');
        }
        else {
            maxPage = props.page?.total || 0;
        }
    }
    else if (props.count) {
        // We can't divide by 0, so we'll just assume 1 if none is given
        const countPerPage = typeof props.count?.countPerPage === 'string'
            ? parseInt(props.count.countPerPage || '1')
            : props.count?.countPerPage || 1;
        const total = typeof props.count?.total === 'string'
            ? parseInt(props.count.total || '0')
            : props.count?.total || 0;
        const skip = typeof props.count?.skip === 'string'
            ? parseInt(props.count.skip || '0')
            : props.count?.skip || 0;
        currentPage = Math.floor(skip / countPerPage) + 1;
        maxPage = Math.floor(total / countPerPage) + 1;
    }
    if (!props.showEvenIfOnlyOnePage && maxPage === minPage) {
        return constants_1.Nothing;
    }
    function changePageTo(newPage) {
        // A minus 1 offset, because these are 1-based pages
        // Page "1" is actually index 0
        newPage = (0, lodash_es_1.clamp)(newPage - 1, minPage, maxPage);
        props.onPageChange(newPage);
    }
    function superTranslate(key, page) {
        if (typeof key === 'function') {
            return key(page);
        }
        return translate(key);
    }
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, id: id, rootClassname: 'pagination', className: classes, as: 'nav', role: 'navigation', "aria-label": 'pagination', children: [!props.hidePrevNext
                ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("a", { id: id + '-prev', className: 'pagination-previous', 
                            // @ts-ignore - Bulma supports the disabled attribute
                            disabled: props.disabled || currentPage === minPage, onClick: !props.disabled && currentPage !== minPage && (() => {
                                changePageTo(currentPage - 1);
                            }), children: superTranslate(props.nextText || 'Previous page', currentPage - 1) }), (0, jsx_runtime_1.jsx)("a", { id: id + '-next', className: 'pagination-next', 
                            // @ts-ignore - Bulma supports the disabled attribute
                            disabled: props.disabled || currentPage === maxPage, onClick: !props.disabled && currentPage !== maxPage && (() => {
                                changePageTo(currentPage + 1);
                            }), children: superTranslate(props.nextText || 'Next page', currentPage + 1) })] })
                : constants_1.Nothing, (0, jsx_runtime_1.jsxs)("ul", { className: 'pagination-list', children: [!props.hideFirstLast
                        ? (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { className: 'pagination-link', "aria-label": 'Goto page 1', title: superTranslate(props.firstPageTitle || 'Goto page 1', minPage), 
                                // @ts-ignore - Bulma supports the disabled attribute
                                disabled: props.disabled || currentPage === minPage, onClick: !props.disabled && currentPage !== minPage && (() => {
                                    changePageTo(minPage);
                                }), children: minPage }) })
                        : constants_1.Nothing, !props.hideEllipsis
                        ? (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("span", { className: 'pagination-ellipsis', children: "\u2026" }) })
                        : constants_1.Nothing, currentPage !== minPage
                        ? (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { className: 'pagination-link', "aria-label": `Goto page ${currentPage - 1}`, title: superTranslate(props.firstPageTitle || `Goto page ${currentPage - 1}`, currentPage - 1), 
                                // @ts-ignore - Bulma supports the disabled attribute
                                disabled: props.disabled, onClick: !props.disabled && (() => {
                                    changePageTo(currentPage - 1);
                                }), children: (0, lodash_es_1.clamp)(currentPage - 1, maxPage, minPage) }) })
                        : constants_1.Nothing, (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { className: 'pagination-link is-current', "aria-label": `Page ${currentPage}`, title: superTranslate(props.currentPageTitle || `Goto page ${currentPage}`, currentPage), "aria-current": 'page', 
                            // @ts-ignore - Bulma supports the disabled attribute
                            disabled: props.disabled, children: currentPage }) }), currentPage !== maxPage
                        ? (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { className: 'pagination-link', "aria-label": `Goto page ${currentPage + 1}`, title: superTranslate(props.firstPageTitle || `Goto page ${currentPage + 1}`, currentPage + 1), 
                                // @ts-ignore - Bulma supports the disabled attribute
                                disabled: props.disabled, onClick: !props.disabled && (() => {
                                    changePageTo(currentPage + 1);
                                }), children: (0, lodash_es_1.clamp)(currentPage + 1, maxPage, minPage) }) })
                        : constants_1.Nothing, !props.hideEllipsis
                        ? (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("span", { className: 'pagination-ellipsis', children: "\u2026" }) })
                        : constants_1.Nothing, !props.hideFirstLast
                        ? (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { className: 'pagination-link', "aria-label": `Goto page ${maxPage}`, title: superTranslate(props.lastPageTitle || `Goto page ${maxPage}`, maxPage), 
                                // @ts-ignore - Bulma supports the disabled attribute
                                disabled: props.disabled || currentPage === maxPage, onClick: !props.disabled && currentPage !== maxPage && (() => {
                                    changePageTo(maxPage);
                                }), children: maxPage }) })
                        : constants_1.Nothing] })] });
}
