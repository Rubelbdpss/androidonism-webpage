!function(e){"use strict";function r(e,r){if(e.parsedStack)return e;var a=e.message||e.description||e||"<unknown error>",o=[];try{o=t(e.stack||e.toString())}catch(e){}if(0===o.length&&e.fileName&&o.push({method:"",location:e.fileName,line:e.lineNumber,column:e.columnNumber}),!r||!r.showColumns)for(var i,s=0;i=o[s];s++)delete i.column;var c=a;o.length>0&&(c=c+"\n"+n(o,r));var u=Object.create(Error.prototype);return u.message=a,u.stack=c,u.parsedStack=o,u}var t=e.parse||require("./parsing").parse,n=e.pretty||require("./formatting").pretty;e.normalize=r}("undefined"!=typeof module?module.exports:this.Stacky=this.Stacky||{});