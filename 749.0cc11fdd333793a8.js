"use strict";(self.webpackChunkng_mamdani=self.webpackChunkng_mamdani||[]).push([[749],{1749:(N,u,r)=>{r.r(u),r.d(u,{ViewerModule:()=>T});var C=r(1083),n=r(5e3),x=r(4836),m=r(9224),M=r(7093),O=r(2368),_=r(3075),c=r(9808);function P(e,i){1&e&&n._UZ(0,"div",9)}function v(e,i){if(1&e&&(n.TgZ(0,"span",10),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.description)}}function y(e,i){if(1&e&&(n.TgZ(0,"section",11),n._UZ(1,"ngx-json-viewer",12),n.qZA()),2&e){const t=n.oxw().$implicit,s=n.oxw();n.xp6(1),n.Q6J("json",t.value)("expanded",s.expanded)("depth",s.depth)("_currentDepth",s._currentDepth)}}const w=function(e){return["segment",e]},h=function(e,i){return{"segment-main":!0,expandable:e,expanded:i}};function j(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"section",2),n.TgZ(1,"section",3),n.NdJ("click",function(){const g=n.CHM(t).$implicit;return n.oxw().toggle(g)}),n.YNc(2,P,1,0,"div",4),n.TgZ(3,"span",5),n._uU(4),n.qZA(),n.TgZ(5,"span",6),n._uU(6,": "),n.qZA(),n.YNc(7,v,2,1,"span",7),n.qZA(),n.YNc(8,y,2,4,"section",8),n.qZA()}if(2&e){const t=i.$implicit,s=n.oxw();n.Q6J("ngClass",n.VKq(6,w,"segment-type-"+t.type)),n.xp6(1),n.Q6J("ngClass",n.WLB(8,h,s.isExpandable(t),t.expanded)),n.xp6(1),n.Q6J("ngIf",s.isExpandable(t)),n.xp6(2),n.Oqu(t.key),n.xp6(3),n.Q6J("ngIf",!t.expanded||!s.isExpandable(t)),n.xp6(1),n.Q6J("ngIf",t.expanded&&s.isExpandable(t))}}let Z=(()=>{class e{constructor(){this.expanded=!0,this.depth=-1,this._currentDepth=-1,this.segments=[]}ngOnChanges(){this.segments=[],this.json=this.decycle(this.json),this._currentDepth++,"object"==typeof this.json?Object.keys(this.json).forEach(t=>{this.segments.push(this.parseKeyValue(t,this.json[t]))}):this.segments.push(this.parseKeyValue(`(${typeof this.json})`,this.json))}isExpandable(t){return"object"===t.type||"array"===t.type}toggle(t){this.isExpandable(t)&&(t.expanded=!t.expanded)}parseKeyValue(t,s){const o={key:t,value:s,type:void 0,description:""+s,expanded:this.isExpanded()};switch(typeof o.value){case"number":o.type="number";break;case"boolean":o.type="boolean";break;case"function":o.type="function";break;case"string":o.type="string",o.description='"'+o.value+'"';break;case"undefined":o.type="undefined",o.description="undefined";break;case"object":null===o.value?(o.type="null",o.description="null"):Array.isArray(o.value)?(o.type="array",o.description="Array["+o.value.length+"] "+JSON.stringify(o.value)):o.value instanceof Date?o.type="date":(o.type="object",o.description="Object "+JSON.stringify(o.value))}return o}isExpanded(){return this.expanded&&!(this.depth>-1&&this._currentDepth>=this.depth)}decycle(t){const s=new WeakMap;return function o(g,d){let l,a;return"object"!=typeof g||null===g||g instanceof Boolean||g instanceof Date||g instanceof Number||g instanceof RegExp||g instanceof String?g:(l=s.get(g),void 0!==l?{$ref:l}:(s.set(g,d),Array.isArray(g)?(a=[],g.forEach(function(p,f){a[f]=o(p,d+"["+f+"]")})):(a={},Object.keys(g).forEach(function(p){a[p]=o(g[p],d+"["+JSON.stringify(p)+"]")})),a))}(t,"$")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["ngx-json-viewer"]],inputs:{expanded:"expanded",depth:"depth",_currentDepth:"_currentDepth",json:"json"},features:[n.TTD],decls:2,vars:1,consts:[[1,"ngx-json-viewer"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"ngClass","click"],["class","toggler",4,"ngIf"],[1,"segment-key"],[1,"segment-separator"],["class","segment-value",4,"ngIf"],["class","children",4,"ngIf"],[1,"toggler"],[1,"segment-value"],[1,"children"],[3,"json","expanded","depth","_currentDepth"]],template:function(t,s){1&t&&(n.TgZ(0,"section",0),n.YNc(1,j,9,11,"section",1),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngForOf",s.segments))},directives:[c.sg,c.mk,c.O5,e],styles:['@charset "UTF-8";.ngx-json-viewer[_ngcontent-%COMP%]{font-family:monospace;font-size:1em;height:100%;overflow:hidden;position:relative;width:100%}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]{margin:1px 1px 1px 12px;padding:2px}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]{word-wrap:break-word}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{color:#787878;font-size:.8em;line-height:1.2em;margin-left:-14px;margin-top:3px;position:absolute;vertical-align:middle}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]:after{content:"\u25ba";display:inline-block;transition:transform .1s ease-in}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-key[_ngcontent-%COMP%]{color:#4e187c}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-separator[_ngcontent-%COMP%]{color:#999}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-value[_ngcontent-%COMP%]{color:#000}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]{margin-left:12px}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-string[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#ff6b6b}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-number[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#009688}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-boolean[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#b938a4}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-date[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#05668d}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-function[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#999}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#fff}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:red}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-key[_ngcontent-%COMP%]{color:#999}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:#999}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%]{white-space:nowrap}.ngx-json-viewer[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]:after{transform:rotate(90deg)}.ngx-json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]{cursor:pointer}']}),e})(),J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[c.ez]]}),e})();const b=[{path:"",component:(()=>{class e{constructor(t){this.mamdaniService=t,this.expanded=!0}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(x.q))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-config-viewer"]],decls:22,vars:13,consts:[[1,"viewer-container"],[1,"mat-elevation-z4"],["fxFlex",""],["color","primary",3,"ngModel","ngModelChange"],[1,"viewer"],[3,"json","expanded"]],template:function(t,s){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"mat-card",1),n.TgZ(2,"mat-card-title"),n._uU(3,"Config Viewer "),n._UZ(4,"div",2),n.TgZ(5,"mat-slide-toggle",3),n.NdJ("ngModelChange",function(g){return s.expanded=g}),n.qZA(),n.qZA(),n.TgZ(6,"mat-card-content"),n.TgZ(7,"div",4),n.TgZ(8,"h3"),n._uU(9,"Inputs"),n.qZA(),n._UZ(10,"ngx-json-viewer",5),n.ALo(11,"async"),n.qZA(),n.TgZ(12,"div",4),n.TgZ(13,"h3"),n._uU(14,"Outputs"),n.qZA(),n._UZ(15,"ngx-json-viewer",5),n.ALo(16,"async"),n.qZA(),n.TgZ(17,"div",4),n.TgZ(18,"h3"),n._uU(19,"Rules"),n.qZA(),n._UZ(20,"ngx-json-viewer",5),n.ALo(21,"async"),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(5),n.Q6J("ngModel",s.expanded),n.xp6(5),n.Q6J("json",n.lcZ(11,7,s.mamdaniService.inputVariables$))("expanded",s.expanded),n.xp6(5),n.Q6J("json",n.lcZ(16,9,s.mamdaniService.outputVariables$))("expanded",s.expanded),n.xp6(5),n.Q6J("json",n.lcZ(21,11,s.mamdaniService.rules$))("expanded",s.expanded))},directives:[m.a8,m.n5,M.yH,O.Rr,_.JJ,_.On,m.dn,Z],pipes:[c.Ov],styles:[".viewer-container[_ngcontent-%COMP%]{margin:0 20px}.viewer[_ngcontent-%COMP%]{margin:20px 10px}"]}),e})()}];let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[C.Bz.forChild(b)],C.Bz]}),e})();var A=r(8560);let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[A.m,V,J]]}),e})()}}]);