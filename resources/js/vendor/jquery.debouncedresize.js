!function(e){var n,t,i=e.event;n=i.special.debouncedresize={setup:function(){e(this).on("resize",n.handler)},teardown:function(){e(this).off("resize",n.handler)},handler:function(e,o){var r=this,s=arguments,d=function(){e.type="debouncedresize",i.dispatch.apply(r,s)};t&&clearTimeout(t),o?d():t=setTimeout(d,n.threshold)},threshold:150}}(jQuery);
//# sourceMappingURL=jquery.debouncedresize.js.map
