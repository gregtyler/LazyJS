/*!
* TableSorter 2.15.13 min - Client-side table sorting with ease!
* Copyright (c) 2007 Christian Bach
*/
!function(g){g.extend({tablesorter:new function(){function d(){var a=arguments[0],b=1<arguments.length?Array.prototype.slice.call(arguments):a;if("undefined"!==typeof console&&"undefined"!==typeof console.log)console[/error/i.test(a)?"error":/warn/i.test(a)?"warn":"log"](b);else alert(b)}function v(a,b){d(a+" ("+((new Date).getTime()-b.getTime())+"ms)")}function m(a){for(var b in a)return!1;return!0}function n(a,b,c){if(!b)return"";var k=a.config,e=k.textExtraction,f="",f="simple"===e?k.supportsTextContent? b.textContent:g(b).text():"function"===typeof e?e(b,a,c):"object"===typeof e&&e.hasOwnProperty(c)?e[c](b,a,c):k.supportsTextContent?b.textContent:g(b).text();return g.trim(f)}function r(a){var b=a.config,c=b.$tbodies=b.$table.children("tbody:not(."+b.cssInfoBlock+")"),k,e,u,h,p,l,g,m="";if(0===c.length)return b.debug?d("Warning: *Empty table!* Not building a parser cache"):"";b.debug&&(g=new Date,d("Detecting parsers for each column"));c=c[0].rows;if(c[0])for(k=[],e=c[0].cells.length,u=0;u<e;u++){h= b.$headers.filter(":not([colspan])");h=h.add(b.$headers.filter('[colspan="1"]')).filter('[data-column="'+u+'"]:last');p=b.headers[u];l=f.getParserById(f.getData(h,p,"sorter"));b.empties[u]=f.getData(h,p,"empty")||b.emptyTo||(b.emptyToBottom?"bottom":"top");b.strings[u]=f.getData(h,p,"string")||b.stringTo||"max";if(!l)a:{h=a;p=c;l=-1;for(var A=u,y=void 0,x=f.parsers.length,s=!1,r="",y=!0;""===r&&y;)l++,p[l]?(s=p[l].cells[A],r=n(h,s,A),h.config.debug&&d("Checking if value was empty on row "+l+", column: "+ A+': "'+r+'"')):y=!1;for(;0<=--x;)if((y=f.parsers[x])&&"text"!==y.id&&y.is&&y.is(r,h,s)){l=y;break a}l=f.getParserById("text")}b.debug&&(m+="column:"+u+"; parser:"+l.id+"; string:"+b.strings[u]+"; empty: "+b.empties[u]+"\n");k.push(l)}b.debug&&(d(m),v("Completed detecting parsers",g));b.parsers=k}function w(a){var b=a.tBodies,c=a.config,k,e,u=c.parsers,h,p,l,q,m,A,y,x=[];c.cache={};if(!u)return c.debug?d("Warning: *Empty table!* Not building a cache"):"";c.debug&&(y=new Date);c.showProcessing&&f.isProcessing(a, !0);for(q=0;q<b.length;q++)if(c.cache[q]={row:[],normalized:[]},!g(b[q]).hasClass(c.cssInfoBlock)){k=b[q]&&b[q].rows.length||0;e=b[q].rows[0]&&b[q].rows[0].cells.length||0;for(p=0;p<k;++p)if(m=g(b[q].rows[p]),A=[],m.hasClass(c.cssChildRow)&&0!==p)c.cache[q].row[c.cache[q].row.length-1]=c.cache[q].row[c.cache[q].row.length-1].add(m),m.prev().hasClass(c.cssChildRow)||m.prev().addClass(f.css.cssHasChild);else{c.cache[q].row.push(m);for(l=0;l<e;++l)"undefined"===typeof u[l]?c.debug&&d("No parser found for cell:", m[0].cells[l],"does it have a header?"):(h=n(a,m[0].cells[l],l),h=u[l].format(h,a,m[0].cells[l],l),A.push(h),"numeric"===(u[l].type||"").toLowerCase()&&(x[l]=Math.max(Math.abs(h)||0,x[l]||0)));A.push(c.cache[q].normalized.length);c.cache[q].normalized.push(A)}c.cache[q].colMax=x}c.showProcessing&&f.isProcessing(a);c.debug&&v("Building cache for "+k+" rows",y)}function z(a,b){var c=a.config,k=c.widgetOptions,e=a.tBodies,u=[],h=c.cache,d,l,q,n,A,y,x,s,r,t,w;if(m(h))return c.appender?c.appender(a,u): a.isUpdating?c.$table.trigger("updateComplete",a):"";c.debug&&(w=new Date);for(s=0;s<e.length;s++)if(d=g(e[s]),d.length&&!d.hasClass(c.cssInfoBlock)){A=f.processTbody(a,d,!0);d=h[s].row;l=h[s].normalized;n=(q=l.length)?l[0].length-1:0;for(y=0;y<q;y++)if(t=l[y][n],u.push(d[t]),!c.appender||c.pager&&!(c.pager.removeRows&&k.pager_removeRows||c.pager.ajax))for(r=d[t].length,x=0;x<r;x++)A.append(d[t][x]);f.processTbody(a,A,!1)}c.appender&&c.appender(a,u);c.debug&&v("Rebuilt table",w);b||c.appender||f.applyWidget(a); a.isUpdating&&c.$table.trigger("updateComplete",a)}function D(a){var b=[],c=0,k=g(a).children("thead, tfoot").children("tr"),e,f,d,p,l,q,m,v,n,r;for(e=0;e<k.length;e++)for(l=k[e].cells,f=0;f<l.length;f++){p=l[f];q=p.parentNode.rowIndex;g(p).index();m=p.rowSpan||1;v=p.colSpan||1;"undefined"===typeof b[q]&&(b[q]=[]);for(d=0;d<b[q].length+1;d++)if("undefined"===typeof b[q][d]){n=d;break}c=Math.max(n,c);g(p).attr({"data-column":n});for(d=q;d<q+m;d++)for("undefined"===typeof b[d]&&(b[d]=[]),r=b[d],p=n;p< n+v;p++)r[p]="x"}a.config.columns=c+1}function C(a){return/^d/i.test(a)||1===a}function E(a){var b,c,k,e,u,h,p,l=a.config;l.headerList=[];l.headerContent=[];l.debug&&(p=new Date);D(a);e=l.cssIcon?'<i class="'+(l.cssIcon===f.css.icon?f.css.icon:l.cssIcon+" "+f.css.icon)+'"></i>':"";l.$headers=g(a).find(l.selectorHeaders).each(function(a){c=g(this);b=l.headers[a];l.headerContent[a]=g(this).html();u=l.headerTemplate.replace(/\{content\}/g,g(this).html()).replace(/\{icon\}/g,e);l.onRenderTemplate&&(k= l.onRenderTemplate.apply(c,[a,u]))&&"string"===typeof k&&(u=k);g(this).html('<div class="'+f.css.headerIn+'">'+u+"</div>");l.onRenderHeader&&l.onRenderHeader.apply(c,[a]);this.column=parseInt(g(this).attr("data-column"),10);this.order=C(f.getData(c,b,"sortInitialOrder")||l.sortInitialOrder)?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;h=f.getData(c,b,"lockedOrder")||!1;"undefined"!==typeof h&&!1!==h&&(this.order=this.lockedOrder=C(h)?[1,1,1]:[0,0,0]);c.addClass(f.css.header+" "+l.cssHeader); l.headerList[a]=this;c.parent().addClass(f.css.headerRow+" "+l.cssHeaderRow).attr("role","row");l.tabIndex&&c.attr("tabindex",0)}).attr({scope:"col",role:"columnheader"});G(a);l.debug&&(v("Built headers:",p),d(l.$headers))}function B(a,b,c){var k=a.config;k.$table.find(k.selectorRemove).remove();r(a);w(a);H(k.$table,b,c)}function G(a){var b,c,k=a.config;k.$headers.each(function(e,d){c=g(d);b="false"===f.getData(d,k.headers[e],"sorter");d.sortDisabled=b;c[b?"addClass":"removeClass"]("sorter-false").attr("aria-disabled", ""+b);a.id&&(b?c.removeAttr("aria-controls"):c.attr("aria-controls",a.id))})}function F(a){var b,c,k,e=a.config,d=e.sortList,h=f.css.sortNone+" "+e.cssNone,p=[f.css.sortAsc+" "+e.cssAsc,f.css.sortDesc+" "+e.cssDesc],l=["ascending","descending"],q=g(a).find("tfoot tr").children().removeClass(p.join(" "));e.$headers.removeClass(p.join(" ")).addClass(h).attr("aria-sort","none");k=d.length;for(b=0;b<k;b++)if(2!==d[b][1]&&(a=e.$headers.not(".sorter-false").filter('[data-column="'+d[b][0]+'"]'+(1===k?":last": "")),a.length))for(c=0;c<a.length;c++)a[c].sortDisabled||(a.eq(c).removeClass(h).addClass(p[d[b][1]]).attr("aria-sort",l[d[b][1]]),q.length&&q.filter('[data-column="'+d[b][0]+'"]').eq(c).addClass(p[d[b][1]]));e.$headers.not(".sorter-false").each(function(){var a=g(this),b=this.order[(this.count+1)%(e.sortReset?3:2)],b=a.text()+": "+f.language[a.hasClass(f.css.sortAsc)?"sortAsc":a.hasClass(f.css.sortDesc)?"sortDesc":"sortNone"]+f.language[0===b?"nextAsc":1===b?"nextDesc":"nextNone"];a.attr("aria-label", b)})}function L(a){if(a.config.widthFixed&&0===g(a).find("colgroup").length){var b=g("<colgroup>"),c=g(a).width();g(a.tBodies[0]).find("tr:first").children("td:visible").each(function(){b.append(g("<col>").css("width",parseInt(g(this).width()/c*1E3,10)/10+"%"))});g(a).prepend(b)}}function M(a,b){var c,k,e,d=a.config,f=b||d.sortList;d.sortList=[];g.each(f,function(a,b){c=[parseInt(b[0],10),parseInt(b[1],10)];if(e=d.$headers[c[0]])d.sortList.push(c),k=g.inArray(c[1],e.order),e.count=0<=k?k:c[1]%(d.sortReset? 3:2)})}function N(a,b){return a&&a[b]?a[b].type||"":""}function O(a,b,c){var k,e,d,h=a.config,p=!c[h.sortMultiSortKey],l=h.$table;l.trigger("sortStart",a);b.count=c[h.sortResetKey]?2:(b.count+1)%(h.sortReset?3:2);h.sortRestart&&(e=b,h.$headers.each(function(){this===e||!p&&g(this).is("."+f.css.sortDesc+",."+f.css.sortAsc)||(this.count=-1)}));e=b.column;if(p){h.sortList=[];if(null!==h.sortForce)for(k=h.sortForce,c=0;c<k.length;c++)k[c][0]!==e&&h.sortList.push(k[c]);k=b.order[b.count];if(2>k&&(h.sortList.push([e, k]),1<b.colSpan))for(c=1;c<b.colSpan;c++)h.sortList.push([e+c,k])}else{if(h.sortAppend&&1<h.sortList.length)for(c=0;c<h.sortAppend.length;c++)d=f.isValueInArray(h.sortAppend[c][0],h.sortList),0<=d&&h.sortList.splice(d,1);if(0<=f.isValueInArray(e,h.sortList))for(c=0;c<h.sortList.length;c++)d=h.sortList[c],k=h.$headers[d[0]],d[0]===e&&(d[1]=k.order[b.count],2===d[1]&&(h.sortList.splice(c,1),k.count=-1));else if(k=b.order[b.count],2>k&&(h.sortList.push([e,k]),1<b.colSpan))for(c=1;c<b.colSpan;c++)h.sortList.push([e+ c,k])}if(null!==h.sortAppend)for(k=h.sortAppend,c=0;c<k.length;c++)k[c][0]!==e&&h.sortList.push(k[c]);l.trigger("sortBegin",a);setTimeout(function(){F(a);I(a);z(a);l.trigger("sortEnd",a)},1)}function I(a){var b,c,k,e,d,h,g,l,q,n,r,t,x=0,s=a.config,w=s.textSorter||"",z=s.sortList,B=z.length,C=a.tBodies.length;if(!s.serverSideSorting&&!m(s.cache)){s.debug&&(q=new Date);for(c=0;c<C;c++)d=s.cache[c].colMax,l=(h=s.cache[c].normalized)&&h[0]?h[0].length-1:0,h.sort(function(c,h){for(b=0;b<B;b++){e=z[b][0]; g=z[b][1];x=0===g;if(s.sortStable&&c[e]===h[e]&&1===B)break;(k=/n/i.test(N(s.parsers,e)))&&s.strings[e]?(k="boolean"===typeof s.string[s.strings[e]]?(x?1:-1)*(s.string[s.strings[e]]?-1:1):s.strings[e]?s.string[s.strings[e]]||0:0,n=s.numberSorter?s.numberSorter(c[e],h[e],x,d[e],a):f["sortNumeric"+(x?"Asc":"Desc")](c[e],h[e],k,d[e],e,a)):(r=x?c:h,t=x?h:c,n="function"===typeof w?w(r[e],t[e],x,e,a):"object"===typeof w&&w.hasOwnProperty(e)?w[e](r[e],t[e],x,e,a):f["sortNatural"+(x?"Asc":"Desc")](c[e],h[e], e,a,s));if(n)return n}return c[l]-h[l]});s.debug&&v("Sorting on "+z.toString()+" and dir "+g+" time",q)}}function J(a,b){a[0].isUpdating&&a.trigger("updateComplete");"function"===typeof b&&b(a[0])}function H(a,b,c){var k=a[0].config.sortList;!1!==b&&!a[0].isProcessing&&k.length?a.trigger("sorton",[k,function(){J(a,c)},!0]):(a.trigger("applyWidgets"),J(a,c))}function K(a){var b=a.config,c=b.$table;c.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(b.namespace+ " ")).bind("sortReset"+b.namespace,function(c){c.stopPropagation();b.sortList=[];F(a);I(a);z(a)}).bind("updateAll"+b.namespace,function(c,e,d){c.stopPropagation();a.isUpdating=!0;f.refreshWidgets(a,!0,!0);f.restoreHeaders(a);E(a);f.bindEvents(a,b.$headers);K(a);B(a,e,d)}).bind("update"+b.namespace+" updateRows"+b.namespace,function(b,c,d){b.stopPropagation();a.isUpdating=!0;G(a);B(a,c,d)}).bind("updateCell"+b.namespace,function(k,e,d,f){k.stopPropagation();a.isUpdating=!0;c.find(b.selectorRemove).remove(); var p,l,q;p=c.find("tbody");k=p.index(g(e).parents("tbody").filter(":first"));var m=g(e).parents("tr").filter(":first");e=g(e)[0];p.length&&0<=k&&(l=p.eq(k).find("tr").index(m),q=g(e).index(),p=b.cache[k].normalized[l].length-1,b.cache[k].row[b.cache[k].normalized[l][p]]=m,b.cache[k].normalized[l][q]=b.parsers[q].format(n(a,e,q),a,e,q),H(c,d,f))}).bind("addRows"+b.namespace,function(k,e,d,f){k.stopPropagation();a.isUpdating=!0;if(m(b.cache))G(a),B(a,d,f);else{var g,l=e.filter("tr").length,q=[],v= e[0].cells.length,w=c.find("tbody").index(e.parents("tbody").filter(":first"));b.parsers||r(a);for(k=0;k<l;k++){for(g=0;g<v;g++)q[g]=b.parsers[g].format(n(a,e[k].cells[g],g),a,e[k].cells[g],g);q.push(b.cache[w].row.length);b.cache[w].row.push([e[k]]);b.cache[w].normalized.push(q);q=[]}H(c,d,f)}}).bind("updateComplete"+b.namespace,function(){a.isUpdating=!1}).bind("sorton"+b.namespace,function(b,e,d,f){var g=a.config;b.stopPropagation();c.trigger("sortStart",this);M(a,e);F(a);g.delayInit&&m(g.cache)&& w(a);c.trigger("sortBegin",this);I(a);z(a,f);c.trigger("sortEnd",this).trigger("applyWidgets");"function"===typeof d&&d(a)}).bind("appendCache"+b.namespace,function(b,c,d){b.stopPropagation();z(a,d);"function"===typeof c&&c(a)}).bind("updateCache"+b.namespace,function(c,e){b.parsers||r(a);w(a);"function"===typeof e&&e(a)}).bind("applyWidgetId"+b.namespace,function(c,e){c.stopPropagation();f.getWidgetById(e).format(a,b,b.widgetOptions)}).bind("applyWidgets"+b.namespace,function(b,c){b.stopPropagation(); f.applyWidget(a,c)}).bind("refreshWidgets"+b.namespace,function(b,c,d){b.stopPropagation();f.refreshWidgets(a,c,d)}).bind("destroy"+b.namespace,function(b,c,d){b.stopPropagation();f.destroy(a,c,d)})}var f=this;f.version="2.15.13";f.parsers=[];f.widgets=[];f.defaults={theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0, delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon", cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};f.css={table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc", sortNone:"tablesorter-headerUnSorted"};f.language={sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"};f.log=d;f.benchmark=v;f.construct=function(a){return this.each(function(){var b=g.extend(!0,{},f.defaults,a);!this.hasInitialized&&f.buildTable&&"TABLE"!==this.tagName?f.buildTable(this,b):f.setup(this,b)})};f.setup= function(a,b){if(!a||!a.tHead||0===a.tBodies.length||!0===a.hasInitialized)return b.debug?d("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var c="",k=g(a),e=g.metadata;a.hasInitialized=!1;a.isProcessing=!0;a.config=b;g.data(a,"tablesorter",b);b.debug&&g.data(a,"startoveralltimer",new Date);b.supportsTextContent="x"===g("<span>x</span>")[0].textContent;b.supportsDataObject=function(a){a[0]=parseInt(a[0],10);return 1<a[0]||1===a[0]&&4<=parseInt(a[1], 10)}(g.fn.jquery.split("."));b.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:!0,bottom:!1};/tablesorter\-/.test(k.attr("class"))||(c=""!==b.theme?" tablesorter-"+b.theme:"");b.$table=k.addClass(f.css.table+" "+b.tableClass+c).attr({role:"grid"});b.namespace=b.namespace?"."+b.namespace.replace(/\W/g,""):".tablesorter"+Math.random().toString(16).slice(2);b.$tbodies=k.children("tbody:not(."+b.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"});b.$table.find("caption").length&& b.$table.attr("aria-labelledby","theCaption");b.widgetInit={};E(a);L(a);r(a);b.delayInit||w(a);f.bindEvents(a,b.$headers);K(a);b.supportsDataObject&&"undefined"!==typeof k.data().sortlist?b.sortList=k.data().sortlist:e&&k.metadata()&&k.metadata().sortlist&&(b.sortList=k.metadata().sortlist);f.applyWidget(a,!0);0<b.sortList.length?k.trigger("sorton",[b.sortList,{},!b.initWidgets,!0]):(F(a),b.initWidgets&&f.applyWidget(a));b.showProcessing&&k.unbind("sortBegin"+b.namespace+" sortEnd"+b.namespace).bind("sortBegin"+ b.namespace+" sortEnd"+b.namespace,function(b){f.isProcessing(a,"sortBegin"===b.type)});a.hasInitialized=!0;a.isProcessing=!1;b.debug&&f.benchmark("Overall initialization time",g.data(a,"startoveralltimer"));k.trigger("tablesorter-initialized",a);"function"===typeof b.initialized&&b.initialized(a)};f.isProcessing=function(a,b,c){a=g(a);var d=a[0].config;a=c||a.find("."+f.css.header);b?("undefined"!==typeof c&&0<d.sortList.length&&(a=a.filter(function(){return this.sortDisabled?!1:0<=f.isValueInArray(parseFloat(g(this).attr("data-column")), d.sortList)})),a.addClass(f.css.processing+" "+d.cssProcessing)):a.removeClass(f.css.processing+" "+d.cssProcessing)};f.processTbody=function(a,b,c){a=g(a)[0];if(c)return a.isProcessing=!0,b.before('<span class="tablesorter-savemyplace"/>'),c=g.fn.detach?b.detach():b.remove();c=g(a).find("span.tablesorter-savemyplace");b.insertAfter(c);c.remove();a.isProcessing=!1};f.clearTableBody=function(a){g(a)[0].config.$tbodies.empty()};f.bindEvents=function(a,b){a=g(a)[0];var c,d=a.config;b.find(d.selectorSort).add(b.filter(d.selectorSort)).unbind(["mousedown", "mouseup","sort","keyup",""].join(d.namespace+" ")).bind(["mousedown","mouseup","sort","keyup",""].join(d.namespace+" "),function(e,f){var h;h=e.type;if(!(1!==(e.which||e.button)&&!/sort|keyup/.test(h)||"keyup"===h&&13!==e.which||"mouseup"===h&&!0!==f&&250<(new Date).getTime()-c)){if("mousedown"===h)return c=(new Date).getTime(),"INPUT"===e.target.tagName?"":!d.cancelSelection;d.delayInit&&m(d.cache)&&w(a);h=/TH|TD/.test(this.tagName)?this:g(this).parents("th, td")[0];h=d.$headers[b.index(h)];h.sortDisabled|| O(a,h,e)}});d.cancelSelection&&b.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})};f.restoreHeaders=function(a){var b=g(a)[0].config;b.$table.find(b.selectorHeaders).each(function(a){g(this).find("."+f.css.headerIn).length&&g(this).html(b.headerContent[a])})};f.destroy=function(a,b,c){a=g(a)[0];if(a.hasInitialized){f.refreshWidgets(a,!0,!0);var d=g(a),e=a.config,u=d.find("thead:first"),h=u.find("tr."+f.css.headerRow).removeClass(f.css.headerRow+" "+ e.cssHeaderRow),m=d.find("tfoot:first > tr").children("th, td");u.find("tr").not(h).remove();d.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(e.namespace+" "));e.$headers.add(m).removeClass([f.css.header,e.cssHeader,e.cssAsc,e.cssDesc,f.css.sortAsc,f.css.sortDesc,f.css.sortNone].join(" ")).removeAttr("data-column"); h.find(e.selectorSort).unbind(["mousedown","mouseup","keypress",""].join(e.namespace+" "));f.restoreHeaders(a);!1!==b&&d.removeClass(f.css.table+" "+e.tableClass+" tablesorter-"+e.theme);a.hasInitialized=!1;"function"===typeof c&&c(a)}};f.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i};f.sortNatural=function(a,b){if(a===b)return 0;var c,d,e,g,h,m;d=f.regex;if(d.hex.test(b)){c=parseInt(a.match(d.hex),16);e=parseInt(b.match(d.hex), 16);if(c<e)return-1;if(c>e)return 1}c=a.replace(d.chunk,"\\0$1\\0").replace(d.chunks,"").split("\\0");d=b.replace(d.chunk,"\\0$1\\0").replace(d.chunks,"").split("\\0");m=Math.max(c.length,d.length);for(h=0;h<m;h++){e=isNaN(c[h])?c[h]||0:parseFloat(c[h])||0;g=isNaN(d[h])?d[h]||0:parseFloat(d[h])||0;if(isNaN(e)!==isNaN(g))return isNaN(e)?1:-1;typeof e!==typeof g&&(e+="",g+="");if(e<g)return-1;if(e>g)return 1}return 0};f.sortNaturalAsc=function(a,b,c,d,e){if(a===b)return 0;c=e.string[e.empties[c]||e.emptyTo]; return""===a&&0!==c?"boolean"===typeof c?c?-1:1:-c||-1:""===b&&0!==c?"boolean"===typeof c?c?1:-1:c||1:f.sortNatural(a,b)};f.sortNaturalDesc=function(a,b,c,d,e){if(a===b)return 0;c=e.string[e.empties[c]||e.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:c||1:""===b&&0!==c?"boolean"===typeof c?c?1:-1:-c||-1:f.sortNatural(b,a)};f.sortText=function(a,b){return a>b?1:a<b?-1:0};f.getTextValue=function(a,b,c){if(c){var d=a?a.length:0,e=c+b;for(c=0;c<d;c++)e+=a.charCodeAt(c);return b*e}return 0}; f.sortNumericAsc=function(a,b,c,d,e,g){if(a===b)return 0;g=g.config;e=g.string[g.empties[e]||g.emptyTo];if(""===a&&0!==e)return"boolean"===typeof e?e?-1:1:-e||-1;if(""===b&&0!==e)return"boolean"===typeof e?e?1:-1:e||1;isNaN(a)&&(a=f.getTextValue(a,c,d));isNaN(b)&&(b=f.getTextValue(b,c,d));return a-b};f.sortNumericDesc=function(a,b,c,d,e,g){if(a===b)return 0;g=g.config;e=g.string[g.empties[e]||g.emptyTo];if(""===a&&0!==e)return"boolean"===typeof e?e?-1:1:e||1;if(""===b&&0!==e)return"boolean"===typeof e? e?1:-1:-e||-1;isNaN(a)&&(a=f.getTextValue(a,c,d));isNaN(b)&&(b=f.getTextValue(b,c,d));return b-a};f.sortNumeric=function(a,b){return a-b};f.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6", ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};f.replaceAccents=function(a){var b,c="[",d=f.characterEquivalents;if(!f.characterRegex){f.characterRegexArray={};for(b in d)"string"===typeof b&&(c+=d[b],f.characterRegexArray[b]=RegExp("["+d[b]+"]","g"));f.characterRegex=RegExp(c+"]")}if(f.characterRegex.test(a))for(b in d)"string"===typeof b&&(a=a.replace(f.characterRegexArray[b],b));return a};f.isValueInArray=function(a,b){var c,d=b.length;for(c=0;c< d;c++)if(b[c][0]===a)return c;return-1};f.addParser=function(a){var b,c=f.parsers.length,d=!0;for(b=0;b<c;b++)f.parsers[b].id.toLowerCase()===a.id.toLowerCase()&&(d=!1);d&&f.parsers.push(a)};f.getParserById=function(a){var b,c=f.parsers.length;for(b=0;b<c;b++)if(f.parsers[b].id.toLowerCase()===a.toString().toLowerCase())return f.parsers[b];return!1};f.addWidget=function(a){f.widgets.push(a)};f.getWidgetById=function(a){var b,c,d=f.widgets.length;for(b=0;b<d;b++)if((c=f.widgets[b])&&c.hasOwnProperty("id")&& c.id.toLowerCase()===a.toLowerCase())return c};f.applyWidget=function(a,b){a=g(a)[0];var c=a.config,d=c.widgetOptions,e=[],m,h,p;c.debug&&(m=new Date);c.widgets.length&&(c.widgets=g.grep(c.widgets,function(a,b){return g.inArray(a,c.widgets)===b}),g.each(c.widgets||[],function(a,b){(p=f.getWidgetById(b))&&p.id&&(p.priority||(p.priority=10),e[a]=p)}),e.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),g.each(e,function(e,f){if(f){if(b||!c.widgetInit[f.id])f.hasOwnProperty("options")&& (d=a.config.widgetOptions=g.extend(!0,{},f.options,d)),f.hasOwnProperty("init")&&f.init(a,f,c,d),c.widgetInit[f.id]=!0;!b&&f.hasOwnProperty("format")&&f.format(a,c,d,!1)}}));c.debug&&(h=c.widgets.length,v("Completed "+(!0===b?"initializing ":"applying ")+h+" widget"+(1!==h?"s":""),m))};f.refreshWidgets=function(a,b,c){a=g(a)[0];var k,e=a.config,m=e.widgets,h=f.widgets,p=h.length;for(k=0;k<p;k++)h[k]&&h[k].id&&(b||0>g.inArray(h[k].id,m))&&(e.debug&&d('Refeshing widgets: Removing "'+h[k].id+'"'),h[k].hasOwnProperty("remove")&& e.widgetInit[h[k].id]&&(h[k].remove(a,e,e.widgetOptions),e.widgetInit[h[k].id]=!1));!0!==c&&f.applyWidget(a,b)};f.getData=function(a,b,c){var d="";a=g(a);var e,f;if(!a.length)return"";e=g.metadata?a.metadata():!1;f=" "+(a.attr("class")||"");"undefined"!==typeof a.data(c)||"undefined"!==typeof a.data(c.toLowerCase())?d+=a.data(c)||a.data(c.toLowerCase()):e&&"undefined"!==typeof e[c]?d+=e[c]:b&&"undefined"!==typeof b[c]?d+=b[c]:" "!==f&&f.match(" "+c+"-")&&(d=f.match(RegExp("\\s"+c+"-([\\w-]+)"))[1]|| "");return g.trim(d)};f.formatFloat=function(a,b){if("string"!==typeof a||""===a)return a;var c;a=(b&&b.config?!1!==b.config.usNumberFormat:"undefined"!==typeof b?b:1)?a.replace(/,/g,""):a.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(a)&&(a=a.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(a);return isNaN(c)?g.trim(a):c};f.isDigit=function(a){return isNaN(a)?/^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g,"")):!0}}});var n=g.tablesorter;g.fn.extend({tablesorter:n.construct}); n.addParser({id:"text",is:function(){return!0},format:function(d,v){var m=v.config;d&&(d=g.trim(m.ignoreCase?d.toLocaleLowerCase():d),d=m.sortLocaleCompare?n.replaceAccents(d):d);return d},type:"text"});n.addParser({id:"digit",is:function(d){return n.isDigit(d)},format:function(d,v){var m=n.formatFloat((d||"").replace(/[^\w,. \-()]/g,""),v);return d&&"number"===typeof m?m:d?g.trim(d&&v.config.ignoreCase?d.toLocaleLowerCase():d):d},type:"numeric"});n.addParser({id:"currency",is:function(d){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((d|| "").replace(/[+\-,. ]/g,""))},format:function(d,v){var m=n.formatFloat((d||"").replace(/[^\w,. \-()]/g,""),v);return d&&"number"===typeof m?m:d?g.trim(d&&v.config.ignoreCase?d.toLocaleLowerCase():d):d},type:"numeric"});n.addParser({id:"ipAddress",is:function(d){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(d)},format:function(d,g){var m,t=d?d.split("."):"",r="",w=t.length;for(m=0;m<w;m++)r+=("00"+t[m]).slice(-3);return d?n.formatFloat(r,g):d},type:"numeric"});n.addParser({id:"url",is:function(d){return/^(https?|ftp|file):\/\//.test(d)}, format:function(d){return d?g.trim(d.replace(/(https?|ftp|file):\/\//,"")):d},type:"text"});n.addParser({id:"isoDate",is:function(d){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(d)},format:function(d,g){return d?n.formatFloat(""!==d?(new Date(d.replace(/-/g,"/"))).getTime()||d:"",g):d},type:"numeric"});n.addParser({id:"percent",is:function(d){return/(\d\s*?%|%\s*?\d)/.test(d)&&15>d.length},format:function(d,g){return d?n.formatFloat(d.replace(/%/g,""),g):d},type:"numeric"});n.addParser({id:"usLongDate", is:function(d){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(d)||/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(d)},format:function(d,g){return d?n.formatFloat((new Date(d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||d,g):d},type:"numeric"});n.addParser({id:"shortDate",is:function(d){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((d||"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(d,g,m,t){if(d){m=g.config; var r=m.$headers.filter("[data-column="+t+"]:last");t=r.length&&r[0].dateFormat||n.getData(r,m.headers[t],"dateFormat")||m.dateFormat;d=d.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===t?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===t?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===t&&(d=d.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"))}return d?n.formatFloat((new Date(d)).getTime()||d,g):d},type:"numeric"});n.addParser({id:"time", is:function(d){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(d)},format:function(d,g){return d?n.formatFloat((new Date("2000/01/01 "+d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||d,g):d},type:"numeric"});n.addParser({id:"metadata",is:function(){return!1},format:function(d,n,m){d=n.config;d=d.parserMetadataName?d.parserMetadataName:"sortValue";return g(m).metadata()[d]},type:"numeric"});n.addWidget({id:"zebra",priority:90,format:function(d,v,m){var t,r,w,z,D,C,E=RegExp(v.cssChildRow, "i"),B=v.$tbodies;v.debug&&(D=new Date);for(d=0;d<B.length;d++)t=B.eq(d),C=t.children("tr").length,1<C&&(w=0,t=t.children("tr:visible").not(v.selectorRemove),t.each(function(){r=g(this);E.test(this.className)||w++;z=0===w%2;r.removeClass(m.zebra[z?1:0]).addClass(m.zebra[z?0:1])}));v.debug&&n.benchmark("Applying Zebra widget",D)},remove:function(d,n,m){var t;n=n.$tbodies;var r=(m.zebra||["even","odd"]).join(" ");for(m=0;m<n.length;m++)t=g.tablesorter.processTbody(d,n.eq(m),!0),t.children().removeClass(r), g.tablesorter.processTbody(d,t,!1)}})}(jQuery);