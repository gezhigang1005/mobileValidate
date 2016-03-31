/*! 
版本:1.0.0;
作者:散崖;
邮箱:948061564@qq.com;
博客地址:http://wnworld.com/;*/
!function(a){"function"==typeof define&&define.amd?define(["Zepto"],function(b){a(b)}):"function"==typeof define&&define.cmd?define(["Zepto"],function(b,c,d){a(b("Zepto"))}):a(Zepto)}(function(a){var b=['input:not([type]),input[type="color"],input[type="date"],input[type="datetime"],input[type="datetime-local"],input[type="email"],input[type="file"],input[type="hidden"],input[type="month"],input[type="number"],input[type="password"],input[type="range"],input[type="search"],input[type="tel"],input[type="text"],input[type="time"],input[type="url"],input[type="week"],textarea',"select",'input[type="checkbox"],input[type="radio"]'],c=b.join(","),d={},e=function(a,b,c){if("radio"==a.prop("type")||"checkbox"==a.prop("type")){var d=c.$form.find('[name="'+a.prop("name")+'"]');d.filter(":checked").length>0?d.removeClass("field-invalid"):d.addClass("field-invalid")}else b.required&&b.pattern&&b.conditional?a.removeClass("field-invalid"):a.addClass("field-invalid")},f=function(){function b(b){if(!c){var d=a('<div class="field-tooltipWrap"><div class="field-tooltipInner"><div class="field-tooltip fieldTipBounceIn">'+b+"</div></div></div>");d.appendTo(a("body")),c=!0,setTimeout(function(){d.remove(),c=!1},1500)}}var c=null;return{show:b}}(),g=function(c,g){var h,i=a(this),j={required:!0,conditional:!0,pattern:!0},k=a.fn.mvalidate.errorTipFormat,l=a.trim(i.val())||"",m=i.data("validate"),n=void 0!=m?d[m]:{},o=i.data("required"),p=i.data("pattern")||("regexp"==a.type(n.pattern)?n.pattern:/(?:)/),q=i.data("conditional")||n.conditional,r=i.data("descriptions")||n.descriptions,s=i.data("describedby")||n.describedby;r=a.isPlainObject(r)?r:g.descriptions[r]||{},o=""!=o?o||!!n.required:!0,"regexp"!=a.type(p)&&(p=RegExp(p)),o&&(i.is(b[0]+","+b[1])?!l.length>0&&(j.required=!1):i.is(b[2])&&(i.is("[name]")?0==g.$form.find('[name="'+i.prop("name")+'"]:checked').length&&(j.required=!1):j.required=field.is(":checked"))),i.is(b[0])&&(p.test(l)||(o?j.pattern=!1:l.length>0&&(j.pattern=!1))),"undefined"!=q&&(a.isFunction(q)?j.conditional=!!q.call(i,l,g):g.conditional.hasOwnProperty(q)&&!g.conditional[q].call(i,l,g)&&(j.conditional=!1)),h=k(r.valid),j.required?j.pattern?j.conditional||(h=k(r.conditional)):h=k(r.pattern):h=k(r.required);var t=a('[id="'+s+'"]');return t.length>0&&2==g.type&&("keyup"!=c.type&&"change"!=c.type||t.children().length&&a.trim(t.text()))&&(t.html(h||""),e(i,j,g)),"function"==typeof n.each&&n.each.call(i,c,j,g),g.eachField.call(i,c,j,g),j.required&&j.pattern&&j.conditional?("function"==typeof n.valid&&n.valid.call(i,c,j,g),g.eachValidField.call(i,c,j,g)):(!g.firstInvalid&&g.firstInvalidFocus&&(g.firstInvalid=!0,i.focus()),1==g.type&&f.show(h),"function"==typeof n.invalid&&n.invalid.call(i,c,j,g),g.eachInvalidField.call(i,c,j,g)),j};a.extend(a,{mvalidateExtend:function(b){return a.extend(d,b)}}),a.fn.mvalidate=function(d){var e,f={type:1,validateInSubmit:!0,sendForm:!0,onKeyup:!1,onChange:!0,firstInvalidFocus:!0,conditional:{},descriptions:{},eachField:a.noop,eachValidField:a.noop,eachInvalidField:a.noop,valid:a.noop,invalid:a.noop,namespace:"mvalidate"},h=a.extend(!0,f,d),i=h.namespace;return h.type=Number(h.type),h.firstInvalid=!1,e=1==h.type?!1:!0,this.mvalidateDestroy().each(function(d){var f,j=a(this);j.is("form")&&(h.$form=j,j.data(name,{options:h}),f=j.find(c),e&&h.onKeyup&&f.filter(b[0]).each(function(){a(this).on("keyup."+i,function(a){g.call(this,a,h)})}),e&&h.onChange&&f.each(function(){var c=a(this);c.is(b[1]+","+b[2])&&a(this).on("change."+i,function(a){g.call(this,a,h)})}),h.validateInSubmit&&j.on("submit."+i,function(b){var c=!0;h.firstInvalid=!1,f.each(function(){var a=g.call(this,b,h);a.pattern&&a.conditional&&a.required||(c=!1)}),c?(h.sendForm||b.preventDefault(),a.isFunction(h.valid)&&h.valid.call(j,b,h)):(b.preventDefault(),b.stopImmediatePropagation(),a.isFunction(h.invalid)&&h.invalid.call(j,b,h))}))})},a.fn.mvalidateDestroy=function(){var b,d=a(this),e=d.data(name);return d.is("form")&&a.isPlainObject(e)&&"string"==typeof e.options.nameSpace&&(b=d.removeData(name).find(c),b.off("."+e.options.nameSpace)),d},a.fn.mvalidate.errorTipFormat=function(a){return'<div class="zvalid-resultformat">'+a+"</div>"}});