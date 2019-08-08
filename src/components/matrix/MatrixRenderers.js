import {initialData} from "./Constants";
import Handsontable from 'handsontable';

export function generalRenderer(row, col) {
    let cellMeta = {};

    //company names
    if (col === 0) {
        cellMeta.colWidths = 150;
        cellMeta.renderer = safeHtmlRenderer;
    }

    return cellMeta;
}

// original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
function strip_tags(input, allowed) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

    // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

function escapeHTML(value) {
    var escaped = Handsontable.helper.stringify(value);
    escaped = strip_tags(escaped, '<em><b><strong><a><big>'); //be sure you only allow certain HTML tags to avoid XSS threats (you should also remove unwanted HTML attributes)
    return escaped
}

function safeHtmlRenderer(instance, td, row, col, prop, value, cellProperties) {
    const escaped = escapeHTML(value)
    const url = escapeHTML(initialData[row]["URL"])
    td.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${escaped}</a>`;
    return td;
}
