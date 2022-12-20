"use strict";(self.webpackChunkng_mamdani=self.webpackChunkng_mamdani||[]).push([[444],{4444:(Rt,T,m)=>{m.r(T),m.d(T,{ConfigModule:()=>Ut});var U=m(8884),_=m(3060),t=m(4650),f=m(4836),s=m(6895),u=m(3546),z=m(3848),d=m(7579),F=m(2394),h=m(8036),i=m(4006),p=m(9549),y=m(4144);function V(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a value "),t.qZA())}function R(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Minimum value: "),t.TgZ(2,"strong"),t._uU(3),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(3),t.Oqu(e.get("example").errors.min.min)}}function w(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Maximum value: "),t.TgZ(2,"strong"),t._uU(3),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(3),t.Oqu(e.get("example").errors.max.max)}}function L(o,a){if(1&o&&(t.TgZ(0,"span")(1,"span",11),t._uU(2),t.qZA(),t.TgZ(3,"span",12),t._uU(4),t.ALo(5,"number"),t.qZA()()),2&o){const e=a.$implicit,n=t.oxw().$implicit,r=t.oxw();t.xp6(2),t.hij("",e.name,":"),t.xp6(2),t.Oqu(t.lcZ(5,2,r.calculateValue(e,n.get("example").value)))}}function Q(o,a){if(1&o&&(t.TgZ(0,"div",5)(1,"mat-form-field",6)(2,"mat-label"),t._uU(3),t.qZA(),t._UZ(4,"input",7),t.YNc(5,V,2,0,"mat-error",8),t.YNc(6,R,4,1,"mat-error",8),t.YNc(7,w,4,1,"mat-error",8),t.qZA(),t.TgZ(8,"div",9),t.YNc(9,L,6,4,"span",10),t.qZA()()),2&o){const e=a.$implicit,n=a.index,r=t.oxw();t.Q6J("formGroupName",n),t.xp6(3),t.Oqu(e.get("name").value),t.xp6(2),t.Q6J("ngIf",e.get("example").hasError("required")),t.xp6(1),t.Q6J("ngIf",e.get("example").hasError("min")),t.xp6(1),t.Q6J("ngIf",e.get("example").hasError("max")),t.xp6(2),t.Q6J("ngForOf",r.getFuzzyAreas(e.get("name").value))}}let Y=(()=>{class o{constructor(e,n){this.mamdaniService=e,this.formCreatorService=n,this.destroy$=new d.x}ngOnInit(){this.initExampleForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calculateValue(e,n){return n?F.N[e.type](e.ranges,n):0}getFuzzyAreas(e){const n=this.inputVariables.find(r=>r.name===e);return n&&n.fuzzyAreas||[]}getResult(){const e=this.form.get("variables").value,n=this.mamdaniService.getResult(e);return n?`${n.fuzzyAreas?.output.name} is ${n.fuzzyAreas?.output.area}`:""}initExampleForm(){this.form=this.formCreatorService.initExampleForm(),this.mamdaniService.inputVariables$.pipe().subscribe(e=>{this.inputVariables=e;const n=this.form.get("variables");n.clear(),this.inputVariables.forEach(r=>{n.push(this.formCreatorService.addExample(r))})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.q),t.Y36(h.A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-examples-form"]],decls:12,vars:3,consts:[[1,"mat-elevation-z4"],[3,"formGroup"],["formArrayName","variables"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"ms-4"],[3,"formGroupName"],[1,"example-input","mx-3","mt-3"],["matInput","","type","number","autocomplete","off","formControlName","example"],[4,"ngIf"],[1,"fuzzy-area-values","ms-3"],[4,"ngFor","ngForOf"],[1,"me-2"],[1,"me-3","contain-value"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-title"),t._uU(2,"Provide example for your variables:"),t.qZA(),t.TgZ(3,"mat-card-content")(4,"form",1)(5,"div",2),t.YNc(6,Q,10,6,"div",3),t.qZA()()(),t.TgZ(7,"mat-card-actions")(8,"p",4),t._uU(9," Result is: "),t.TgZ(10,"strong"),t._uU(11),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",n.form),t.xp6(2),t.Q6J("ngForOf",n.form.get("variables").controls),t.xp6(5),t.Oqu(n.getResult()))},dependencies:[s.sg,s.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE,p.TO,p.KE,p.hX,y.Nt,u.a8,u.dn,u.n5,u.hq,s.JJ],styles:[".example-input[_ngcontent-%COMP%]{width:300px}.contain-value[_ngcontent-%COMP%]{font-weight:700}.fuzzy-area-values[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}"]}),o})();function S(o,a){if(1&o&&(t.TgZ(0,"a",6,7),t._uU(2),t.ALo(3,"titlecase"),t.qZA()),2&o){const e=a.$implicit,n=t.MAs(1);t.Q6J("routerLink",e)("active",n.isActive),t.xp6(2),t.hij(" ",t.lcZ(3,3,e)," ")}}let $=(()=>{class o{constructor(e){this.mamdaniService=e,this.links=["inputs","output","rules"]}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-config"]],decls:9,vars:1,consts:[[1,"config-container"],[1,"examples-container"],[1,"tabs-container"],[1,"mat-elevation-z4"],["mat-tab-nav-bar",""],["mat-tab-link","","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-examples-form"),t.qZA(),t.TgZ(3,"div",2)(4,"mat-card",3)(5,"mat-card-content")(6,"nav",4),t.YNc(7,S,4,5,"a",5),t.qZA(),t._UZ(8,"router-outlet"),t.qZA()()()()),2&e&&(t.xp6(7),t.Q6J("ngForOf",n.links))},dependencies:[s.sg,u.a8,u.dn,z.BU,z.Nj,_.lC,_.yS,_.Od,Y,s.rS],styles:[".config-container[_ngcontent-%COMP%]{margin:0 20px;display:flex;flex-direction:row;gap:20px}.examples-container[_ngcontent-%COMP%]{flex:1 1 100%;box-sizing:border-box;max-width:40%}.tabs-container[_ngcontent-%COMP%]{flex:1 1 100%;box-sizing:border-box;max-width:60%}"]}),o})();var Z=m(2722),g=m(4859),C=m(4850),q=m(4385),v=m(3238),c=m(5412),I=m(6469);function M(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.toggleNorm())}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.typeControl.value," ")}}function E(o,a){if(1&o&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.name," ")}}function D(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Required "),t.qZA())}function G(o,a){if(1&o&&(t.TgZ(0,"mat-form-field",16)(1,"mat-label"),t._uU(2),t.qZA(),t.TgZ(3,"mat-select",17),t.YNc(4,E,2,2,"mat-option",18),t.qZA(),t.YNc(5,D,2,0,"mat-error",19),t.qZA()),2&o){const e=a.ngIf,n=t.oxw(),r=n.index,l=n.$implicit;t.xp6(2),t.Oqu(e[r].name),t.xp6(2),t.Q6J("ngForOf",e[r].fuzzyAreas),t.xp6(1),t.Q6J("ngIf",l.hasError("required"))}}function k(o,a){if(1&o&&(t.TgZ(0,"span"),t.YNc(1,M,2,1,"button",12),t.ynx(2,13),t.YNc(3,G,6,3,"mat-form-field",14),t.ALo(4,"async"),t.BQk(),t.qZA()),2&o){const e=a.index,n=t.oxw();t.xp6(1),t.Q6J("ngIf",e>0),t.xp6(1),t.Q6J("formGroupName",e),t.xp6(1),t.Q6J("ngIf",t.lcZ(4,3,n.mamdaniService.inputVariables$))}}const P=function(o,a){return{name:o,area:a}};function j(o,a){if(1&o&&(t.TgZ(0,"mat-option",20),t._uU(1),t.qZA()),2&o){const e=a.$implicit,n=t.oxw().$implicit;t.Q6J("value",t.WLB(2,P,n.name,e.name)),t.xp6(1),t.hij(" ",e.name," ")}}function X(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Required "),t.qZA())}function H(o,a){if(1&o&&(t.TgZ(0,"mat-form-field",16)(1,"mat-label"),t._uU(2),t.qZA(),t.TgZ(3,"mat-select",21),t.YNc(4,j,2,5,"mat-option",18),t.qZA(),t.YNc(5,X,2,0,"mat-error",19),t.qZA()),2&o){const e=a.$implicit,n=t.oxw();t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Q6J("ngForOf",e.fuzzyAreas),t.xp6(1),t.Q6J("ngIf",n.output.hasError("required"))}}let K=(()=>{class o{constructor(e,n){this.mamdaniService=e,this.formCreatorService=n,this.destroy$=new d.x}get typeControl(){return this.form.get("type")}get fuzzyAreas(){return this.form.get("fuzzyAreas")}get inputs(){return this.fuzzyAreas.get("inputs")}get output(){return this.fuzzyAreas.get("output")}ngOnInit(){this.initForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}createRule(e){e.preventDefault();const n=this.form.value,r=n.fuzzyAreas.inputs.filter(l=>l.area);n.fuzzyAreas.inputs=r.map(l=>({name:l.name,area:l.area.name})),n.fuzzyAreas.inputs.length>0&&(this.mamdaniService.addRule(n),this.form.reset())}toggleNorm(){this.typeControl.setValue("AND"===this.typeControl.value?"OR":"AND")}initForm(){this.form=this.formCreatorService.createRuleForm(),this.mamdaniService.inputVariables$.pipe((0,Z.R)(this.destroy$)).subscribe(e=>{e.forEach(n=>{this.inputs.push(new i.nJ({name:new i.p4(n.name),area:new i.p4(null)}))})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.q),t.Y36(h.A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-rules-composer"]],decls:23,vars:6,consts:[[3,"formGroup","ngSubmit"],["dialog-title",""],["dialog-content","","formGroupName","fuzzyAreas"],[1,"row"],[1,"col-md-1"],[1,"mt-3"],["formArrayName","inputs",1,"col-md-11"],[4,"ngFor","ngForOf"],[1,"col-md-11"],["appearance","fill",4,"ngFor","ngForOf"],["dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary","type","submit",3,"disabled"],["mat-mini-fab","","type","button","color","primary","class","fab-control mx-3",3,"click",4,"ngIf"],[3,"formGroupName"],["appearance","fill",4,"ngIf"],["mat-mini-fab","","type","button","color","primary",1,"fab-control","mx-3",3,"click"],["appearance","fill"],["formControlName","area"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],["formControlName","output"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(l){return n.createRule(l)}),t.TgZ(1,"app-custom-modal")(2,"h1",1),t._uU(3,"Add Rule"),t.qZA(),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"p",5),t._uU(8,"IF"),t.qZA()(),t.TgZ(9,"div",6),t.YNc(10,k,5,5,"span",7),t.qZA()(),t._UZ(11,"mat-divider")(12,"br"),t.TgZ(13,"div",3)(14,"div",4)(15,"p",5),t._uU(16,"THEN"),t.qZA()(),t.TgZ(17,"div",8),t.YNc(18,H,6,3,"mat-form-field",9),t.ALo(19,"async"),t.qZA()()(),t.TgZ(20,"div",10)(21,"button",11),t._uU(22," Save "),t.qZA()()()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(10),t.Q6J("ngForOf",n.inputs.controls),t.xp6(8),t.Q6J("ngForOf",t.lcZ(19,4,n.mamdaniService.outputVariables$)),t.xp6(3),t.Q6J("disabled",!n.form.valid))},dependencies:[s.sg,s.O5,i._Y,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE,g.lW,C.d,p.TO,p.KE,p.hX,q.gD,v.ey,c.ZT,I.R,s.Ov],styles:[".fab-control[_ngcontent-%COMP%]{bottom:5px}"]}),o})();var A=m(3336),x=m(6338);function B(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"mat-list-item")(1,"p",4),t._uU(2,"No Rules. Add some!"),t.qZA(),t.TgZ(3,"button",5),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.openDialog())}),t.TgZ(4,"mat-icon"),t._uU(5,"add"),t.qZA()()()}}function W(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"lowercase"),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.type)," ")}}function tt(o,a){if(1&o&&(t.TgZ(0,"span")(1,"strong"),t._uU(2),t.qZA(),t._uU(3," is "),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t.YNc(6,W,3,3,"span",1),t.qZA()),2&o){const e=a.$implicit,n=a.last;t.xp6(2),t.Oqu(e.name),t.xp6(3),t.Oqu(e.area),t.xp6(1),t.Q6J("ngIf",!n)}}function et(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"mat-list-item")(1,"h4",4),t._uU(2),t.qZA(),t.TgZ(3,"p",4)(4,"span"),t._uU(5,"If "),t.qZA(),t.YNc(6,tt,7,3,"span",3),t._uU(7," then "),t.TgZ(8,"strong"),t._uU(9),t.qZA(),t._uU(10," is "),t.TgZ(11,"strong"),t._uU(12),t.qZA()(),t.TgZ(13,"button",6),t.NdJ("click",function(){const l=t.CHM(e).index,b=t.oxw(2);return t.KtG(b.removeRule(l))}),t.TgZ(14,"mat-icon"),t._uU(15,"delete"),t.qZA()()()}if(2&o){const e=a.$implicit,n=a.index;t.xp6(2),t.hij("Rule ",n+1,""),t.xp6(4),t.Q6J("ngForOf",e.fuzzyAreas.inputs),t.xp6(3),t.Oqu(e.fuzzyAreas.output.name),t.xp6(3),t.Oqu(e.fuzzyAreas.output.area)}}function ot(o,a){if(1&o&&(t.TgZ(0,"mat-list"),t.YNc(1,B,6,0,"mat-list-item",1),t.YNc(2,et,16,4,"mat-list-item",3),t.qZA()),2&o){const e=a.ngIf;t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngForOf",e)}}let nt=(()=>{class o{constructor(e,n){this.mamdaniService=e,this.dialog=n}openDialog(){this.dialog.open(K,{width:"1200px"})}removeRule(e){this.mamdaniService.removeRule(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.q),t.Y36(c.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-rules-list"]],decls:9,vars:3,consts:[[1,"mat-elevation-z0"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],[4,"ngFor","ngForOf"],["matLine",""],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-title"),t._uU(2,"Rules"),t.qZA(),t.TgZ(3,"mat-card-content"),t.YNc(4,ot,3,2,"mat-list",1),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"mat-card-actions")(7,"button",2),t.NdJ("click",function(){return n.openDialog()}),t._uU(8," Add Rule "),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,n.mamdaniService.rules$)))},dependencies:[s.sg,s.O5,g.lW,A.Hw,x.i$,x.Tg,v.X2,u.a8,u.dn,u.n5,u.hq,s.Ov,s.i8],styles:[".mat-list-item[_ngcontent-%COMP%]{margin:30px 0}[_nghost-%COMP%]     .mat-list .mat-list-item .mat-line{word-wrap:break-word;white-space:pre-wrap}"]}),o})();function at(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Name is required "),t.qZA())}function rt(o,a){if(1&o&&(t.TgZ(0,"mat-option",11),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function it(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Type is required "),t.qZA())}function mt(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Required "),t.qZA())}function st(o,a){if(1&o&&(t.TgZ(0,"span"),t.ynx(1),t.TgZ(2,"mat-form-field",12)(3,"mat-label"),t._uU(4),t.qZA(),t._UZ(5,"input",13),t.YNc(6,mt,2,0,"mat-error",3),t.qZA(),t.BQk(),t.qZA()),2&o){const e=a.$implicit,n=a.index;t.xp6(4),t.hij("Range ",n+1,""),t.xp6(1),t.Q6J("formControlName",n),t.xp6(1),t.Q6J("ngIf",e.hasError("required"))}}let O=(()=>{class o{constructor(e){this.mamdaniService=e,this.fuzzyAreaTypes=Object.keys(F.N),this.onDestroy$=new d.x}get ranges(){return this.form.get("ranges")}ngOnChanges(e){e.form&&this.form&&this.formTypeChangeSubsciption()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}formTypeChangeSubsciption(){this.form.get("type").valueChanges.pipe((0,Z.R)(this.onDestroy$)).subscribe(e=>{this.ranges.clear();const n="Trapezoid"===e?4:3;for(let r=0;r<n;r++)this.ranges.push(new i.p4(0,i.kI.required))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-fuzzy-area-form"]],inputs:{form:"form"},features:[t.TTD],decls:17,vars:5,consts:[[1,"fuzzy-area-form",3,"formGroup"],[1,"fuzzy-area-name-input"],["matInput","","placeholder","Name","formControlName","name","autocomplete","off"],[4,"ngIf"],[1,"form-container"],[1,"me-3"],["formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["formArrayName","ranges",1,"form-container"],["for","fuzzy-area-value",1,"me-3"],[4,"ngFor","ngForOf"],[3,"value"],[1,"fuzzy-area-range-input","mx-3"],["matInput","","type","number","autocomplete","off","placeholder","Name",3,"formControlName"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Name"),t.qZA(),t._UZ(4,"input",2),t.YNc(5,at,2,0,"mat-error",3),t.qZA(),t.TgZ(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),t._uU(9,"Type"),t.qZA(),t.TgZ(10,"mat-select",6),t.YNc(11,rt,2,2,"mat-option",7),t.qZA(),t.YNc(12,it,2,0,"mat-error",3),t.qZA(),t.TgZ(13,"div",8)(14,"label",9),t._uU(15,"Value:"),t.qZA(),t.YNc(16,st,7,3,"span",10),t.qZA()()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("ngIf",n.form.get("name").hasError("required")),t.xp6(6),t.Q6J("ngForOf",n.fuzzyAreaTypes),t.xp6(1),t.Q6J("ngIf",n.form.get("type").hasError("required")),t.xp6(4),t.Q6J("ngForOf",n.ranges.controls))},dependencies:[s.sg,s.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,i.CE,p.TO,p.KE,p.hX,y.Nt,q.gD,v.ey],styles:[".fuzzy-area-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.fuzzy-area-form[_ngcontent-%COMP%]   .fuzzy-area-name-input[_ngcontent-%COMP%]{width:50%}.fuzzy-area-form[_ngcontent-%COMP%]   .fuzzy-area-range-input[_ngcontent-%COMP%]{width:100px}.form-container[_ngcontent-%COMP%]{flex-flow:row wrap;box-sizing:border-box;display:flex;place-content:center flex-start;align-items:center}"]}),o})();function lt(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Required "),t.qZA())}function ut(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Required "),t.qZA())}function pt(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Minumun number of fuzzy areas 1 "),t.qZA())}function ct(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Required "),t.qZA())}function ft(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Required "),t.qZA())}function _t(o,a){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-fuzzy-area-form",15)(2,"mat-divider"),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("form",e)}}let gt=(()=>{class o{constructor(e,n,r){this.data=e,this.formCreatorService=n,this.mamdaniService=r,this.form=this.formCreatorService.createVariableForm(),this.onDestroy$=new d.x}get fuzzyAreasArray(){return this.form.get("fuzzyAreas")}get fuzzyAreasControls(){return this.fuzzyAreasArray.controls}ngOnInit(){this.form.get("fuzzyAreasCount").valueChanges.pipe((0,Z.R)(this.onDestroy$)).subscribe(e=>{const n=this.form.get("fuzzyAreas");n.clear();for(let r=0;r<e;r++)n.push(this.formCreatorService.createFuzzyAreaForm())})}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}getDialogTitle(){return"inputs"===this.data.type?"Add Input Variable":"Edit Output Variable"}addVariable(e){e.preventDefault(),"inputs"===this.data.type?this.mamdaniService.addInputVariable(this.form.value):this.mamdaniService.addOutputVariable(this.form.value),this.form.reset(),this.form=this.formCreatorService.createVariableForm()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.WI),t.Y36(h.A),t.Y36(f.q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-variables-form"]],decls:41,vars:9,consts:[[3,"formGroup","ngSubmit"],["dialog-title",""],["dialog-content",""],[1,"row"],[1,"col-6"],[1,"input-full-width"],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["matInput","","placeholder","fuzzy areas count","autocomplete","off","type","number","min","0","formControlName","fuzzyAreasCount"],["matInput","","placeholder","Start","autocomplete","off","type","number","formControlName","start"],["matInput","","placeholder","End","autocomplete","off","type","number","formControlName","end"],[1,"my-3"],[4,"ngFor","ngForOf"],["dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"form"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(l){return n.addVariable(l)}),t.TgZ(1,"app-custom-modal")(2,"h1",1),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),t._uU(9,"Variable Name"),t.qZA(),t._UZ(10,"input",6),t.YNc(11,lt,2,0,"mat-error",7),t.qZA()(),t.TgZ(12,"div",4)(13,"mat-form-field",5)(14,"mat-label"),t._uU(15,"Number of fuzzyAreas"),t.qZA(),t._UZ(16,"input",8),t.YNc(17,ut,2,0,"mat-error",7),t.YNc(18,pt,2,0,"mat-error",7),t.qZA()()(),t._UZ(19,"br"),t.TgZ(20,"div",3)(21,"div",4)(22,"mat-form-field",5)(23,"mat-label"),t._uU(24,"Range: Start"),t.qZA(),t._UZ(25,"input",9),t.YNc(26,ct,2,0,"mat-error",7),t.qZA()(),t.TgZ(27,"div",4)(28,"mat-form-field",5)(29,"mat-label"),t._uU(30,"Range: End"),t.qZA(),t._UZ(31,"input",10),t.YNc(32,ft,2,0,"mat-error",7),t.qZA()()(),t._UZ(33,"mat-divider"),t.TgZ(34,"div",11)(35,"h2"),t._uU(36,"Fuzzy Areas"),t.qZA(),t.YNc(37,_t,3,1,"div",12),t.qZA()(),t.TgZ(38,"div",13)(39,"button",14),t._uU(40," Save "),t.qZA()()()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(3),t.Oqu(n.getDialogTitle()),t.xp6(8),t.Q6J("ngIf",n.form.get("name").hasError("required")),t.xp6(6),t.Q6J("ngIf",n.form.get("fuzzyAreasCount").hasError("required")),t.xp6(1),t.Q6J("ngIf",n.form.get("fuzzyAreasCount").hasError("min")),t.xp6(8),t.Q6J("ngIf",n.form.get("start").hasError("required")),t.xp6(6),t.Q6J("ngIf",n.form.get("end").hasError("required")),t.xp6(5),t.Q6J("ngForOf",n.fuzzyAreasControls),t.xp6(2),t.Q6J("disabled",!n.form.valid))},dependencies:[s.sg,s.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.qQ,i.sg,i.u,g.lW,C.d,p.TO,p.KE,p.hX,y.Nt,c.ZT,I.R,O],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}"]}),o})();var dt=m(5698),J=m(811);let vt=(()=>{class o{constructor(e,n){this.mamdaniService=e,this.formCreatorService=n,this.form=this.formCreatorService.createVariableForm(),this.onDestroy$=new d.x}get ranges(){return this.form.get("ranges")}ngOnChanges(e){e.fuzzyArea&&this.initForm()}ngOnInit(){this.initForm()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}updateFuzzyArea(e){e.preventDefault(),this.mamdaniService.addFuzzyArea(this.type,this.variableIndex,this.itemIndex,this.form.value)}initForm(){this.form=this.formCreatorService.createFuzzyAreaForm(),this.form.patchValue(this.fuzzyArea),this.fuzzyArea.ranges.forEach(e=>{this.ranges.push(new i.p4(e,i.kI.required))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.q),t.Y36(h.A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-variables-list-item-form"]],inputs:{variable:"variable",fuzzyArea:"fuzzyArea",variableIndex:"variableIndex",itemIndex:"itemIndex",type:"type"},features:[t.TTD],decls:4,vars:3,consts:[[1,"mt-3",3,"formGroup","ngSubmit"],[2,"display","inline",3,"form"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(l){return n.updateFuzzyArea(l)}),t._UZ(1,"app-fuzzy-area-form",1),t.TgZ(2,"button",2),t._uU(3," Update "),t.qZA()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(1),t.Q6J("form",n.form),t.xp6(1),t.Q6J("disabled",!n.form.valid))},dependencies:[i._Y,i.JL,i.sg,g.lW,O]}),o})();function bt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"h3")(2,"span",7),t._uU(3),t.TgZ(4,"strong"),t._uU(5),t.qZA()(),t.TgZ(6,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.changeMode())}),t.TgZ(7,"mat-icon"),t._uU(8),t.qZA()()(),t._UZ(9,"span",9),t.TgZ(10,"button",10),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.removeItem.emit(r.itemIndex))}),t.TgZ(11,"mat-icon"),t._uU(12,"delete"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.hij(" ",e.variable.name," goes from "),t.xp6(2),t.AsE("",e.variable.start," to ",e.variable.end,""),t.xp6(3),t.Oqu(e.edit?"close":"edit")}}function ht(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"mat-button-toggle",11),t.NdJ("change",function(r){const b=t.CHM(e).index,Vt=t.oxw();return t.KtG(Vt.toggleChanged(r,b))}),t._uU(1),t.qZA()}if(2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.name,"")}}function xt(o,a){if(1&o&&(t.TgZ(0,"span",14),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e)}}function yt(o,a){if(1&o&&(t.TgZ(0,"div")(1,"p",12)(2,"strong"),t._uU(3),t.qZA(),t.YNc(4,xt,2,1,"span",13),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.hij("",e.selectedFuzzyArea.type," :"),t.xp6(1),t.Q6J("ngForOf",e.selectedFuzzyArea.ranges)}}function Zt(o,a){if(1&o&&t._UZ(0,"app-variables-list-item-form",15),2&o){const e=t.oxw();t.Q6J("type",e.type)("variable",e.variable)("variableIndex",e.variableIndex)("itemIndex",e.itemIndex)("fuzzyArea",e.selectedFuzzyArea)}}function Ct(o,a){1&o&&t._UZ(0,"mat-divider")}let At=(()=>{class o{constructor(){this.removeItem=new t.vpe}changeMode(){if(this.edit=!this.edit,!this.selectedFuzzyArea&&this.edit)return this.selectedFuzzyArea=this.variable.fuzzyAreas[0],void(this.itemIndex=0)}toggleChanged(e,n){this.itemIndex=n}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-variables-list-item"]],inputs:{variable:"variable",type:"type",variableIndex:"variableIndex"},outputs:{removeItem:"removeItem"},decls:8,vars:6,consts:[["matLine","","class","item-title",4,"ngIf"],["matLine",""],[1,"fuzzy-area-toogle-group",3,"ngModel","ngModelChange"],[3,"value","change",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"type","variable","variableIndex","itemIndex","fuzzyArea",4,"ngIf"],["matLine","",1,"item-title"],[1,"me-2"],["mat-icon-button","","color","primary",3,"click"],[1,"header-spacer"],["mat-icon-button","","color","warn",3,"click"],[3,"value","change"],[1,"my-2"],["class","m-2",4,"ngFor","ngForOf"],[1,"m-2"],[3,"type","variable","variableIndex","itemIndex","fuzzyArea"]],template:function(e,n){1&e&&(t.YNc(0,bt,13,4,"div",0),t.TgZ(1,"div",1)(2,"mat-button-toggle-group",2),t.NdJ("ngModelChange",function(l){return n.selectedFuzzyArea=l}),t.YNc(3,ht,2,2,"mat-button-toggle",3),t.qZA(),t.YNc(4,yt,5,2,"div",4),t.YNc(5,Zt,1,5,"app-variables-list-item-form",5),t.qZA(),t._UZ(6,"br"),t.YNc(7,Ct,1,0,"mat-divider",4)),2&e&&(t.Q6J("ngIf",n.variable),t.xp6(2),t.Q6J("ngModel",n.selectedFuzzyArea),t.xp6(1),t.Q6J("ngForOf",n.variable.fuzzyAreas),t.xp6(1),t.Q6J("ngIf",!n.edit&&n.selectedFuzzyArea),t.xp6(1),t.Q6J("ngIf",n.edit),t.xp6(2),t.Q6J("ngIf","inputs"===n.type))},dependencies:[s.sg,s.O5,i.JJ,i.On,g.lW,A.Hw,v.X2,C.d,J.A9,J.Yi,vt],styles:["[_nghost-%COMP%]{width:100%}.header-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.fuzzy-area-toogle-group[_ngcontent-%COMP%]{flex-wrap:wrap}.item-title[_ngcontent-%COMP%]{display:flex!important;flex-direction:row!important;box-sizing:border-box}"]}),o})();const Tt=["deleteDialog"];function zt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"mat-list-item")(1,"p",6),t._uU(2,"No Variables. Add some!"),t.qZA(),t.TgZ(3,"button",7),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.openDialog())}),t.TgZ(4,"mat-icon"),t._uU(5,"add"),t.qZA()()()}}function Ft(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"mat-list-item")(1,"app-variables-list-item",8),t.NdJ("removeItem",function(){const l=t.CHM(e).index,b=t.oxw(2);return t.KtG(b.onRemoveItem(l))}),t.qZA()()}if(2&o){const e=a.$implicit,n=a.index,r=t.oxw(2);t.xp6(1),t.Q6J("type",r.type)("variable",e)("variableIndex",n)}}function qt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.openDialog())}),t._uU(1," Add variable "),t.qZA()}}function It(o,a){if(1&o&&(t.TgZ(0,"mat-card",2)(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-content")(4,"mat-list"),t.YNc(5,zt,6,0,"mat-list-item",3),t.YNc(6,Ft,2,3,"mat-list-item",4),t.qZA()(),t.TgZ(7,"mat-card-actions"),t.YNc(8,qt,2,0,"button",5),t.qZA()()),2&o){const e=a.ngIf,n=t.oxw();t.xp6(2),t.hij("",n.title," "),t.xp6(3),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngForOf",e),t.xp6(2),t.Q6J("ngIf",n.showAddButton(e))}}function Ot(o,a){1&o&&(t.TgZ(0,"h1",10),t._uU(1,"Delete Ouput Variable"),t.qZA(),t.TgZ(2,"div",11),t._uU(3," By deleting Output variable all rules will be automatically deleted. Are you sure? "),t.qZA(),t.TgZ(4,"div",12)(5,"button",13),t._uU(6,"Cancel"),t.qZA(),t.TgZ(7,"button",14),t._uU(8," Delete "),t.qZA()()),2&o&&(t.xp6(7),t.Q6J("mat-dialog-close",!0))}let N=(()=>{class o{constructor(e,n,r){this.mamdaniService=e,this.dialog=n,this.route=r}ngOnInit(){this.route.url.pipe((0,dt.q)(1)).subscribe(e=>{this.type=e[0].path,this.handleSubscriptions()})}handleSubscriptions(){"inputs"===this.type?(this.title="Inputs",this.variables$=this.mamdaniService.inputVariables$):(this.title="Output",this.variables$=this.mamdaniService.outputVariables$)}openDialog(e){this.dialog.open(gt,{data:{type:this.type,variable:e},width:"1200px"})}onRemoveItem(e){"inputs"!==this.type?this.dialog.open(this.deleteDialog).afterClosed().subscribe(r=>{r&&this.mamdaniService.removeOutputVariable()}):this.mamdaniService.removeInputVariable(e)}showAddButton(e){return"inputs"===this.type||!e.length}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.q),t.Y36(c.uw),t.Y36(_.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-variables-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(Tt,5),2&e){let r;t.iGM(r=t.CRH())&&(n.deleteDialog=r.first)}},decls:4,vars:3,consts:[["class","mat-elevation-z0",4,"ngIf"],["deleteDialog",""],[1,"mat-elevation-z0"],[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["matLine",""],["mat-icon-button","","color","primary",3,"click"],[3,"type","variable","variableIndex","removeItem"],["mat-raised-button","","color","primary",3,"click"],["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","","color","warn","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,n){1&e&&(t.YNc(0,It,9,4,"mat-card",0),t.ALo(1,"async"),t.YNc(2,Ot,9,1,"ng-template",null,1,t.W1O)),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.variables$))},dependencies:[s.sg,s.O5,g.lW,A.Hw,x.i$,x.Tg,v.X2,u.a8,u.dn,u.n5,u.hq,c.ZT,c.uh,c.xY,c.H8,At,s.Ov],styles:["mat-list-item[_ngcontent-%COMP%]{margin-top:20px;height:auto!important}"]}),o})();const Jt=[{path:"",component:$,children:[{path:"",redirectTo:"inputs",pathMatch:"full"},{path:"inputs",component:N},{path:"output",component:N},{path:"rules",component:nt}]}];let Nt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(Jt),_.Bz]}),o})(),Ut=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[U.m,Nt]}),o})()}}]);