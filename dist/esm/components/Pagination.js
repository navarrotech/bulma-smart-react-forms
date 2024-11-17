// Copyright © 2024 Navarrotech

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useTranslation } from '@/utility/hooks';
import { useSize, useLeftCenteredRight } from '@/utility/hooks';
// Misc
import { clamp } from 'lodash-es';
import { Nothing } from '@/constants';
export function Pagination(props) {
    const { translate, } = useTranslation();
    const sizeClassname = useSize(props);
    const positionClassname = useLeftCenteredRight(props);
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
        return Nothing;
    }
    function changePageTo(newPage) {
        // A minus 1 offset, because these are 1-based pages
        // Page "1" is actually index 0
        newPage = clamp(newPage - 1, minPage, maxPage);
        props.onPageChange(newPage);
    }
    function superTranslate(key, page) {
        if (typeof key === 'function') {
            return key(page);
        }
        return translate(key);
    }
    return _jsxs(LightPropHandler, { ...props, id: id, rootClassname: 'pagination', className: classes, as: 'nav', role: 'navigation', "aria-label": 'pagination', children: [!props.hidePrevNext
                ? _jsxs(_Fragment, { children: [_jsx("a", { id: id + '-prev', className: 'pagination-previous', 
                            // @ts-ignore - Bulma supports the disabled attribute
                            disabled: props.disabled || currentPage === minPage, onClick: !props.disabled && currentPage !== minPage && (() => {
                                changePageTo(currentPage - 1);
                            }), children: superTranslate(props.nextText || 'Previous page', currentPage - 1) }), _jsx("a", { id: id + '-next', className: 'pagination-next', 
                            // @ts-ignore - Bulma supports the disabled attribute
                            disabled: props.disabled || currentPage === maxPage, onClick: !props.disabled && currentPage !== maxPage && (() => {
                                changePageTo(currentPage + 1);
                            }), children: superTranslate(props.nextText || 'Next page', currentPage + 1) })] })
                : Nothing, _jsxs("ul", { className: 'pagination-list', children: [!props.hideFirstLast
                        ? _jsx("li", { children: _jsx("a", { className: 'pagination-link', "aria-label": 'Goto page 1', title: superTranslate(props.firstPageTitle || 'Goto page 1', minPage), 
                                // @ts-ignore - Bulma supports the disabled attribute
                                disabled: props.disabled || currentPage === minPage, onClick: !props.disabled && currentPage !== minPage && (() => {
                                    changePageTo(minPage);
                                }), children: minPage }) })
                        : Nothing, !props.hideEllipsis
                        ? _jsx("li", { children: _jsx("span", { className: 'pagination-ellipsis', children: "\u2026" }) })
                        : Nothing, currentPage !== minPage
                        ? _jsx("li", { children: _jsx("a", { className: 'pagination-link', "aria-label": `Goto page ${currentPage - 1}`, title: superTranslate(props.firstPageTitle || `Goto page ${currentPage - 1}`, currentPage - 1), 
                                // @ts-ignore - Bulma supports the disabled attribute
                                disabled: props.disabled, onClick: !props.disabled && (() => {
                                    changePageTo(currentPage - 1);
                                }), children: clamp(currentPage - 1, maxPage, minPage) }) })
                        : Nothing, _jsx("li", { children: _jsx("a", { className: 'pagination-link is-current', "aria-label": `Page ${currentPage}`, title: superTranslate(props.currentPageTitle || `Goto page ${currentPage}`, currentPage), "aria-current": 'page', 
                            // @ts-ignore - Bulma supports the disabled attribute
                            disabled: props.disabled, children: currentPage }) }), currentPage !== maxPage
                        ? _jsx("li", { children: _jsx("a", { className: 'pagination-link', "aria-label": `Goto page ${currentPage + 1}`, title: superTranslate(props.firstPageTitle || `Goto page ${currentPage + 1}`, currentPage + 1), 
                                // @ts-ignore - Bulma supports the disabled attribute
                                disabled: props.disabled, onClick: !props.disabled && (() => {
                                    changePageTo(currentPage + 1);
                                }), children: clamp(currentPage + 1, maxPage, minPage) }) })
                        : Nothing, !props.hideEllipsis
                        ? _jsx("li", { children: _jsx("span", { className: 'pagination-ellipsis', children: "\u2026" }) })
                        : Nothing, !props.hideFirstLast
                        ? _jsx("li", { children: _jsx("a", { className: 'pagination-link', "aria-label": `Goto page ${maxPage}`, title: superTranslate(props.lastPageTitle || `Goto page ${maxPage}`, maxPage), 
                                // @ts-ignore - Bulma supports the disabled attribute
                                disabled: props.disabled || currentPage === maxPage, onClick: !props.disabled && currentPage !== maxPage && (() => {
                                    changePageTo(maxPage);
                                }), children: maxPage }) })
                        : Nothing] })] });
}
