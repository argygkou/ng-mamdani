(self.webpackChunkng_mamdani=self.webpackChunkng_mamdani||[]).push([[693],{2693:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ConfigModule:()=>Nt});var a=r(267),n=r(3337),i=r(5366),o=r(6306),s=r(5965),u=r(5959),m=r(6403),c=r(7117),l=r(2797),p=r(1041),f=r(1116),g=r(3070),d=r(9550);function Z(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Please enter a value "),i.qZA())}function A(t,e){if(1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Minimum value: "),i.TgZ(2,"strong"),i._uU(3),i.qZA(),i.qZA()),2&t){const t=i.oxw().$implicit;i.xp6(3),i.Oqu(t.get("example").errors.min.min)}}function h(t,e){if(1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Maximum value: "),i.TgZ(2,"strong"),i._uU(3),i.qZA(),i.qZA()),2&t){const t=i.oxw().$implicit;i.xp6(3),i.Oqu(t.get("example").errors.max.max)}}function v(t,e){if(1&t&&(i.TgZ(0,"span"),i.TgZ(1,"span",11),i._uU(2),i.qZA(),i.TgZ(3,"span",12),i._uU(4),i.ALo(5,"number"),i.qZA(),i.qZA()),2&t){const t=e.$implicit,r=i.oxw().$implicit,a=i.oxw();i.xp6(2),i.hij("",t.name,":"),i.xp6(2),i.Oqu(i.lcZ(5,2,a.calculateValue(t,r.get("example").value)))}}function y(t,e){if(1&t&&(i.TgZ(0,"div",5),i.TgZ(1,"mat-form-field",6),i.TgZ(2,"mat-label"),i._uU(3),i.qZA(),i._UZ(4,"input",7),i.YNc(5,Z,2,0,"mat-error",8),i.YNc(6,A,4,1,"mat-error",8),i.YNc(7,h,4,1,"mat-error",8),i.qZA(),i.TgZ(8,"div",9),i.YNc(9,v,6,4,"span",10),i.qZA(),i.qZA()),2&t){const t=e.$implicit,r=e.index,a=i.oxw();i.Q6J("formGroupName",r),i.xp6(3),i.Oqu(t.get("name").value),i.xp6(2),i.Q6J("ngIf",t.get("example").hasError("required")),i.xp6(1),i.Q6J("ngIf",t.get("example").hasError("min")),i.xp6(1),i.Q6J("ngIf",t.get("example").hasError("max")),i.xp6(2),i.Q6J("ngForOf",a.getFuzzyAreas(t.get("name").value))}}let x=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.formCreatorService=e,this.destroy$=new u.xQ}ngOnInit(){this.initExampleForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calculateValue(t,e){return e?m.N[t.type](t.ranges,e):0}getFuzzyAreas(t){const e=this.inputVariables.find(e=>e.name===t);return e&&e.fuzzyAreas||[]}getResult(){const t=this.form.get("variables").value;return this.mamdaniService.getResult(t)}initExampleForm(){this.form=this.formCreatorService.initExampleForm(),this.mamdaniService.inputVariables$.pipe().subscribe(t=>{this.inputVariables=t;const e=this.form.get("variables");e.clear(),this.inputVariables.forEach(t=>{e.push(this.formCreatorService.addExample(t))})})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.q),i.Y36(c.A))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-examples-form"]],decls:12,vars:3,consts:[[1,"mat-elevation-z4"],[3,"formGroup"],["formArrayName","variables"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"ms-4"],[3,"formGroupName"],[1,"example-input","mx-3"],["matInput","","type","number","autocomplete","off","formControlName","example"],[4,"ngIf"],[1,"fuzzy-area-values","ms-3"],[4,"ngFor","ngForOf"],[1,"me-2"],[1,"me-3","contain-value"]],template:function(t,e){1&t&&(i.TgZ(0,"mat-card",0),i.TgZ(1,"mat-card-title"),i._uU(2,"Provide example for your variables:"),i.qZA(),i.TgZ(3,"mat-card-content"),i.TgZ(4,"form",1),i.TgZ(5,"div",2),i.YNc(6,y,10,6,"div",3),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"mat-card-actions"),i.TgZ(8,"p",4),i._uU(9," Result is: "),i.TgZ(10,"strong"),i._uU(11),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.Q6J("formGroup",e.form),i.xp6(2),i.Q6J("ngForOf",e.form.get("variables").controls),i.xp6(5),i.Oqu(e.getResult()))},directives:[l.a8,l.n5,l.dn,p._Y,p.JL,p.sg,p.CE,f.sg,l.hq,p.x0,g.KE,g.hX,d.Nt,p.wV,p.Fj,p.JJ,p.u,f.O5,g.TO],pipes:[f.JJ],styles:[".example-input[_ngcontent-%COMP%]{width:150px}.contain-value[_ngcontent-%COMP%]{font-weight:700}.fuzzy-area-values[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}"]}),t})();var q=r(7173);function T(t,e){if(1&t&&(i.TgZ(0,"a",6,7),i._uU(2),i.ALo(3,"titlecase"),i.qZA()),2&t){const t=e.$implicit,r=i.MAs(1);i.Q6J("routerLink",t)("active",r.isActive),i.xp6(2),i.hij(" ",i.lcZ(3,3,t)," ")}}let b=(()=>{class t{constructor(t){this.mamdaniService=t,this.links=["inputs","output","rules"]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.q))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-config"]],decls:9,vars:1,consts:[["fxLayout","row","fxLayout.xs","column","fxLayoutGap","20px",1,"config-container"],["fxFlex","40"],["fxFlex","60"],[1,"mat-elevation-z4"],["mat-tab-nav-bar",""],["mat-tab-link","","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i._UZ(2,"app-examples-form"),i.qZA(),i.TgZ(3,"div",2),i.TgZ(4,"mat-card",3),i.TgZ(5,"mat-card-content"),i.TgZ(6,"nav",4),i.YNc(7,T,4,5,"a",5),i.qZA(),i._UZ(8,"router-outlet"),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(7),i.Q6J("ngForOf",e.links))},directives:[s.xw,s.SQ,s.yH,x,l.a8,l.dn,q.BU,f.sg,n.lC,n.yS,q.Nj,n.Od],pipes:[f.rS],styles:[".config-container[_ngcontent-%COMP%]{margin:0 20px}"]}),t})();var z=r(5416),_=r(3702),I=r(6278),N=r(4369),O=r(2935),U=r(3841),J=r(7064);function w(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",15),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).toggleNorm()}),i._uU(1),i.qZA()}if(2&t){const t=i.oxw(2);i.xp6(1),i.hij(" ",t.typeControl.value," ")}}function F(t,e){if(1&t&&(i.TgZ(0,"mat-option",20),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.Q6J("value",t),i.xp6(1),i.hij(" ",t.name," ")}}function C(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Required "),i.qZA())}function Q(t,e){if(1&t&&(i.TgZ(0,"mat-form-field",16),i.TgZ(1,"mat-label"),i._uU(2),i.qZA(),i.TgZ(3,"mat-select",17),i.YNc(4,F,2,2,"mat-option",18),i.qZA(),i.YNc(5,C,2,0,"mat-error",19),i.qZA()),2&t){const t=e.ngIf,r=i.oxw(),a=r.index,n=r.$implicit;i.xp6(2),i.Oqu(t[a].name),i.xp6(2),i.Q6J("ngForOf",t[a].fuzzyAreas),i.xp6(1),i.Q6J("ngIf",n.hasError("required"))}}function Y(t,e){if(1&t&&(i.TgZ(0,"span"),i.YNc(1,w,2,1,"button",12),i.ynx(2,13),i.YNc(3,Q,6,3,"mat-form-field",14),i.ALo(4,"async"),i.BQk(),i.qZA()),2&t){const t=e.index,r=i.oxw();i.xp6(1),i.Q6J("ngIf",t>0),i.xp6(1),i.Q6J("formGroupName",t),i.xp6(1),i.Q6J("ngIf",i.lcZ(4,3,r.mamdaniService.inputVariables$))}}const S=function(t,e){return{name:t,area:e}};function $(t,e){if(1&t&&(i.TgZ(0,"mat-option",20),i._uU(1),i.qZA()),2&t){const t=e.$implicit,r=i.oxw().$implicit;i.Q6J("value",i.WLB(2,S,r.name,t.name)),i.xp6(1),i.hij(" ",t.name," ")}}function E(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Required "),i.qZA())}function D(t,e){if(1&t&&(i.TgZ(0,"mat-form-field",16),i.TgZ(1,"mat-label"),i._uU(2),i.qZA(),i.TgZ(3,"mat-select",21),i.YNc(4,$,2,5,"mat-option",18),i.qZA(),i.YNc(5,E,2,0,"mat-error",19),i.qZA()),2&t){const t=e.$implicit,r=i.oxw();i.xp6(2),i.Oqu(t.name),i.xp6(2),i.Q6J("ngForOf",t.fuzzyAreas),i.xp6(1),i.Q6J("ngIf",r.output.hasError("required"))}}let k=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.formCreatorService=e,this.destroy$=new u.xQ}get typeControl(){return this.form.get("type")}get fuzzyAreas(){return this.form.get("fuzzyAreas")}get inputs(){return this.fuzzyAreas.get("inputs")}get output(){return this.fuzzyAreas.get("output")}ngOnInit(){this.initForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}createRule(t){t.preventDefault();const e=this.form.value,r=e.fuzzyAreas.inputs.filter(t=>t.area);e.fuzzyAreas.inputs=r.map(t=>({name:t.name,area:t.area.name})),e.fuzzyAreas.inputs.length>0&&(this.mamdaniService.addRule(e),this.form.reset())}toggleNorm(){this.typeControl.setValue("AND"===this.typeControl.value?"OR":"AND")}initForm(){this.form=this.formCreatorService.createRuleForm(),this.mamdaniService.inputVariables$.pipe((0,z.R)(this.destroy$)).subscribe(t=>{t.forEach(t=>{this.inputs.push(new p.cw({name:new p.NI(t.name),area:new p.NI(null)}))})})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.q),i.Y36(c.A))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-rules-composer"]],decls:23,vars:6,consts:[[3,"formGroup","ngSubmit"],["dialog-title",""],["dialog-content","","formGroupName","fuzzyAreas"],[1,"row"],[1,"col-md-1"],[1,"mt-3"],["formArrayName","inputs",1,"col-md-11"],[4,"ngFor","ngForOf"],[1,"col-md-11"],["appearance","fill",4,"ngFor","ngForOf"],["dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary","type","submit",3,"disabled"],["mat-mini-fab","","type","button","color","primary","class","fab-control mx-3",3,"click",4,"ngIf"],[3,"formGroupName"],["appearance","fill",4,"ngIf"],["mat-mini-fab","","type","button","color","primary",1,"fab-control","mx-3",3,"click"],["appearance","fill"],["formControlName","area"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],["formControlName","output"]],template:function(t,e){1&t&&(i.TgZ(0,"form",0),i.NdJ("ngSubmit",function(t){return e.createRule(t)}),i.TgZ(1,"app-custom-modal"),i.TgZ(2,"h1",1),i._uU(3,"Add Rule"),i.qZA(),i.TgZ(4,"div",2),i.TgZ(5,"div",3),i.TgZ(6,"div",4),i.TgZ(7,"p",5),i._uU(8,"IF"),i.qZA(),i.qZA(),i.TgZ(9,"div",6),i.YNc(10,Y,5,5,"span",7),i.qZA(),i.qZA(),i._UZ(11,"mat-divider"),i._UZ(12,"br"),i.TgZ(13,"div",3),i.TgZ(14,"div",4),i.TgZ(15,"p",5),i._uU(16,"THEN"),i.qZA(),i.qZA(),i.TgZ(17,"div",8),i.YNc(18,D,6,3,"mat-form-field",9),i.ALo(19,"async"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(20,"div",10),i.TgZ(21,"button",11),i._uU(22," Save "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.Q6J("formGroup",e.form),i.xp6(10),i.Q6J("ngForOf",e.inputs.controls),i.xp6(8),i.Q6J("ngForOf",i.lcZ(19,4,e.mamdaniService.outputVariables$)),i.xp6(3),i.Q6J("disabled",!e.form.valid))},directives:[p._Y,p.JL,p.sg,_.R,p.x0,p.CE,f.sg,I.d,N.lW,O.ZT,f.O5,g.KE,g.hX,U.gD,p.JJ,p.u,J.ey,g.TO],pipes:[f.Ov],styles:[".fab-control[_ngcontent-%COMP%]{bottom:5px}"]}),t})();var M=r(5078),R=r(4670);function L(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"mat-list-item"),i.TgZ(1,"p",4),i._uU(2,"No Rules. Add some!"),i.qZA(),i.TgZ(3,"button",5),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).openDialog()}),i.TgZ(4,"mat-icon"),i._uU(5,"add"),i.qZA(),i.qZA(),i.qZA()}}function V(t,e){if(1&t&&(i.TgZ(0,"span"),i._uU(1),i.ALo(2,"lowercase"),i.qZA()),2&t){const t=i.oxw(2).$implicit;i.xp6(1),i.hij(" ",i.lcZ(2,1,t.type)," ")}}function j(t,e){if(1&t&&(i.TgZ(0,"span"),i.TgZ(1,"strong"),i._uU(2),i.qZA(),i._uU(3," is "),i.TgZ(4,"strong"),i._uU(5),i.qZA(),i.YNc(6,V,3,3,"span",1),i.qZA()),2&t){const t=e.$implicit,r=e.last;i.xp6(2),i.Oqu(t.name),i.xp6(3),i.Oqu(t.area),i.xp6(1),i.Q6J("ngIf",!r)}}function G(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"mat-list-item"),i.TgZ(1,"h4",4),i._uU(2),i.qZA(),i.TgZ(3,"p",4),i.TgZ(4,"span"),i._uU(5,"If "),i.qZA(),i.YNc(6,j,7,3,"span",3),i._uU(7," then "),i.TgZ(8,"strong"),i._uU(9),i.qZA(),i._uU(10," is "),i.TgZ(11,"strong"),i._uU(12),i.qZA(),i.qZA(),i.TgZ(13,"button",6),i.NdJ("click",function(){const e=i.CHM(t).index;return i.oxw(2).removeRule(e)}),i.TgZ(14,"mat-icon"),i._uU(15,"delete"),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=e.$implicit,r=e.index;i.xp6(2),i.hij("Rule ",r+1,""),i.xp6(4),i.Q6J("ngForOf",t.fuzzyAreas.inputs),i.xp6(3),i.Oqu(t.fuzzyAreas.output.name),i.xp6(3),i.Oqu(t.fuzzyAreas.output.area)}}function P(t,e){if(1&t&&(i.TgZ(0,"mat-list"),i.YNc(1,L,6,0,"mat-list-item",1),i.YNc(2,G,16,4,"mat-list-item",3),i.qZA()),2&t){const t=e.ngIf;i.xp6(1),i.Q6J("ngIf",0===t.length),i.xp6(1),i.Q6J("ngForOf",t)}}let H=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.dialog=e}ngOnInit(){}openDialog(){this.dialog.open(k,{width:"1200px"})}removeRule(t){this.mamdaniService.removeRule(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.q),i.Y36(O.uw))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-rules-list"]],decls:9,vars:3,consts:[[1,"mat-elevation-z0"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],[4,"ngFor","ngForOf"],["matLine",""],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"mat-card",0),i.TgZ(1,"mat-card-title"),i._uU(2,"Rules"),i.qZA(),i.TgZ(3,"mat-card-content"),i.YNc(4,P,3,2,"mat-list",1),i.ALo(5,"async"),i.qZA(),i.TgZ(6,"mat-card-actions"),i.TgZ(7,"button",2),i.NdJ("click",function(){return e.openDialog()}),i._uU(8," Add Rule "),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.Q6J("ngIf",i.lcZ(5,1,e.mamdaniService.rules$)))},directives:[l.a8,l.n5,l.dn,f.O5,l.hq,N.lW,M.i$,f.sg,M.Tg,J.X2,R.Hw],pipes:[f.Ov,f.i8],styles:[""]}),t})();function X(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Name is required "),i.qZA())}function B(t,e){if(1&t&&(i.TgZ(0,"mat-option",11),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.Q6J("value",t),i.xp6(1),i.hij(" ",t," ")}}function W(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Type is required "),i.qZA())}function K(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Required "),i.qZA())}function tt(t,e){if(1&t&&(i.TgZ(0,"span"),i.ynx(1),i.TgZ(2,"mat-form-field",12),i.TgZ(3,"mat-label"),i._uU(4),i.qZA(),i._UZ(5,"input",13),i.YNc(6,K,2,0,"mat-error",3),i.qZA(),i.BQk(),i.qZA()),2&t){const t=e.$implicit,r=e.index;i.xp6(4),i.hij("Range ",r+1,""),i.xp6(1),i.Q6J("formControlName",r),i.xp6(1),i.Q6J("ngIf",t.hasError("required"))}}let et=(()=>{class t{constructor(t){this.mamdaniService=t,this.fuzzyAreaTypes=Object.keys(m.N),this.onDestroy$=new u.xQ}get ranges(){return this.form.get("ranges")}ngOnInit(){}ngOnChanges(t){t.form&&this.form&&this.formTypeChangeSubsciption()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}formTypeChangeSubsciption(){this.form.get("type").valueChanges.pipe((0,z.R)(this.onDestroy$)).subscribe(t=>{this.ranges.clear();const e="Trapezoid"===t?4:3;for(let r=0;r<e;r++)this.ranges.push(new p.NI(0,p.kI.required))})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.q))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-fuzzy-area-form"]],inputs:{form:"form"},features:[i.TTD],decls:17,vars:5,consts:[[1,"fuzzy-area-form",3,"formGroup"],[1,"fuzzy-area-name-input"],["matInput","","placeholder","Name","formControlName","name","autocomplete","off"],[4,"ngIf"],["fxLayout","row wrap ","fxLayoutAlign","start center"],[1,"me-3"],["formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["formArrayName","ranges","fxLayout","row wrap","fxLayoutAlign","start center"],["for","fuzzy-area-value",1,"me-3"],[4,"ngFor","ngForOf"],[3,"value"],[1,"fuzzy-area-range-input","mx-3"],["matInput","","type","number","autocomplete","off","placeholder","Name",3,"formControlName"]],template:function(t,e){1&t&&(i.TgZ(0,"form",0),i.TgZ(1,"mat-form-field",1),i.TgZ(2,"mat-label"),i._uU(3,"Name"),i.qZA(),i._UZ(4,"input",2),i.YNc(5,X,2,0,"mat-error",3),i.qZA(),i.TgZ(6,"div",4),i.TgZ(7,"mat-form-field",5),i.TgZ(8,"mat-label"),i._uU(9,"Type"),i.qZA(),i.TgZ(10,"mat-select",6),i.YNc(11,B,2,2,"mat-option",7),i.qZA(),i.YNc(12,W,2,0,"mat-error",3),i.qZA(),i.TgZ(13,"div",8),i.TgZ(14,"label",9),i._uU(15,"Value:"),i.qZA(),i.YNc(16,tt,7,3,"span",10),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.Q6J("formGroup",e.form),i.xp6(5),i.Q6J("ngIf",e.form.get("name").hasError("required")),i.xp6(6),i.Q6J("ngForOf",e.fuzzyAreaTypes),i.xp6(1),i.Q6J("ngIf",e.form.get("type").hasError("required")),i.xp6(4),i.Q6J("ngForOf",e.ranges.controls))},directives:[p._Y,p.JL,p.sg,g.KE,g.hX,d.Nt,p.Fj,p.JJ,p.u,f.O5,s.xw,s.Wh,U.gD,f.sg,p.CE,g.TO,J.ey,p.wV],styles:[".fuzzy-area-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.fuzzy-area-form[_ngcontent-%COMP%]   .fuzzy-area-name-input[_ngcontent-%COMP%]{width:50%}.fuzzy-area-form[_ngcontent-%COMP%]   .fuzzy-area-range-input[_ngcontent-%COMP%]{width:100px}"]}),t})();function rt(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Required "),i.qZA())}function at(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Required "),i.qZA())}function nt(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Minumun number of fuzzy areas 1 "),i.qZA())}function it(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Required "),i.qZA())}function ot(t,e){1&t&&(i.TgZ(0,"mat-error"),i._uU(1," Required "),i.qZA())}function st(t,e){if(1&t&&(i.TgZ(0,"div"),i._UZ(1,"app-fuzzy-area-form",15),i._UZ(2,"mat-divider"),i.qZA()),2&t){const t=e.$implicit;i.xp6(1),i.Q6J("form",t)}}let ut=(()=>{class t{constructor(t,e,r){this.data=t,this.formCreatorService=e,this.mamdaniService=r,this.form=this.formCreatorService.createVariableForm(),this.onDestroy$=new u.xQ}get fuzzyAreasArray(){return this.form.get("fuzzyAreas")}ngOnInit(){this.form.get("fuzzyAreasCount").valueChanges.pipe((0,z.R)(this.onDestroy$)).subscribe(t=>{const e=this.form.get("fuzzyAreas");e.clear();for(let r=0;r<t;r++)e.push(this.formCreatorService.createFuzzyAreaForm())})}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}getDialogTitle(){return"inputs"===this.data.type?"Add Input Variable":"Edit Output Variable"}addVariable(t){t.preventDefault(),"inputs"===this.data.type?this.mamdaniService.addInputVariable(this.form.value):this.mamdaniService.addOutputVariable(this.form.value),this.form.reset(),this.form=this.formCreatorService.createVariableForm()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(O.WI),i.Y36(c.A),i.Y36(o.q))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-variables-form"]],decls:41,vars:9,consts:[[3,"formGroup","ngSubmit"],["dialog-title",""],["dialog-content",""],[1,"row"],[1,"col-6"],[1,"input-full-width"],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["matInput","","placeholder","fuzzy areas count","autocomplete","off","type","number","min","0","formControlName","fuzzyAreasCount"],["matInput","","placeholder","Start","autocomplete","off","type","number","formControlName","start"],["matInput","","placeholder","End","autocomplete","off","type","number","formControlName","end"],[1,"my-3"],[4,"ngFor","ngForOf"],["dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"form"]],template:function(t,e){1&t&&(i.TgZ(0,"form",0),i.NdJ("ngSubmit",function(t){return e.addVariable(t)}),i.TgZ(1,"app-custom-modal"),i.TgZ(2,"h1",1),i._uU(3),i.qZA(),i.TgZ(4,"div",2),i.TgZ(5,"div",3),i.TgZ(6,"div",4),i.TgZ(7,"mat-form-field",5),i.TgZ(8,"mat-label"),i._uU(9,"Variable Name"),i.qZA(),i._UZ(10,"input",6),i.YNc(11,rt,2,0,"mat-error",7),i.qZA(),i.qZA(),i.TgZ(12,"div",4),i.TgZ(13,"mat-form-field",5),i.TgZ(14,"mat-label"),i._uU(15,"Number of fuzzyAreas"),i.qZA(),i._UZ(16,"input",8),i.YNc(17,at,2,0,"mat-error",7),i.YNc(18,nt,2,0,"mat-error",7),i.qZA(),i.qZA(),i.qZA(),i._UZ(19,"br"),i.TgZ(20,"div",3),i.TgZ(21,"div",4),i.TgZ(22,"mat-form-field",5),i.TgZ(23,"mat-label"),i._uU(24,"Range: Start"),i.qZA(),i._UZ(25,"input",9),i.YNc(26,it,2,0,"mat-error",7),i.qZA(),i.qZA(),i.TgZ(27,"div",4),i.TgZ(28,"mat-form-field",5),i.TgZ(29,"mat-label"),i._uU(30,"Range: End"),i.qZA(),i._UZ(31,"input",10),i.YNc(32,ot,2,0,"mat-error",7),i.qZA(),i.qZA(),i.qZA(),i._UZ(33,"mat-divider"),i.TgZ(34,"div",11),i.TgZ(35,"h2"),i._uU(36,"Fuzzy Areas"),i.qZA(),i.YNc(37,st,3,1,"div",12),i.qZA(),i.qZA(),i.TgZ(38,"div",13),i.TgZ(39,"button",14),i._uU(40," Save "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.Q6J("formGroup",e.form),i.xp6(3),i.Oqu(e.getDialogTitle()),i.xp6(8),i.Q6J("ngIf",e.form.get("name").hasError("required")),i.xp6(6),i.Q6J("ngIf",e.form.get("fuzzyAreasCount").hasError("required")),i.xp6(1),i.Q6J("ngIf",e.form.get("fuzzyAreasCount").hasError("min")),i.xp6(8),i.Q6J("ngIf",e.form.get("start").hasError("required")),i.xp6(6),i.Q6J("ngIf",e.form.get("end").hasError("required")),i.xp6(5),i.Q6J("ngForOf",e.fuzzyAreasArray.controls),i.xp6(2),i.Q6J("disabled",!e.form.valid))},directives:[p._Y,p.JL,p.sg,_.R,g.KE,g.hX,d.Nt,p.Fj,p.JJ,p.u,f.O5,p.qQ,p.wV,I.d,f.sg,N.lW,O.ZT,g.TO,et],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}"]}),t})();var mt=r(611),ct=r(2762);let lt=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.formCreatorService=e,this.form=this.formCreatorService.createVariableForm(),this.onDestroy$=new u.xQ}get ranges(){return this.form.get("ranges")}ngOnChanges(t){t.fuzzyArea&&this.initForm()}ngOnInit(){this.initForm()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}updateFuzzyArea(t){t.preventDefault(),this.mamdaniService.addFuzzyArea(this.type,this.variableIndex,this.itemIndex,this.form.value)}initForm(){this.form=this.formCreatorService.createFuzzyAreaForm(),this.form.patchValue(this.fuzzyArea),this.fuzzyArea.ranges.forEach(t=>{this.ranges.push(new p.NI(t,p.kI.required))})}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.q),i.Y36(c.A))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-variables-list-item-form"]],inputs:{variable:"variable",fuzzyArea:"fuzzyArea",variableIndex:"variableIndex",itemIndex:"itemIndex",type:"type"},features:[i.TTD],decls:4,vars:3,consts:[[1,"mt-3",3,"formGroup","ngSubmit"],[2,"display","inline",3,"form"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,e){1&t&&(i.TgZ(0,"form",0),i.NdJ("ngSubmit",function(t){return e.updateFuzzyArea(t)}),i._UZ(1,"app-fuzzy-area-form",1),i.TgZ(2,"button",2),i._uU(3," Update "),i.qZA(),i.qZA()),2&t&&(i.Q6J("formGroup",e.form),i.xp6(1),i.Q6J("form",e.form),i.xp6(1),i.Q6J("disabled",!e.form.valid))},directives:[p._Y,p.JL,p.sg,et,N.lW],styles:[""]}),t})();function pt(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",6),i.TgZ(1,"h3"),i.TgZ(2,"span",7),i._uU(3),i.TgZ(4,"strong"),i._uU(5),i.qZA(),i.qZA(),i.TgZ(6,"button",8),i.NdJ("click",function(){return i.CHM(t),i.oxw().changeMode()}),i.TgZ(7,"mat-icon"),i._uU(8),i.qZA(),i.qZA(),i.qZA(),i._UZ(9,"span",9),i.TgZ(10,"button",10),i.NdJ("click",function(){i.CHM(t);const e=i.oxw();return e.removeItem.emit(e.itemIndex)}),i.TgZ(11,"mat-icon"),i._uU(12,"delete"),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(3),i.hij(" ",t.variable.name," goes from "),i.xp6(2),i.AsE("",t.variable.start," to ",t.variable.end,""),i.xp6(3),i.Oqu(t.edit?"close":"edit")}}function ft(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"mat-button-toggle",11),i.NdJ("change",function(e){const r=i.CHM(t).index;return i.oxw().toggleChanged(e,r)}),i._uU(1),i.qZA()}if(2&t){const t=e.$implicit;i.Q6J("value",t),i.xp6(1),i.hij(" ",t.name,"")}}function gt(t,e){if(1&t&&(i.TgZ(0,"span",14),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.xp6(1),i.Oqu(t)}}function dt(t,e){if(1&t&&(i.TgZ(0,"div"),i.TgZ(1,"p",12),i.TgZ(2,"strong"),i._uU(3),i.qZA(),i.YNc(4,gt,2,1,"span",13),i.qZA(),i.qZA()),2&t){const t=i.oxw();i.xp6(3),i.hij("",t.selectedFuzzyArea.type," :"),i.xp6(1),i.Q6J("ngForOf",t.selectedFuzzyArea.ranges)}}function Zt(t,e){if(1&t&&i._UZ(0,"app-variables-list-item-form",15),2&t){const t=i.oxw();i.Q6J("type",t.type)("variable",t.variable)("variableIndex",t.variableIndex)("itemIndex",t.itemIndex)("fuzzyArea",t.selectedFuzzyArea)}}function At(t,e){1&t&&i._UZ(0,"mat-divider")}let ht=(()=>{class t{constructor(){this.removeItem=new i.vpe}ngOnInit(){}changeMode(){if(this.edit=!this.edit,!this.selectedFuzzyArea&&this.edit)return this.selectedFuzzyArea=this.variable.fuzzyAreas[0],void(this.itemIndex=0)}toggleChanged(t,e){this.itemIndex=e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-variables-list-item"]],inputs:{variable:"variable",type:"type",variableIndex:"variableIndex"},outputs:{removeItem:"removeItem"},decls:8,vars:6,consts:[["matLine","","fxLayout","row",4,"ngIf"],["matLine",""],[1,"fuzzy-area-toogle-group",3,"ngModel","ngModelChange"],[3,"value","change",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"type","variable","variableIndex","itemIndex","fuzzyArea",4,"ngIf"],["matLine","","fxLayout","row"],[1,"me-2"],["mat-icon-button","","color","primary",3,"click"],[1,"header-spacer"],["mat-icon-button","","color","warn",3,"click"],[3,"value","change"],[1,"my-2"],["class","m-2",4,"ngFor","ngForOf"],[1,"m-2"],[3,"type","variable","variableIndex","itemIndex","fuzzyArea"]],template:function(t,e){1&t&&(i.YNc(0,pt,13,4,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"mat-button-toggle-group",2),i.NdJ("ngModelChange",function(t){return e.selectedFuzzyArea=t}),i.YNc(3,ft,2,2,"mat-button-toggle",3),i.qZA(),i.YNc(4,dt,5,2,"div",4),i.YNc(5,Zt,1,5,"app-variables-list-item-form",5),i.qZA(),i._UZ(6,"br"),i.YNc(7,At,1,0,"mat-divider",4)),2&t&&(i.Q6J("ngIf",e.variable),i.xp6(2),i.Q6J("ngModel",e.selectedFuzzyArea),i.xp6(1),i.Q6J("ngForOf",e.variable.fuzzyAreas),i.xp6(1),i.Q6J("ngIf",!e.edit&&e.selectedFuzzyArea),i.xp6(1),i.Q6J("ngIf",e.edit),i.xp6(2),i.Q6J("ngIf","inputs"===e.type))},directives:[f.O5,J.X2,ct.A9,p.JJ,p.On,f.sg,s.xw,N.lW,R.Hw,ct.Yi,lt,I.d],styles:["[_nghost-%COMP%]{width:100%}.header-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.fuzzy-area-toogle-group[_ngcontent-%COMP%]{flex-wrap:wrap}"]}),t})();const vt=["deleteDialog"];function yt(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"mat-list-item"),i.TgZ(1,"p",6),i._uU(2,"No Variables. Add some!"),i.qZA(),i.TgZ(3,"button",7),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).openDialog()}),i.TgZ(4,"mat-icon"),i._uU(5,"add"),i.qZA(),i.qZA(),i.qZA()}}function xt(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"mat-list-item"),i.TgZ(1,"app-variables-list-item",8),i.NdJ("removeItem",function(){const e=i.CHM(t).index;return i.oxw(2).onRemoveItem(e)}),i.qZA(),i.qZA()}if(2&t){const t=e.$implicit,r=e.index,a=i.oxw(2);i.xp6(1),i.Q6J("type",a.type)("variable",t)("variableIndex",r)}}function qt(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",9),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).openDialog()}),i._uU(1," Add variable "),i.qZA()}}function Tt(t,e){if(1&t&&(i.TgZ(0,"mat-card",2),i.TgZ(1,"mat-card-title"),i._uU(2),i.qZA(),i.TgZ(3,"mat-card-content"),i.TgZ(4,"mat-list"),i.YNc(5,yt,6,0,"mat-list-item",3),i.YNc(6,xt,2,3,"mat-list-item",4),i.qZA(),i.qZA(),i.TgZ(7,"mat-card-actions"),i.YNc(8,qt,2,0,"button",5),i.qZA(),i.qZA()),2&t){const t=e.ngIf,r=i.oxw();i.xp6(2),i.hij("",r.title," "),i.xp6(3),i.Q6J("ngIf",0===t.length),i.xp6(1),i.Q6J("ngForOf",t),i.xp6(2),i.Q6J("ngIf",r.showAddButton(t))}}function bt(t,e){1&t&&(i.TgZ(0,"h1",10),i._uU(1,"Delete Ouput Variable"),i.qZA(),i.TgZ(2,"div",11),i._uU(3," By deleting Output variable all rules will be automatically deleted. Are you sure? "),i.qZA(),i.TgZ(4,"div",12),i.TgZ(5,"button",13),i._uU(6,"Cancel"),i.qZA(),i.TgZ(7,"button",14),i._uU(8," Delete "),i.qZA(),i.qZA()),2&t&&(i.xp6(7),i.Q6J("mat-dialog-close",!0))}let zt=(()=>{class t{constructor(t,e,r){this.mamdaniService=t,this.dialog=e,this.route=r}ngOnInit(){this.route.url.pipe((0,mt.q)(1)).subscribe(t=>{this.type=t[0].path,this.handleSubscriptions()})}handleSubscriptions(){"inputs"===this.type?(this.title="Inputs",this.variables$=this.mamdaniService.inputVariables$):(this.title="Output",this.variables$=this.mamdaniService.outputVariables$)}openDialog(t){this.dialog.open(ut,{data:{type:this.type,variable:t},width:"1200px"})}onRemoveItem(t){"inputs"!==this.type?this.dialog.open(this.deleteDialog).afterClosed().subscribe(e=>{e&&this.mamdaniService.removeOutputVariable(t)}):this.mamdaniService.removeInputVariable(t)}showAddButton(t){return"inputs"===this.type||!t.length}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.q),i.Y36(O.uw),i.Y36(n.gz))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-variables-list"]],viewQuery:function(t,e){if(1&t&&i.Gf(vt,5),2&t){let t;i.iGM(t=i.CRH())&&(e.deleteDialog=t.first)}},decls:4,vars:3,consts:[["class","mat-elevation-z0",4,"ngIf"],["deleteDialog",""],[1,"mat-elevation-z0"],[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["matLine",""],["mat-icon-button","","color","primary",3,"click"],[3,"type","variable","variableIndex","removeItem"],["mat-raised-button","","color","primary",3,"click"],["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","","color","warn","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(i.YNc(0,Tt,9,4,"mat-card",0),i.ALo(1,"async"),i.YNc(2,bt,9,1,"ng-template",null,1,i.W1O)),2&t&&i.Q6J("ngIf",i.lcZ(1,1,e.variables$))},directives:[f.O5,l.a8,l.n5,l.dn,M.i$,f.sg,l.hq,M.Tg,J.X2,N.lW,R.Hw,ht,O.uh,O.xY,O.H8,O.ZT],pipes:[f.Ov],styles:["mat-list-item[_ngcontent-%COMP%]{margin-top:20px;height:auto!important}"]}),t})();const _t=[{path:"",component:b,children:[{path:"",redirectTo:"inputs"},{path:"inputs",component:zt},{path:"output",component:zt},{path:"rules",component:H}]}];let It=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[n.Bz.forChild(_t)],n.Bz]}),t})(),Nt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.m,It]]}),t})()}}]);