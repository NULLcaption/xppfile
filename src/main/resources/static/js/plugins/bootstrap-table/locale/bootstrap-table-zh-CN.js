/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['zh-CN'] = {
        formatLoadingMessage: function () {
            return 'Please wait while you are trying to load the data……';
        },
        formatRecordsPerPage: function (pageNumber) {
            return 'Each page shows ' + pageNumber + ' record';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Displays records ' + pageFrom + ' through  ' + pageTo + ' ，totaling  ' + totalRows + ' record';
        },
        formatSearch: function () {
            return 'Search';
        },
        formatNoMatches: function () {
            return 'No matching records were found.';
        },
        formatPaginationSwitch: function () {
            return 'Hide/display pages';
        },
        formatRefresh: function () {
            return 'Refresh';
        },
        formatToggle: function () {
            return 'Switch To';
        },
        formatColumns: function () {
            return 'row';
        }
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);

})(jQuery);
