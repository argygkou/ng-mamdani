(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{D2yy:function(e,t,r){"use strict";r.r(t),r.d(t,"HomeModule",function(){return fe});var a=r("tyNb"),n=r("rWMZ"),i=r("fXoL"),o=r("zkuA"),c=r("Wp6s"),b=r("ofXK"),s=r("kmnG"),m=r("qFsG"),l=r("3Pt+");function u(e,t){if(1&e&&(i.Rb(0,"span"),i.Rb(1,"span",5),i.oc(2),i.Qb(),i.Rb(3,"span",6),i.oc(4),i.Qb(),i.Qb()),2&e){const e=t.$implicit,r=i.ac().$implicit,a=i.ac();i.Bb(2),i.qc("",e.name,":"),i.Bb(2),i.pc(a.calculateValue(e,r.example))}}const f=function(){return{standalone:!0}};function d(e,t){if(1&e&&(i.Rb(0,"div"),i.Rb(1,"div",1),i.Rb(2,"mat-form-field",2),i.Rb(3,"mat-label"),i.oc(4),i.Qb(),i.Rb(5,"input",3),i.Yb("ngModelChange",function(e){return t.$implicit.example=e}),i.Qb(),i.Qb(),i.Rb(6,"div",4),i.nc(7,u,5,2,"span",0),i.Qb(),i.Qb(),i.Qb()),2&e){const e=t.$implicit;i.Bb(4),i.pc(e.name),i.Bb(1),i.dc("placeholder",e.name)("ngModel",e.example)("ngModelOptions",i.ec(5,f)),i.Bb(2),i.dc("ngForOf",e.fuzzyAreas)}}let p=(()=>{class e{constructor(e){this.mamdaniService=e}ngOnInit(){}calculateValue(e,t){return n.a[e.type](e.ranges,t)}getResult(){return this.mamdaniService.getResult()}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(o.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-examples-form"]],decls:10,vars:2,consts:[[4,"ngFor","ngForOf"],[1,"example-container"],[1,"example-input"],["matInput","","type","number","required","",3,"placeholder","ngModel","ngModelOptions","ngModelChange"],[2,"display","inline"],[1,"contain-name"],[1,"contain-value"]],template:function(e,t){1&e&&(i.Rb(0,"mat-card"),i.Rb(1,"mat-card-title"),i.oc(2,"Provide example for your variables:"),i.Qb(),i.Rb(3,"mat-card-content"),i.nc(4,d,8,6,"div",0),i.Qb(),i.Rb(5,"mat-card-actions"),i.Rb(6,"p"),i.oc(7," Result is: "),i.Rb(8,"strong"),i.oc(9),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&e&&(i.Bb(4),i.dc("ngForOf",t.mamdaniService.inputVariables),i.Bb(5),i.pc(t.getResult()))},directives:[c.a,c.e,c.c,b.i,c.b,s.c,s.f,m.a,l.p,l.a,l.r,l.l,l.o],styles:[".example-container[_ngcontent-%COMP%]{margin-top:20px}.example-input[_ngcontent-%COMP%]{width:150px;margin:0 20px}.contain-name[_ngcontent-%COMP%]{margin-right:10px}.contain-value[_ngcontent-%COMP%]{margin-right:20px;font-weight:700}"]}),e})();var g=r("XNiG"),h=r("1G5W");let v=(()=>{class e{constructor(e){this.fb=e}createVariableForm(){return this.fb.group({name:[null,l.s.required],start:[0,l.s.required],end:[0,l.s.required],fuzzyAreasCount:[1,l.s.compose([l.s.required,l.s.min(1)])],fuzzyAreas:this.fb.array([this.createFuzzyAreaForm()]),example:0})}createFuzzyAreaForm(){return this.fb.group({name:[null,l.s.required],type:[null,l.s.required],ranges:this.fb.array([])})}createRuleForm(){return this.fb.group({name:[null,l.s.required],type:["AND"],result:0,fuzzyAreas:this.fb.group({inputs:this.fb.array([]),output:this.fb.control(null,l.s.required)})})}}return e.\u0275fac=function(t){return new(t||e)(i.Vb(l.c))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var R=r("THdD"),y=r("QibW"),Q=r("f0Cb"),z=r("bTqV"),A=r("0IaG"),F=r("d3UM"),I=r("FKr1");function B(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Name is required "),i.Qb())}function C(e,t){if(1&e&&(i.Rb(0,"mat-option",9),i.oc(1),i.Qb()),2&e){const e=t.$implicit;i.dc("value",e),i.Bb(1),i.qc(" ",e," ")}}function N(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Type is required "),i.Qb())}function O(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Required "),i.Qb())}function x(e,t){if(1&e&&(i.Rb(0,"span"),i.Pb(1),i.Rb(2,"mat-form-field",10),i.Rb(3,"mat-label"),i.oc(4),i.Qb(),i.Nb(5,"input",11),i.nc(6,O,2,0,"mat-error",3),i.Qb(),i.Ob(),i.Qb()),2&e){const e=t.$implicit,r=t.index;i.Bb(4),i.qc("Range ",r+1,""),i.Bb(1),i.dc("formControlName",r),i.Bb(1),i.dc("ngIf",e.hasError("required"))}}let S=(()=>{class e{constructor(e,t){this.mamdaniService=e,this.formCreatorService=t,this.fuzzyAreaTypes=Object.keys(n.a),this.onDestroy$=new g.a}get ranges(){return this.form.get("ranges")}ngOnInit(){this.form.get("type").valueChanges.pipe(Object(h.a)(this.onDestroy$)).subscribe(e=>{this.ranges.clear();const t="Trapezoid"===e?4:3;for(let r=0;r<t;r++)this.ranges.push(new l.d(0,l.s.required))})}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(o.a),i.Mb(v))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-fuzzy-area-form"]],inputs:{form:"form"},decls:17,vars:5,consts:[[3,"formGroup"],[2,"width","50%"],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["formArrayName","ranges"],["for","fuzzy-area-value",2,"margin","0 10px"],[4,"ngFor","ngForOf"],[3,"value"],[2,"width","100px","margin","0 10px"],["matInput","","type","number","placeholder","Name",3,"formControlName"]],template:function(e,t){1&e&&(i.Rb(0,"form",0),i.Rb(1,"mat-form-field",1),i.Rb(2,"mat-label"),i.oc(3,"Name"),i.Qb(),i.Nb(4,"input",2),i.nc(5,B,2,0,"mat-error",3),i.Qb(),i.Nb(6,"br"),i.Rb(7,"mat-form-field"),i.Rb(8,"mat-label"),i.oc(9,"Type"),i.Qb(),i.Rb(10,"mat-select",4),i.nc(11,C,2,2,"mat-option",5),i.Qb(),i.nc(12,N,2,0,"mat-error",3),i.Qb(),i.Rb(13,"span",6),i.Rb(14,"label",7),i.oc(15,"Value:"),i.Qb(),i.nc(16,x,7,3,"span",8),i.Qb(),i.Qb()),2&e&&(i.dc("formGroup",t.form),i.Bb(5),i.dc("ngIf",t.form.get("name").hasError("required")),i.Bb(6),i.dc("ngForOf",t.fuzzyAreaTypes),i.Bb(1),i.dc("ngIf",t.form.get("type").hasError("required")),i.Bb(4),i.dc("ngForOf",t.ranges.controls))},directives:[l.t,l.m,l.g,s.c,s.f,m.a,l.a,l.l,l.f,b.j,F.a,b.i,l.b,s.b,I.h,l.p],styles:[".fuzzy-areas[_ngcontent-%COMP%]{margin:20px 0}"]}),e})();function M(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Required "),i.Qb())}function q(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Required "),i.Qb())}function w(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Minumun number of fuzzy areas 1 "),i.Qb())}function V(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Required "),i.Qb())}function D(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Required "),i.Qb())}function k(e,t){if(1&e&&(i.Rb(0,"div"),i.Nb(1,"app-fuzzy-area-form",19),i.Nb(2,"mat-divider"),i.Qb()),2&e){const e=t.$implicit;i.Bb(1),i.dc("form",e)}}let $=(()=>{class e{constructor(e,t){this.formCreatorService=e,this.mamdaniService=t,this.variableType=new l.d("input"),this.form=this.formCreatorService.createVariableForm(),this.onDestroy$=new g.a}get fuzzyAreasArray(){return this.form.get("fuzzyAreas")}ngOnInit(){this.form.get("fuzzyAreasCount").valueChanges.pipe(Object(h.a)(this.onDestroy$)).subscribe(e=>{const t=this.form.get("fuzzyAreas");t.clear();for(let r=0;r<e;r++)t.push(this.formCreatorService.createFuzzyAreaForm())})}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}addVariable(e){e.preventDefault(),"input"===this.variableType.value?this.mamdaniService.addInputVariable(this.form.value):this.mamdaniService.addOutputVariable(this.form.value),this.form.reset(),this.form=this.formCreatorService.createVariableForm()}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(v),i.Mb(o.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-variables-form"]],decls:48,vars:9,consts:[[3,"formGroup","ngSubmit"],["dialog-title",""],["dialog-content",""],[1,"variables-form-container"],["aria-label","Select an option",3,"formControl"],["value","input"],["value","output"],[1,"row"],[1,"col-6"],[1,"input-full-width"],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["matInput","","placeholder","fuzzy areas count","type","number","min","0","formControlName","fuzzyAreasCount"],["matInput","","placeholder","Start","type","number","min","0","formControlName","start"],["matInput","","placeholder","End","type","number","min","0","formControlName","end"],[1,"fuzzy-area"],[4,"ngFor","ngForOf"],["dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"form"]],template:function(e,t){1&e&&(i.Rb(0,"form",0),i.Yb("ngSubmit",function(e){return t.addVariable(e)}),i.Rb(1,"app-custom-modal"),i.Rb(2,"h1",1),i.oc(3,"Add Input Variables"),i.Qb(),i.Rb(4,"div",2),i.Rb(5,"div",3),i.Rb(6,"mat-radio-group",4),i.Rb(7,"mat-radio-button",5),i.oc(8,"Input"),i.Qb(),i.Rb(9,"mat-radio-button",6),i.oc(10,"Output"),i.Qb(),i.Qb(),i.Nb(11,"br"),i.Rb(12,"div",7),i.Rb(13,"div",8),i.Rb(14,"mat-form-field",9),i.Rb(15,"mat-label"),i.oc(16,"Variable Name"),i.Qb(),i.Nb(17,"input",10),i.nc(18,M,2,0,"mat-error",11),i.Qb(),i.Qb(),i.Rb(19,"div",8),i.Rb(20,"mat-form-field",9),i.Rb(21,"mat-label"),i.oc(22,"Number of fuzzyAreas"),i.Qb(),i.Nb(23,"input",12),i.nc(24,q,2,0,"mat-error",11),i.nc(25,w,2,0,"mat-error",11),i.Qb(),i.Qb(),i.Qb(),i.Nb(26,"br"),i.Rb(27,"div",7),i.Rb(28,"div",8),i.Rb(29,"mat-form-field",9),i.Rb(30,"mat-label"),i.oc(31,"Range: Start"),i.Qb(),i.Nb(32,"input",13),i.nc(33,V,2,0,"mat-error",11),i.Qb(),i.Qb(),i.Rb(34,"div",8),i.Rb(35,"mat-form-field",9),i.Rb(36,"mat-label"),i.oc(37,"Range: End"),i.Qb(),i.Nb(38,"input",14),i.nc(39,D,2,0,"mat-error",11),i.Qb(),i.Qb(),i.Qb(),i.Nb(40,"mat-divider"),i.Rb(41,"div",15),i.Rb(42,"h2"),i.oc(43,"Fuzzy Areas"),i.Qb(),i.nc(44,k,3,1,"div",16),i.Qb(),i.Qb(),i.Qb(),i.Rb(45,"div",17),i.Rb(46,"button",18),i.oc(47," Save "),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&e&&(i.dc("formGroup",t.form),i.Bb(6),i.dc("formControl",t.variableType),i.Bb(12),i.dc("ngIf",t.form.get("name").hasError("required")),i.Bb(6),i.dc("ngIf",t.form.get("fuzzyAreasCount").hasError("required")),i.Bb(1),i.dc("ngIf",t.form.get("fuzzyAreasCount").hasError("min")),i.Bb(8),i.dc("ngIf",t.form.get("start").hasError("required")),i.Bb(6),i.dc("ngIf",t.form.get("end").hasError("required")),i.Bb(5),i.dc("ngForOf",t.fuzzyAreasArray.controls),i.Bb(2),i.dc("disabled",!t.form.valid))},directives:[l.t,l.m,l.g,R.a,y.b,l.l,l.e,y.a,s.c,s.f,m.a,l.a,l.f,b.j,l.p,Q.a,b.i,z.a,A.c,s.b,S],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.variables-form-container[_ngcontent-%COMP%]{margin-top:20px}.fuzzy-area[_ngcontent-%COMP%]{margin:20px 0}"]}),e})();var G=r("MutI"),P=r("NFeN"),E=r("jaxi");let Y=(()=>{class e{constructor(e,t){this.mamdaniService=e,this.formCreatorService=t,this.form=this.formCreatorService.createVariableForm(),this.onDestroy$=new g.a}get ranges(){return this.form.get("ranges")}ngOnChanges(e){e.fuzzyArea&&this.initForm()}ngOnInit(){this.initForm()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}updateFuzzyArea(e){e.preventDefault(),this.variable.fuzzyAreas[this.index]=this.form.value,this.mamdaniService.addFuzzyArea("inputs",this.index,this.variable)}initForm(){this.form=this.formCreatorService.createFuzzyAreaForm(),this.form.patchValue(this.fuzzyArea),this.fuzzyArea.ranges.forEach(e=>{this.ranges.push(new l.d(e,l.s.required))})}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(o.a),i.Mb(v))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-variables-list-item-form"]],inputs:{variable:"variable",fuzzyArea:"fuzzyArea",index:"index"},features:[i.zb],decls:4,vars:3,consts:[[1,"item-form",3,"formGroup","ngSubmit"],[2,"display","inline",3,"form"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(e,t){1&e&&(i.Rb(0,"form",0),i.Yb("ngSubmit",function(e){return t.updateFuzzyArea(e)}),i.Nb(1,"app-fuzzy-area-form",1),i.Rb(2,"button",2),i.oc(3," Update "),i.Qb(),i.Qb()),2&e&&(i.dc("formGroup",t.form),i.Bb(1),i.dc("form",t.form),i.Bb(1),i.dc("disabled",!t.form.valid))},directives:[l.t,l.m,l.g,S,z.a],styles:[".item-form[_ngcontent-%COMP%]{margin-top:10px}"]}),e})();function _(e,t){if(1&e){const e=i.Sb();i.Rb(0,"button",10),i.Yb("click",function(){i.hc(e);const t=i.ac();return t.removeItem.emit(t.index)}),i.Rb(1,"mat-icon"),i.oc(2,"delete"),i.Qb(),i.Qb()}}function j(e,t){if(1&e){const e=i.Sb();i.Rb(0,"mat-button-toggle",11),i.Yb("change",function(r){i.hc(e);const a=t.index;return i.ac().toggleChanged(r,a)}),i.oc(1),i.Qb()}if(2&e){const e=t.$implicit;i.dc("value",e),i.Bb(1),i.qc(" ",e.name,"")}}function T(e,t){if(1&e&&i.Nb(0,"app-variables-list-item-form",12),2&e){const e=i.ac();i.dc("variable",e.variable)("index",e.index)("fuzzyArea",e.selectedFuzzyArea)}}function L(e,t){1&e&&i.Nb(0,"mat-divider")}let J=(()=>{class e{constructor(){this.removeItem=new i.n}ngOnInit(){}changeMode(){this.edit=!this.edit,this.selectedFuzzyArea=this.edit?this.variable.fuzzyAreas[0]:null}toggleChanged(e,t){this.index=t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["app-variables-list-item"]],inputs:{variable:"variable",type:"type",index:"index"},outputs:{removeItem:"removeItem"},decls:16,vars:9,consts:[["matLine","",2,"display","flex"],[1,"list-item-title"],["mat-icon-button","","color","primary",3,"click"],[1,"header-spacer"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["matLine",""],[3,"ngModel","ngModelChange"],[3,"value","change",4,"ngFor","ngForOf"],[3,"variable","index","fuzzyArea",4,"ngIf"],[4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],[3,"value","change"],[3,"variable","index","fuzzyArea"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"h3"),i.Rb(2,"span",1),i.oc(3),i.Rb(4,"strong"),i.oc(5),i.Qb(),i.Qb(),i.Rb(6,"button",2),i.Yb("click",function(){return t.changeMode()}),i.Rb(7,"mat-icon"),i.oc(8),i.Qb(),i.Qb(),i.Qb(),i.Nb(9,"span",3),i.nc(10,_,3,0,"button",4),i.Qb(),i.Rb(11,"p",5),i.Rb(12,"mat-button-toggle-group",6),i.Yb("ngModelChange",function(e){return t.selectedFuzzyArea=e}),i.nc(13,j,2,2,"mat-button-toggle",7),i.Qb(),i.nc(14,T,1,3,"app-variables-list-item-form",8),i.Qb(),i.nc(15,L,1,0,"mat-divider",9)),2&e&&(i.Bb(3),i.qc(" ",t.variable.name," goes from "),i.Bb(2),i.rc("",t.variable.start," to ",t.variable.end,""),i.Bb(3),i.pc(t.edit?"close":"edit"),i.Bb(2),i.dc("ngIf","inputs"===t.type),i.Bb(2),i.dc("ngModel",t.selectedFuzzyArea),i.Bb(1),i.dc("ngForOf",t.variable.fuzzyAreas),i.Bb(1),i.dc("ngIf",t.edit),i.Bb(1),i.dc("ngIf","inputs"===t.type))},directives:[I.f,z.a,P.a,b.j,E.b,l.l,l.o,b.i,E.a,Y,Q.a],styles:["[_nghost-%COMP%]{width:100%}.header-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.list-item-title[_ngcontent-%COMP%]{margin-right:10px}"]}),e})();function K(e,t){if(1&e){const e=i.Sb();i.Rb(0,"mat-list-item"),i.Rb(1,"p",3),i.oc(2,"No Variables. Add some!"),i.Qb(),i.Rb(3,"button",4),i.Yb("click",function(){return i.hc(e),i.ac().openDialog()}),i.Rb(4,"mat-icon"),i.oc(5,"add"),i.Qb(),i.Qb(),i.Qb()}}function W(e,t){if(1&e){const e=i.Sb();i.Rb(0,"mat-list-item"),i.Rb(1,"app-variables-list-item",5),i.Yb("removeItem",function(t){return i.hc(e),i.ac().onRemoveItem(t)}),i.Qb(),i.Qb()}if(2&e){const e=t.$implicit,r=t.index,a=i.ac();i.Bb(1),i.dc("type",a.type)("index",r)("variable",e)}}function H(e,t){if(1&e){const e=i.Sb();i.Rb(0,"button",6),i.Yb("click",function(){return i.hc(e),i.ac().openDialog()}),i.oc(1," Add variable "),i.Qb()}}let X=(()=>{class e{constructor(e,t){this.mamdaniService=e,this.dialog=t}ngOnInit(){}openDialog(){this.dialog.open($,{width:"1200px"})}onRemoveItem(e){this.mamdaniService.removeInputVariable(e)}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(o.a),i.Mb(A.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-variables-list"]],inputs:{title:"title",type:"type",variables:"variables"},decls:9,vars:4,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["matLine",""],["mat-icon-button","","color","primary",3,"click"],[3,"type","index","variable","removeItem"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(i.Rb(0,"mat-card"),i.Rb(1,"mat-card-title"),i.oc(2),i.Qb(),i.Rb(3,"mat-card-content"),i.Rb(4,"mat-list"),i.nc(5,K,6,0,"mat-list-item",0),i.nc(6,W,2,3,"mat-list-item",1),i.Qb(),i.Qb(),i.Rb(7,"mat-card-actions"),i.nc(8,H,2,0,"button",2),i.Qb(),i.Qb()),2&e&&(i.Bb(2),i.qc("",t.title," "),i.Bb(3),i.dc("ngIf",0===t.variables.length),i.Bb(1),i.dc("ngForOf",t.variables),i.Bb(2),i.dc("ngIf","inputs"===t.type))},directives:[c.a,c.e,c.c,G.a,b.j,b.i,c.b,G.b,I.f,z.a,P.a,J],styles:["mat-list-item[_ngcontent-%COMP%]{margin-top:20px;height:auto!important}"]}),e})();function U(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Required "),i.Qb())}function Z(e,t){if(1&e){const e=i.Sb();i.Rb(0,"span",19),i.Yb("click",function(){return i.hc(e),i.ac(2).toggleNorm()}),i.oc(1),i.Qb()}if(2&e){const e=i.ac(2);i.Bb(1),i.pc(e.typeControl.value)}}function ee(e,t){if(1&e&&(i.Rb(0,"mat-option",20),i.oc(1),i.Qb()),2&e){const e=t.$implicit;i.dc("value",e),i.Bb(1),i.qc(" ",e.name," ")}}function te(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Required "),i.Qb())}function re(e,t){if(1&e&&(i.Rb(0,"span"),i.nc(1,Z,2,1,"span",16),i.Rb(2,"mat-form-field",12),i.Rb(3,"mat-label"),i.oc(4),i.Qb(),i.Rb(5,"mat-select",17),i.nc(6,ee,2,2,"mat-option",18),i.Qb(),i.nc(7,te,2,0,"mat-error",5),i.Qb(),i.Qb()),2&e){const e=t.$implicit,r=t.index,a=i.ac();i.Bb(1),i.dc("ngIf",r>0),i.Bb(3),i.pc(a.mamdaniService.inputVariables[r].name),i.Bb(1),i.dc("formControlName",r),i.Bb(1),i.dc("ngForOf",a.mamdaniService.inputVariables[r].fuzzyAreas),i.Bb(1),i.dc("ngIf",e.hasError("required"))}}function ae(e,t){if(1&e&&(i.Rb(0,"mat-option",20),i.oc(1),i.Qb()),2&e){const e=t.$implicit;i.dc("value",e),i.Bb(1),i.qc(" ",e.name," ")}}function ne(e,t){if(1&e&&(i.Rb(0,"mat-select",21),i.nc(1,ae,2,2,"mat-option",18),i.Qb()),2&e){const e=t.$implicit;i.Bb(1),i.dc("ngForOf",e.fuzzyAreas)}}function ie(e,t){1&e&&(i.Rb(0,"mat-error"),i.oc(1," Required "),i.Qb())}let oe=(()=>{class e{constructor(e,t){this.mamdaniService=e,this.formCreatorService=t}get typeControl(){return this.form.get("type")}get fuzzyAreas(){return this.form.get("fuzzyAreas")}get inputs(){return this.fuzzyAreas.get("inputs")}get output(){return this.fuzzyAreas.get("output")}ngOnInit(){this.initForm()}createRule(e){e.preventDefault();const t=this.form.value;t.fuzzyAreas.inputs=t.fuzzyAreas.inputs.filter(e=>e),t.fuzzyAreas.inputs.length>0&&(this.mamdaniService.addRule(t),this.form.reset())}toggleNorm(){this.typeControl.setValue("AND"===this.typeControl.value?"OR":"AND")}initForm(){this.form=this.formCreatorService.createRuleForm(),this.mamdaniService.inputVariables.forEach(()=>{this.inputs.push(new l.d(null))})}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(o.a),i.Mb(v))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-rules-composer"]],decls:28,vars:7,consts:[[3,"formGroup","ngSubmit"],["dialog-title",""],["dialog-content",""],[1,"input-full-width"],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["formGroupName","fuzzyAreas",1,"row"],[1,"col-1"],[2,"margin-top","20px"],["formArrayName","inputs",1,"col-7"],[4,"ngFor","ngForOf"],[1,"col-3"],["appearance","fill"],["formControlName","output",4,"ngFor","ngForOf"],["dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary","type","submit",3,"disabled"],["style","margin: 0 10px",3,"click",4,"ngIf"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[2,"margin","0 10px",3,"click"],[3,"value"],["formControlName","output"]],template:function(e,t){1&e&&(i.Rb(0,"form",0),i.Yb("ngSubmit",function(e){return t.createRule(e)}),i.Rb(1,"app-custom-modal"),i.Rb(2,"h1",1),i.oc(3,"Add Rule"),i.Qb(),i.Rb(4,"div",2),i.Rb(5,"mat-form-field",3),i.Rb(6,"mat-label"),i.oc(7,"Rule Name"),i.Qb(),i.Nb(8,"input",4),i.nc(9,U,2,0,"mat-error",5),i.Qb(),i.Rb(10,"div",6),i.Rb(11,"div",7),i.Rb(12,"p",8),i.oc(13,"IF"),i.Qb(),i.Qb(),i.Rb(14,"div",9),i.nc(15,re,8,5,"span",10),i.Qb(),i.Rb(16,"div",7),i.Rb(17,"p",8),i.oc(18,"THEN"),i.Qb(),i.Qb(),i.Rb(19,"div",11),i.Rb(20,"mat-form-field",12),i.Rb(21,"mat-label"),i.oc(22),i.Qb(),i.nc(23,ne,2,1,"mat-select",13),i.nc(24,ie,2,0,"mat-error",5),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(25,"div",14),i.Rb(26,"button",15),i.oc(27," Save "),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&e&&(i.dc("formGroup",t.form),i.Bb(9),i.dc("ngIf",t.form.get("name").hasError("required")),i.Bb(6),i.dc("ngForOf",t.inputs.controls),i.Bb(7),i.pc(t.mamdaniService.outputVariables[0].name),i.Bb(1),i.dc("ngForOf",t.mamdaniService.outputVariables),i.Bb(1),i.dc("ngIf",t.output.hasError("required")),i.Bb(2),i.dc("disabled",!t.form.valid))},directives:[l.t,l.m,l.g,R.a,s.c,s.f,m.a,l.a,l.l,l.f,b.j,l.h,l.b,b.i,z.a,A.c,s.b,F.a,I.h],styles:[""]}),e})();function ce(e,t){if(1&e){const e=i.Sb();i.Rb(0,"mat-list-item"),i.Rb(1,"p",3),i.oc(2,"No Rules. Add some!"),i.Qb(),i.Rb(3,"button",4),i.Yb("click",function(){return i.hc(e),i.ac().openDialog()}),i.Rb(4,"mat-icon"),i.oc(5,"add"),i.Qb(),i.Qb(),i.Qb()}}function be(e,t){if(1&e){const e=i.Sb();i.Rb(0,"mat-list-item"),i.Rb(1,"p",3),i.oc(2),i.Qb(),i.Rb(3,"button",5),i.Yb("click",function(){i.hc(e);const r=t.index;return i.ac().removeRule(r)}),i.Rb(4,"mat-icon"),i.oc(5,"delete"),i.Qb(),i.Qb(),i.Qb()}if(2&e){const e=t.$implicit;i.Bb(2),i.sc(" ",e.name," has: ",e.fuzzyAreas.output.name," of: ",e.result," ")}}let se=(()=>{class e{constructor(e,t){this.mamdaniService=e,this.dialog=t}ngOnInit(){}openDialog(){this.dialog.open(oe,{width:"1200px"})}removeRule(e){this.mamdaniService.removeRule(e)}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(o.a),i.Mb(A.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-rules-list"]],decls:10,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click"],["matLine",""],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"]],template:function(e,t){1&e&&(i.Rb(0,"mat-card"),i.Rb(1,"mat-card-title"),i.oc(2,"Rules"),i.Qb(),i.Rb(3,"mat-card-content"),i.Rb(4,"mat-list"),i.nc(5,ce,6,0,"mat-list-item",0),i.nc(6,be,6,3,"mat-list-item",1),i.Qb(),i.Qb(),i.Rb(7,"mat-card-actions"),i.Rb(8,"button",2),i.Yb("click",function(){return t.openDialog()}),i.oc(9," Add Rule "),i.Qb(),i.Qb(),i.Qb()),2&e&&(i.Bb(5),i.dc("ngIf",0===t.mamdaniService.rules.length),i.Bb(1),i.dc("ngForOf",t.mamdaniService.rules))},directives:[c.a,c.e,c.c,G.a,b.j,b.i,c.b,z.a,G.b,I.f,P.a],styles:[""]}),e})();const me=[{path:"",component:(()=>{class e{constructor(e){this.mamdaniService=e}ngOnInit(){}calculateValue(e,t){return n.a[e.type](e.ranges,t)}getResult(){return this.mamdaniService.getResult()}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(o.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-home"]],decls:8,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-4"],[1,"col-sm-8"],["type","inputs",3,"title","variables"],["type","outputs",3,"title","variables"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Nb(3,"app-examples-form"),i.Qb(),i.Rb(4,"div",3),i.Nb(5,"app-variables-list",4),i.Nb(6,"app-variables-list",5),i.Nb(7,"app-rules-list"),i.Qb(),i.Qb(),i.Qb()),2&e&&(i.Bb(5),i.dc("title","Input Variables")("variables",t.mamdaniService.inputVariables),i.Bb(1),i.dc("title","Output Variables")("variables",t.mamdaniService.outputVariables))},directives:[p,X,se],styles:[""]}),e})()}];let le=(()=>{class e{}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[a.a.forChild(me)],a.a]}),e})();var ue=r("PCNd");let fe=(()=>{class e{}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[le,ue.a]]}),e})()}}]);