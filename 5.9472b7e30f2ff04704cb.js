(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{QEwL:function(t,e,r){"use strict";r.r(e),r.d(e,"ConfigModule",function(){return Bt});var a=r("tyNb"),n=r("fXoL"),i=r("zkuA"),o=r("XNiG"),c=r("rWMZ"),b=r("rhaP"),m=r("Wp6s"),s=r("3Pt+"),u=r("ofXK"),l=r("kmnG"),f=r("qFsG");function p(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Please enter a value "),n.Rb())}function d(t,e){if(1&t&&(n.Sb(0,"mat-error"),n.uc(1," Minimum value: "),n.Sb(2,"strong"),n.uc(3),n.Rb(),n.Rb()),2&t){const t=n.cc().$implicit;n.Bb(3),n.vc(t.get("example").errors.min.min)}}function g(t,e){if(1&t&&(n.Sb(0,"mat-error"),n.uc(1," Maximum value: "),n.Sb(2,"strong"),n.uc(3),n.Rb(),n.Rb()),2&t){const t=n.cc().$implicit;n.Bb(3),n.vc(t.get("example").errors.max.max)}}function h(t,e){if(1&t&&(n.Sb(0,"span"),n.Sb(1,"span",11),n.uc(2),n.Rb(),n.Sb(3,"span",12),n.uc(4),n.dc(5,"number"),n.Rb(),n.Rb()),2&t){const t=e.$implicit,r=n.cc().$implicit,a=n.cc();n.Bb(2),n.wc("",t.name,":"),n.Bb(2),n.vc(n.ec(5,2,a.calculateValue(t,r.get("example").value)))}}function v(t,e){if(1&t&&(n.Sb(0,"div",5),n.Sb(1,"mat-form-field",6),n.Sb(2,"mat-label"),n.uc(3),n.Rb(),n.Nb(4,"input",7),n.tc(5,p,2,0,"mat-error",8),n.tc(6,d,4,1,"mat-error",8),n.tc(7,g,4,1,"mat-error",8),n.Rb(),n.Sb(8,"div",9),n.tc(9,h,6,4,"span",10),n.Rb(),n.Rb()),2&t){const t=e.$implicit,r=e.index,a=n.cc();n.hc("formGroupName",r),n.Bb(3),n.vc(t.get("name").value),n.Bb(2),n.hc("ngIf",t.get("example").hasError("required")),n.Bb(1),n.hc("ngIf",t.get("example").hasError("min")),n.Bb(1),n.hc("ngIf",t.get("example").hasError("max")),n.Bb(2),n.hc("ngForOf",a.getFuzzyAreas(t.get("name").value))}}let S=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.formCreatorService=e,this.destroy$=new o.a}ngOnInit(){this.initExampleForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calculateValue(t,e){return e?c.a[t.type](t.ranges,e):0}getFuzzyAreas(t){const e=this.inputVariables.find(e=>e.name===t);return e&&e.fuzzyAreas||[]}getResult(){const t=this.form.get("variables").value;return this.mamdaniService.getResult(t)}initExampleForm(){this.form=this.formCreatorService.initExampleForm(),this.mamdaniService.inputVariables$.pipe().subscribe(t=>{this.inputVariables=t;const e=this.form.get("variables");e.clear(),this.inputVariables.forEach(t=>{e.push(this.formCreatorService.addExample(t))})})}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.a),n.Mb(b.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-examples-form"]],decls:12,vars:3,consts:[[1,"mat-elevation-z4"],[3,"formGroup"],["formArrayName","variables"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"ml-4"],[3,"formGroupName"],[1,"example-input","mx-3"],["matInput","","type","number","autocomplete","off","formControlName","example"],[4,"ngIf"],[1,"fuzzy-area-values","ml-3"],[4,"ngFor","ngForOf"],[1,"mr-2"],[1,"mr-3","contain-value"]],template:function(t,e){1&t&&(n.Sb(0,"mat-card",0),n.Sb(1,"mat-card-title"),n.uc(2,"Provide example for your variables:"),n.Rb(),n.Sb(3,"mat-card-content"),n.Sb(4,"form",1),n.Sb(5,"div",2),n.tc(6,v,10,6,"div",3),n.Rb(),n.Rb(),n.Rb(),n.Sb(7,"mat-card-actions"),n.Sb(8,"p",4),n.uc(9," Result is: "),n.Sb(10,"strong"),n.uc(11),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.Bb(4),n.hc("formGroup",e.form),n.Bb(2),n.hc("ngForOf",e.form.get("variables").controls),n.Bb(5),n.vc(e.getResult()))},directives:[m.a,m.e,m.c,s.v,s.p,s.i,s.c,u.l,m.b,s.j,l.c,l.f,f.a,s.s,s.b,s.o,s.g,u.m,l.b],pipes:[u.e],styles:[".example-input[_ngcontent-%COMP%]{width:150px}.contain-value[_ngcontent-%COMP%]{font-weight:700}.fuzzy-area-values[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}"]}),t})();var y=r("wZkO"),R=r("1G5W"),z=r("THdD"),I=r("QibW"),x=r("f0Cb"),B=r("bTqV"),w=r("0IaG"),F=r("XiUz"),A=r("d3UM"),O=r("FKr1");function C(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Name is required "),n.Rb())}function N(t,e){if(1&t&&(n.Sb(0,"mat-option",11),n.uc(1),n.Rb()),2&t){const t=e.$implicit;n.hc("value",t),n.Bb(1),n.wc(" ",t," ")}}function $(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Type is required "),n.Rb())}function M(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Required "),n.Rb())}function G(t,e){if(1&t&&(n.Sb(0,"span"),n.Qb(1),n.Sb(2,"mat-form-field",12),n.Sb(3,"mat-label"),n.uc(4),n.Rb(),n.Nb(5,"input",13),n.tc(6,M,2,0,"mat-error",3),n.Rb(),n.Pb(),n.Rb()),2&t){const t=e.$implicit,r=e.index;n.Bb(4),n.wc("Range ",r+1,""),n.Bb(1),n.hc("formControlName",r),n.Bb(1),n.hc("ngIf",t.hasError("required"))}}let V=(()=>{class t{constructor(t){this.mamdaniService=t,this.fuzzyAreaTypes=Object.keys(c.a),this.onDestroy$=new o.a}get ranges(){return this.form.get("ranges")}ngOnInit(){}ngOnChanges(t){t.form&&this.form&&this.formTypeChangeSubsciption()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}formTypeChangeSubsciption(){this.form.get("type").valueChanges.pipe(Object(R.a)(this.onDestroy$)).subscribe(t=>{this.ranges.clear();const e="Trapezoid"===t?4:3;for(let r=0;r<e;r++)this.ranges.push(new s.e(0,s.u.required))})}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-fuzzy-area-form"]],inputs:{form:"form"},features:[n.zb],decls:17,vars:5,consts:[[1,"fuzzy-area-form",3,"formGroup"],[1,"fuzzy-area-name-input"],["matInput","","placeholder","Name","formControlName","name","autocomplete","off"],[4,"ngIf"],["fxLayout","row wrap ","fxLayoutAlign","start center"],[1,"mr-3"],["formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["formArrayName","ranges","fxLayout","row wrap","fxLayoutAlign","start center"],["for","fuzzy-area-value",1,"mr-3"],[4,"ngFor","ngForOf"],[3,"value"],[1,"fuzzy-area-range-input","mx-3"],["matInput","","type","number","autocomplete","off","placeholder","Name",3,"formControlName"]],template:function(t,e){1&t&&(n.Sb(0,"form",0),n.Sb(1,"mat-form-field",1),n.Sb(2,"mat-label"),n.uc(3,"Name"),n.Rb(),n.Nb(4,"input",2),n.tc(5,C,2,0,"mat-error",3),n.Rb(),n.Sb(6,"div",4),n.Sb(7,"mat-form-field",5),n.Sb(8,"mat-label"),n.uc(9,"Type"),n.Rb(),n.Sb(10,"mat-select",6),n.tc(11,N,2,2,"mat-option",7),n.Rb(),n.tc(12,$,2,0,"mat-error",3),n.Rb(),n.Sb(13,"div",8),n.Sb(14,"label",9),n.uc(15,"Value:"),n.Rb(),n.tc(16,G,7,3,"span",10),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.hc("formGroup",e.form),n.Bb(5),n.hc("ngIf",e.form.get("name").hasError("required")),n.Bb(6),n.hc("ngForOf",e.fuzzyAreaTypes),n.Bb(1),n.hc("ngIf",e.form.get("type").hasError("required")),n.Bb(4),n.hc("ngForOf",e.ranges.controls))},directives:[s.v,s.p,s.i,l.c,l.f,f.a,s.b,s.o,s.g,u.m,F.c,F.b,A.a,u.l,s.c,l.b,O.h,s.s],styles:[".fuzzy-area-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.fuzzy-area-form[_ngcontent-%COMP%]   .fuzzy-area-name-input[_ngcontent-%COMP%]{width:50%}.fuzzy-area-form[_ngcontent-%COMP%]   .fuzzy-area-range-input[_ngcontent-%COMP%]{width:100px}"]}),t})();function D(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Required "),n.Rb())}function k(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Required "),n.Rb())}function E(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Minumun number of fuzzy areas 1 "),n.Rb())}function q(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Required "),n.Rb())}function P(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Required "),n.Rb())}function T(t,e){if(1&t&&(n.Sb(0,"div"),n.Nb(1,"app-fuzzy-area-form",18),n.Nb(2,"mat-divider"),n.Rb()),2&t){const t=e.$implicit;n.Bb(1),n.hc("form",t)}}let _=(()=>{class t{constructor(t,e){this.formCreatorService=t,this.mamdaniService=e,this.variableType=new s.e("input"),this.form=this.formCreatorService.createVariableForm(),this.onDestroy$=new o.a}get fuzzyAreasArray(){return this.form.get("fuzzyAreas")}ngOnInit(){this.form.get("fuzzyAreasCount").valueChanges.pipe(Object(R.a)(this.onDestroy$)).subscribe(t=>{const e=this.form.get("fuzzyAreas");e.clear();for(let r=0;r<t;r++)e.push(this.formCreatorService.createFuzzyAreaForm())})}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}addVariable(t){t.preventDefault(),"input"===this.variableType.value?this.mamdaniService.addInputVariable(this.form.value):this.mamdaniService.addOutputVariable(this.form.value),this.form.reset(),this.form=this.formCreatorService.createVariableForm()}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(b.a),n.Mb(i.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-variables-form"]],decls:48,vars:9,consts:[[3,"formGroup","ngSubmit"],["dialog-title",""],["dialog-content",""],["aria-label","Select an option",3,"formControl"],["value","input"],["value","output"],[1,"row"],[1,"col-6"],[1,"input-full-width"],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["matInput","","placeholder","fuzzy areas count","autocomplete","off","type","number","min","0","formControlName","fuzzyAreasCount"],["matInput","","placeholder","Start","autocomplete","off","type","number","min","0","formControlName","start"],["matInput","","placeholder","End","autocomplete","off","type","number","min","0","formControlName","end"],[1,"my-3"],[4,"ngFor","ngForOf"],["dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"form"]],template:function(t,e){1&t&&(n.Sb(0,"form",0),n.ac("ngSubmit",function(t){return e.addVariable(t)}),n.Sb(1,"app-custom-modal"),n.Sb(2,"h1",1),n.uc(3,"Add Input Variables"),n.Rb(),n.Sb(4,"div",2),n.Sb(5,"div"),n.Sb(6,"mat-radio-group",3),n.Sb(7,"mat-radio-button",4),n.uc(8,"Input"),n.Rb(),n.Sb(9,"mat-radio-button",5),n.uc(10,"Output"),n.Rb(),n.Rb(),n.Nb(11,"br"),n.Sb(12,"div",6),n.Sb(13,"div",7),n.Sb(14,"mat-form-field",8),n.Sb(15,"mat-label"),n.uc(16,"Variable Name"),n.Rb(),n.Nb(17,"input",9),n.tc(18,D,2,0,"mat-error",10),n.Rb(),n.Rb(),n.Sb(19,"div",7),n.Sb(20,"mat-form-field",8),n.Sb(21,"mat-label"),n.uc(22,"Number of fuzzyAreas"),n.Rb(),n.Nb(23,"input",11),n.tc(24,k,2,0,"mat-error",10),n.tc(25,E,2,0,"mat-error",10),n.Rb(),n.Rb(),n.Rb(),n.Nb(26,"br"),n.Sb(27,"div",6),n.Sb(28,"div",7),n.Sb(29,"mat-form-field",8),n.Sb(30,"mat-label"),n.uc(31,"Range: Start"),n.Rb(),n.Nb(32,"input",12),n.tc(33,q,2,0,"mat-error",10),n.Rb(),n.Rb(),n.Sb(34,"div",7),n.Sb(35,"mat-form-field",8),n.Sb(36,"mat-label"),n.uc(37,"Range: End"),n.Rb(),n.Nb(38,"input",13),n.tc(39,P,2,0,"mat-error",10),n.Rb(),n.Rb(),n.Rb(),n.Nb(40,"mat-divider"),n.Sb(41,"div",14),n.Sb(42,"h2"),n.uc(43,"Fuzzy Areas"),n.Rb(),n.tc(44,T,3,1,"div",15),n.Rb(),n.Rb(),n.Rb(),n.Sb(45,"div",16),n.Sb(46,"button",17),n.uc(47," Save "),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.hc("formGroup",e.form),n.Bb(6),n.hc("formControl",e.variableType),n.Bb(12),n.hc("ngIf",e.form.get("name").hasError("required")),n.Bb(6),n.hc("ngIf",e.form.get("fuzzyAreasCount").hasError("required")),n.Bb(1),n.hc("ngIf",e.form.get("fuzzyAreasCount").hasError("min")),n.Bb(8),n.hc("ngIf",e.form.get("start").hasError("required")),n.Bb(6),n.hc("ngIf",e.form.get("end").hasError("required")),n.Bb(5),n.hc("ngForOf",e.fuzzyAreasArray.controls),n.Bb(2),n.hc("disabled",!e.form.valid))},directives:[s.v,s.p,s.i,z.a,I.b,s.o,s.f,I.a,l.c,l.f,f.a,s.b,s.g,u.m,s.s,x.a,u.l,B.b,w.d,l.b,V],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}"]}),t})();var L=r("MutI"),j=r("NFeN"),J=r("jaxi");let K=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.formCreatorService=e,this.form=this.formCreatorService.createVariableForm(),this.onDestroy$=new o.a}get ranges(){return this.form.get("ranges")}ngOnChanges(t){t.fuzzyArea&&this.initForm()}ngOnInit(){this.initForm()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}updateFuzzyArea(t){t.preventDefault(),this.mamdaniService.addFuzzyArea(this.type,this.variableIndex,this.itemIndex,this.form.value)}initForm(){this.form=this.formCreatorService.createFuzzyAreaForm(),this.form.patchValue(this.fuzzyArea),this.fuzzyArea.ranges.forEach(t=>{this.ranges.push(new s.e(t,s.u.required))})}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.a),n.Mb(b.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-variables-list-item-form"]],inputs:{variable:"variable",fuzzyArea:"fuzzyArea",variableIndex:"variableIndex",itemIndex:"itemIndex",type:"type"},features:[n.zb],decls:4,vars:3,consts:[[1,"mt-3",3,"formGroup","ngSubmit"],[2,"display","inline",3,"form"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,e){1&t&&(n.Sb(0,"form",0),n.ac("ngSubmit",function(t){return e.updateFuzzyArea(t)}),n.Nb(1,"app-fuzzy-area-form",1),n.Sb(2,"button",2),n.uc(3," Update "),n.Rb(),n.Rb()),2&t&&(n.hc("formGroup",e.form),n.Bb(1),n.hc("form",e.form),n.Bb(1),n.hc("disabled",!e.form.valid))},directives:[s.v,s.p,s.i,V,B.b],styles:[""]}),t})();function Q(t,e){if(1&t){const t=n.Tb();n.Sb(0,"button",11),n.ac("click",function(){n.nc(t);const e=n.cc(2);return e.removeItem.emit(e.itemIndex)}),n.Sb(1,"mat-icon"),n.uc(2,"delete"),n.Rb(),n.Rb()}}function W(t,e){if(1&t){const t=n.Tb();n.Sb(0,"div",6),n.Sb(1,"h3"),n.Sb(2,"span",7),n.uc(3),n.Sb(4,"strong"),n.uc(5),n.Rb(),n.Rb(),n.Sb(6,"button",8),n.ac("click",function(){return n.nc(t),n.cc().changeMode()}),n.Sb(7,"mat-icon"),n.uc(8),n.Rb(),n.Rb(),n.Rb(),n.Nb(9,"span",9),n.tc(10,Q,3,0,"button",10),n.Rb()}if(2&t){const t=n.cc();n.Bb(3),n.wc(" ",t.variable.name," goes from "),n.Bb(2),n.xc("",t.variable.start," to ",t.variable.end,""),n.Bb(3),n.vc(t.edit?"close":"edit"),n.Bb(2),n.hc("ngIf","inputs"===t.type)}}function X(t,e){if(1&t){const t=n.Tb();n.Sb(0,"mat-button-toggle",12),n.ac("change",function(r){n.nc(t);const a=e.index;return n.cc().toggleChanged(r,a)}),n.uc(1),n.Rb()}if(2&t){const t=e.$implicit;n.hc("value",t),n.Bb(1),n.wc(" ",t.name,"")}}function U(t,e){if(1&t&&(n.Sb(0,"span",15),n.uc(1),n.Rb()),2&t){const t=e.$implicit;n.Bb(1),n.vc(t)}}function H(t,e){if(1&t&&(n.Sb(0,"div"),n.Sb(1,"p",13),n.Sb(2,"strong"),n.uc(3),n.Rb(),n.tc(4,U,2,1,"span",14),n.Rb(),n.Rb()),2&t){const t=n.cc();n.Bb(3),n.wc("",t.selectedFuzzyArea.type," :"),n.Bb(1),n.hc("ngForOf",t.selectedFuzzyArea.ranges)}}function Z(t,e){if(1&t&&n.Nb(0,"app-variables-list-item-form",16),2&t){const t=n.cc();n.hc("type",t.type)("variable",t.variable)("variableIndex",t.variableIndex)("itemIndex",t.itemIndex)("fuzzyArea",t.selectedFuzzyArea)}}function Y(t,e){1&t&&n.Nb(0,"mat-divider")}let tt=(()=>{class t{constructor(){this.removeItem=new n.n}ngOnInit(){}changeMode(){if(this.edit=!this.edit,!this.selectedFuzzyArea&&this.edit)return this.selectedFuzzyArea=this.variable.fuzzyAreas[0],void(this.itemIndex=0)}toggleChanged(t,e){this.itemIndex=e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-variables-list-item"]],inputs:{variable:"variable",type:"type",variableIndex:"variableIndex"},outputs:{removeItem:"removeItem"},decls:8,vars:6,consts:[["matLine","","fxLayout","row",4,"ngIf"],["matLine",""],[1,"fuzzy-area-toogle-group",3,"ngModel","ngModelChange"],[3,"value","change",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"type","variable","variableIndex","itemIndex","fuzzyArea",4,"ngIf"],["matLine","","fxLayout","row"],[1,"mr-2"],["mat-icon-button","","color","primary",3,"click"],[1,"header-spacer"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],[3,"value","change"],[1,"my-2"],["class","m-2",4,"ngFor","ngForOf"],[1,"m-2"],[3,"type","variable","variableIndex","itemIndex","fuzzyArea"]],template:function(t,e){1&t&&(n.tc(0,W,11,5,"div",0),n.Sb(1,"div",1),n.Sb(2,"mat-button-toggle-group",2),n.ac("ngModelChange",function(t){return e.selectedFuzzyArea=t}),n.tc(3,X,2,2,"mat-button-toggle",3),n.Rb(),n.tc(4,H,5,2,"div",4),n.tc(5,Z,1,5,"app-variables-list-item-form",5),n.Rb(),n.Nb(6,"br"),n.tc(7,Y,1,0,"mat-divider",4)),2&t&&(n.hc("ngIf",e.variable),n.Bb(2),n.hc("ngModel",e.selectedFuzzyArea),n.Bb(1),n.hc("ngForOf",e.variable.fuzzyAreas),n.Bb(1),n.hc("ngIf",!e.edit&&e.selectedFuzzyArea),n.Bb(1),n.hc("ngIf",e.edit),n.Bb(2),n.hc("ngIf","inputs"===e.type))},directives:[u.m,O.f,J.b,s.o,s.r,u.l,F.c,B.b,j.a,J.a,K,x.a],styles:["[_nghost-%COMP%]{width:100%}.header-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.fuzzy-area-toogle-group[_ngcontent-%COMP%]{flex-wrap:wrap}"]}),t})();function et(t,e){if(1&t){const t=n.Tb();n.Sb(0,"mat-list-item"),n.Sb(1,"p",3),n.uc(2,"No Variables. Add some!"),n.Rb(),n.Sb(3,"button",4),n.ac("click",function(){return n.nc(t),n.cc().openDialog()}),n.Sb(4,"mat-icon"),n.uc(5,"add"),n.Rb(),n.Rb(),n.Rb()}}function rt(t,e){if(1&t){const t=n.Tb();n.Sb(0,"mat-list-item"),n.Sb(1,"app-variables-list-item",5),n.ac("removeItem",function(){n.nc(t);const r=e.index;return n.cc().onRemoveItem(r)}),n.Rb(),n.Rb()}if(2&t){const t=e.$implicit,r=e.index,a=n.cc();n.Bb(1),n.hc("type",a.type)("variable",t)("variableIndex",r)}}function at(t,e){if(1&t){const t=n.Tb();n.Sb(0,"button",6),n.ac("click",function(){return n.nc(t),n.cc().openDialog()}),n.uc(1," Add variable "),n.Rb()}}let nt=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.dialog=e}ngOnInit(){}openDialog(){this.dialog.open(_,{width:"1200px"})}onRemoveItem(t){this.mamdaniService.removeInputVariable(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.a),n.Mb(w.b))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-variables-list"]],inputs:{title:"title",type:"type",variables:"variables"},decls:9,vars:4,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["matLine",""],["mat-icon-button","","color","primary",3,"click"],[3,"type","variable","variableIndex","removeItem"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(n.Sb(0,"mat-card"),n.Sb(1,"mat-card-title"),n.uc(2),n.Rb(),n.Sb(3,"mat-card-content"),n.Sb(4,"mat-list"),n.tc(5,et,6,0,"mat-list-item",0),n.tc(6,rt,2,3,"mat-list-item",1),n.Rb(),n.Rb(),n.Sb(7,"mat-card-actions"),n.tc(8,at,2,0,"button",2),n.Rb(),n.Rb()),2&t&&(n.Bb(2),n.wc("",e.title," "),n.Bb(3),n.hc("ngIf",0===e.variables.length),n.Bb(1),n.hc("ngForOf",e.variables),n.Bb(2),n.hc("ngIf","inputs"===e.type))},directives:[m.a,m.e,m.c,L.a,u.m,u.l,m.b,L.b,O.f,B.b,j.a,tt],styles:["mat-list-item[_ngcontent-%COMP%]{margin-top:20px;height:auto!important}"]}),t})();function it(t,e){if(1&t){const t=n.Tb();n.Sb(0,"button",14),n.ac("click",function(){return n.nc(t),n.cc(2).toggleNorm()}),n.uc(1),n.Rb()}if(2&t){const t=n.cc(2);n.Bb(1),n.wc(" ",t.typeControl.value," ")}}function ot(t,e){if(1&t&&(n.Sb(0,"mat-option",19),n.uc(1),n.Rb()),2&t){const t=e.$implicit;n.hc("value",t),n.Bb(1),n.wc(" ",t.name," ")}}function ct(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Required "),n.Rb())}function bt(t,e){if(1&t&&(n.Sb(0,"mat-form-field",15),n.Sb(1,"mat-label"),n.uc(2),n.Rb(),n.Sb(3,"mat-select",16),n.tc(4,ot,2,2,"mat-option",17),n.Rb(),n.tc(5,ct,2,0,"mat-error",18),n.Rb()),2&t){const t=e.ngIf,r=n.cc(),a=r.index,i=r.$implicit;n.Bb(2),n.vc(t[a].name),n.Bb(2),n.hc("ngForOf",t[a].fuzzyAreas),n.Bb(1),n.hc("ngIf",i.hasError("required"))}}function mt(t,e){if(1&t&&(n.Sb(0,"span"),n.tc(1,it,2,1,"button",12),n.Qb(2,13),n.tc(3,bt,6,3,"mat-form-field",9),n.dc(4,"async"),n.Pb(),n.Rb()),2&t){const t=e.index,r=n.cc();n.Bb(1),n.hc("ngIf",t>0),n.Bb(1),n.hc("formGroupName",t),n.Bb(1),n.hc("ngIf",n.ec(4,3,r.mamdaniService.inputVariables$))}}const st=function(t,e){return{name:t,area:e}};function ut(t,e){if(1&t&&(n.Sb(0,"mat-option",19),n.uc(1),n.Rb()),2&t){const t=e.$implicit,r=n.cc().ngIf;n.hc("value",n.kc(2,st,r.name,t.name)),n.Bb(1),n.wc(" ",t.name," ")}}function lt(t,e){1&t&&(n.Sb(0,"mat-error"),n.uc(1," Required "),n.Rb())}function ft(t,e){if(1&t&&(n.Sb(0,"mat-form-field",15),n.Sb(1,"mat-label"),n.uc(2),n.Rb(),n.Sb(3,"mat-select",20),n.tc(4,ut,2,5,"mat-option",17),n.Rb(),n.tc(5,lt,2,0,"mat-error",18),n.Rb()),2&t){const t=e.ngIf,r=n.cc();n.Bb(2),n.vc(t.name),n.Bb(2),n.hc("ngForOf",t.fuzzyAreas),n.Bb(1),n.hc("ngIf",r.output.hasError("required"))}}let pt=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.formCreatorService=e,this.destroy$=new o.a}get typeControl(){return this.form.get("type")}get fuzzyAreas(){return this.form.get("fuzzyAreas")}get inputs(){return this.fuzzyAreas.get("inputs")}get output(){return this.fuzzyAreas.get("output")}ngOnInit(){this.initForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}createRule(t){t.preventDefault();const e=this.form.value,r=e.fuzzyAreas.inputs.filter(t=>t.area);e.fuzzyAreas.inputs=r.map(t=>({name:t.name,area:t.area.name})),e.fuzzyAreas.inputs.length>0&&(this.mamdaniService.addRule(e),this.form.reset())}toggleNorm(){this.typeControl.setValue("AND"===this.typeControl.value?"OR":"AND")}initForm(){this.form=this.formCreatorService.createRuleForm(),this.mamdaniService.inputVariables$.pipe(Object(R.a)(this.destroy$)).subscribe(t=>{t.forEach(t=>{this.inputs.push(new s.h({name:new s.e(t.name),area:new s.e(null)}))})})}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.a),n.Mb(b.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-rules-composer"]],decls:23,vars:6,consts:[[3,"formGroup","ngSubmit"],["dialog-title",""],["dialog-content","","formGroupName","fuzzyAreas"],[1,"row"],[1,"col-md-1"],[1,"mt-3"],["formArrayName","inputs",1,"col-md-11"],[4,"ngFor","ngForOf"],[1,"col-md-11"],["appearance","fill",4,"ngIf"],["dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary","type","submit",3,"disabled"],["mat-mini-fab","","type","button","color","primary","class","fab-control mx-3",3,"click",4,"ngIf"],[3,"formGroupName"],["mat-mini-fab","","type","button","color","primary",1,"fab-control","mx-3",3,"click"],["appearance","fill"],["formControlName","area"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],["formControlName","output"]],template:function(t,e){1&t&&(n.Sb(0,"form",0),n.ac("ngSubmit",function(t){return e.createRule(t)}),n.Sb(1,"app-custom-modal"),n.Sb(2,"h1",1),n.uc(3,"Add Rule"),n.Rb(),n.Sb(4,"div",2),n.Sb(5,"div",3),n.Sb(6,"div",4),n.Sb(7,"p",5),n.uc(8,"IF"),n.Rb(),n.Rb(),n.Sb(9,"div",6),n.tc(10,mt,5,5,"span",7),n.Rb(),n.Rb(),n.Nb(11,"mat-divider"),n.Nb(12,"br"),n.Sb(13,"div",3),n.Sb(14,"div",4),n.Sb(15,"p",5),n.uc(16,"THEN"),n.Rb(),n.Rb(),n.Sb(17,"div",8),n.tc(18,ft,6,3,"mat-form-field",9),n.dc(19,"async"),n.Rb(),n.Rb(),n.Rb(),n.Sb(20,"div",10),n.Sb(21,"button",11),n.uc(22," Save "),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.hc("formGroup",e.form),n.Bb(10),n.hc("ngForOf",e.inputs.controls),n.Bb(8),n.hc("ngIf",n.ec(19,4,e.mamdaniService.outputVariable$)),n.Bb(3),n.hc("disabled",!e.form.valid))},directives:[s.v,s.p,s.i,z.a,s.j,s.c,u.l,x.a,u.m,B.b,w.d,l.c,l.f,A.a,s.o,s.g,O.h,l.b],pipes:[u.b],styles:[".fab-control[_ngcontent-%COMP%]{bottom:5px}"]}),t})();function dt(t,e){if(1&t){const t=n.Tb();n.Sb(0,"mat-list-item"),n.Sb(1,"p",3),n.uc(2,"No Rules. Add some!"),n.Rb(),n.Sb(3,"button",4),n.ac("click",function(){return n.nc(t),n.cc(2).openDialog()}),n.Sb(4,"mat-icon"),n.uc(5,"add"),n.Rb(),n.Rb(),n.Rb()}}function gt(t,e){if(1&t&&(n.Sb(0,"span"),n.uc(1),n.dc(2,"lowercase"),n.Rb()),2&t){const t=n.cc(2).$implicit;n.Bb(1),n.wc(" ",n.ec(2,1,t.type)," ")}}function ht(t,e){if(1&t&&(n.Sb(0,"span"),n.Sb(1,"strong"),n.uc(2),n.Rb(),n.uc(3," is "),n.Sb(4,"strong"),n.uc(5),n.Rb(),n.tc(6,gt,3,3,"span",0),n.Rb()),2&t){const t=e.$implicit,r=e.last;n.Bb(2),n.vc(t.name),n.Bb(3),n.vc(t.area),n.Bb(1),n.hc("ngIf",!r)}}function vt(t,e){if(1&t){const t=n.Tb();n.Sb(0,"mat-list-item"),n.Sb(1,"h4",3),n.uc(2),n.Rb(),n.Sb(3,"p",3),n.Sb(4,"span"),n.uc(5,"If "),n.Rb(),n.tc(6,ht,7,3,"span",2),n.uc(7," then "),n.Sb(8,"strong"),n.uc(9),n.dc(10,"async"),n.Rb(),n.uc(11," is "),n.Sb(12,"strong"),n.uc(13),n.Rb(),n.Rb(),n.Sb(14,"button",5),n.ac("click",function(){n.nc(t);const r=e.index;return n.cc(2).removeRule(r)}),n.Sb(15,"mat-icon"),n.uc(16,"delete"),n.Rb(),n.Rb(),n.Rb()}if(2&t){const t=e.$implicit,r=e.index,a=n.cc(2);let i=null;n.Bb(2),n.wc("Rule ",r+1,""),n.Bb(4),n.hc("ngForOf",t.fuzzyAreas.inputs),n.Bb(3),n.vc(null==(i=n.ec(10,4,a.mamdaniService.outputVariable$))?null:i.name),n.Bb(4),n.vc(t.fuzzyAreas.output.area)}}function St(t,e){if(1&t&&(n.Sb(0,"mat-list"),n.tc(1,dt,6,0,"mat-list-item",0),n.tc(2,vt,17,6,"mat-list-item",2),n.Rb()),2&t){const t=e.ngIf;n.Bb(1),n.hc("ngIf",0===t.length),n.Bb(1),n.hc("ngForOf",t)}}let yt=(()=>{class t{constructor(t,e){this.mamdaniService=t,this.dialog=e}ngOnInit(){}openDialog(){this.dialog.open(pt,{width:"1200px"})}removeRule(t){this.mamdaniService.removeRule(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.a),n.Mb(w.b))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-rules-list"]],decls:9,vars:3,consts:[[4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],[4,"ngFor","ngForOf"],["matLine",""],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(n.Sb(0,"mat-card"),n.Sb(1,"mat-card-title"),n.uc(2,"Rules"),n.Rb(),n.Sb(3,"mat-card-content"),n.tc(4,St,3,2,"mat-list",0),n.dc(5,"async"),n.Rb(),n.Sb(6,"mat-card-actions"),n.Sb(7,"button",1),n.ac("click",function(){return e.openDialog()}),n.uc(8," Add Rule "),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.Bb(4),n.hc("ngIf",n.ec(5,1,e.mamdaniService.rules$)))},directives:[m.a,m.e,m.c,u.m,m.b,B.b,L.a,u.l,L.b,O.f,j.a],pipes:[u.b,u.j],styles:[""]}),t})();const Rt=function(t){return[t]},zt=[{path:"",component:(()=>{class t{constructor(t){this.mamdaniService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.a))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-config"]],decls:16,vars:8,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-4"],[1,"col-md-8"],["label","Inputs"],["title","Input Variables","type","inputs",3,"variables"],["label","Output"],["title","Output Variables","type","outputs",3,"variables"],["label","Rules"]],template:function(t,e){1&t&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Nb(3,"app-examples-form"),n.Rb(),n.Sb(4,"div",3),n.Sb(5,"mat-card"),n.Sb(6,"mat-card-content"),n.Sb(7,"mat-tab-group"),n.Sb(8,"mat-tab",4),n.Nb(9,"app-variables-list",5),n.dc(10,"async"),n.Rb(),n.Sb(11,"mat-tab",6),n.Nb(12,"app-variables-list",7),n.dc(13,"async"),n.Rb(),n.Sb(14,"mat-tab",8),n.Nb(15,"app-rules-list"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.Bb(9),n.hc("variables",n.ec(10,2,e.mamdaniService.inputVariables$)),n.Bb(3),n.hc("variables",n.jc(6,Rt,n.ec(13,4,e.mamdaniService.outputVariable$))))},directives:[S,m.a,m.c,y.b,y.a,nt,yt],pipes:[u.b],styles:[""]}),t})()}];let It=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({imports:[[a.c.forChild(zt)],a.c]}),t})();var xt=r("PCNd");let Bt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({imports:[[xt.a,It]]}),t})()}}]);