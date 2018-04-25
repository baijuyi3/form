$(function () {
    'use strict';

    window.Validator =function (val,rule) {

        this.is_valid = function (new_val) {
            var key;
            if(new_val !== undefined)
            val= new_val;

            if (!rule.required && !val)
                return true;

            for(key in rule){
                if (key === 'required')
                    continue;
                var r=this['validate_'+key]();
                if(!r)return false;
            }
            return true;
        }

        this.validate_max =function () {
            pre_max_min();
            return val <= rule.max;
        }
        this.validate_min =function () {
            pre_max_min();
            return val >= rule.min;
        }
        this.validate_maxlength =function () {
            pre_length();
            return val.length <= rule.maxlength;
        }
        this.validate_minlength =function () {
            pre_length();
            return val.length >= rule.minlength;
        }
        /*用于his.validate_min*前置工作
         */
        function pre_max_min() {
            val=parseFloat(val);
        }
        /*用于his.validate_length*前置工作
         */
        function pre_length() {
            val=val.toString();
        }
        this.validate_numeric=function () {
            return $.isNumeric(val);
        }
        this.validate_required=function () {
            var real =$.trim(val);//去俩端空格
            if (!real && real!==0)
                return false;
            return true;
        }
        this.validate_pattern=function () {
            var reg =new RegExp(rule.pattern);//字符串转化正则
            return reg.test(val);
        }
    }
})