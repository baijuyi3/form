$(function () {
    'use strict';

     var $inputs=$('[data-rule]')
         ,$form=$('#signup')
         ,inputs=[];

     $inputs.each(function (index,node) {      //jquery
         console.log('indexnode',index,node);
         var tmp=new Input(node);
         inputs.push(tmp);             //存在inputs=[]中
     })
    $form.on('submit',function (e) {   //e事件对象
        e.preventDefault();
        $inputs.trigger('blur');        //统一blur一下
        for(var i=0;i<inputs.length;i++){
            var item=inputs[i];
            var r=item.validator.is_valid();
            if(!r){
                alert('invalid');
                return;
            }
        }
        // signup() ;
        alert('success');

    })
//     function signup() {
//       $.post('/api/signup',{})
//     }
// })
    // console.log('inputs:',inputs);

    //
    // var x=new Input('#test');
    // var valid=x.validator.is_valid();
    // console.log('valid:',valid);
    // var validator = new Validator('  ',{
    //     maxlength:5
    // });
    // var result=validator.validate_required();
    // console.log('result:',result);


/*解析input的验证规则*/


/*验证*/


// var validator ={};
// validator.validate_min=function (val,rule) {
//
// }
//
// validator.validate_maxlength=function (val,rule) {
//
// }


// var result = validator.validate_max();
// var result = validator.validate_min();
// var result = validator.validate_numeric();
// var result = validator.validate_required();
// var result = validator.validate_pattern();
// console.log('result:',result);
/*选择data-rule*/
//var validator = new Validator('--',{
//     pattern:'^[a-zA-Z0-9]*$'
// });