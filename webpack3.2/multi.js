/**
 * 使用AMD规范定义js
 */
define(function(require, factory) {
    'use strict';
    return function(a, b){
        return a * b;
    }
});