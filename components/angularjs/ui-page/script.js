/*
 * 
 * @author:yelloxing
 * 
 * 2018-07-07
 * 
 */
(function (window, angular, $) {
    'use strict';
    angular.module("ui.directives").directive("uiPages", ['$compile', function ($compile) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                var pages = element.children('[ui-page]'), flag;
                for (flag = 0; flag < pages.length; flag++) {
                    (function (flag, currentPage) {
                        $.get("./" + currentPage.attr("href"), function (data) {
                            currentPage.html(data);
                            $compile(currentPage)(scope);
                            if (flag == 0) {
                                currentPage.css('display', 'block');
                            } else {
                                currentPage.css('display', 'none');
                            }
                        });
                    })(flag, $(pages[flag]));
                }
            }
        };
    }]).factory("$targets", function () {
        return function (target, index) {
            $('[ui-pages=' + target + ']').children('[ui-page]').css('display', 'none').eq((0 - (-index.replace('#', ''))) - 1).css('display', 'block');
        };
    });
})(window, window.angular, window.$);
