(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{D2yy:function(t,e,a){"use strict";a.r(e),a.d(e,"HomeModule",function(){return G});var r=a("tyNb"),o=a("XNiG"),n=a("itXk"),i=a("1G5W"),c=a("0IaG"),s=a("fXoL"),u=a("zkuA"),b=a("bTqV");let l=(()=>{class t{constructor(t,e){this.data=t,this.mamdaniService=e}ngOnInit(){this.result=this.mamdaniService.getResult(this.data.values)}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(c.a),s.Mb(u.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-result"]],decls:7,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary"]],template:function(t,e){1&t&&(s.Sb(0,"h1",0),s.wc(1,"Congratulations"),s.Rb(),s.Sb(2,"div",1),s.wc(3),s.Rb(),s.Sb(4,"div",2),s.Sb(5,"button",3),s.wc(6," Close "),s.Rb(),s.Rb()),2&t&&(s.Bb(3),s.xc(e.result))},directives:[c.g,c.e,c.c,b.b,c.d],styles:[""]}),t})();var m=a("rhaP"),p=a("Wp6s"),f=a("3Pt+"),h=a("xHqg"),d=a("ofXK"),g=a("jaxi");const v=["stepper"];function S(t,e){if(1&t&&s.wc(0),2&t){const t=s.cc().$implicit;s.xc(t.get("name").value)}}function y(t,e){if(1&t&&(s.Sb(0,"mat-button-toggle",13),s.wc(1),s.Rb()),2&t){const t=e.$implicit,a=s.cc(2);s.hc("value",a.getFuzzyAreaValue(t)),s.Bb(1),s.yc(" ",t.name,"")}}function w(t,e){1&t&&(s.Sb(0,"button",14),s.wc(1," Back "),s.Rb())}function R(t,e){1&t&&(s.Sb(0,"button",15),s.wc(1," Next "),s.Rb())}function x(t,e){if(1&t){const t=s.Tb();s.Sb(0,"button",16),s.ac("click",function(){return s.oc(t),s.cc(2).getResult()}),s.wc(1," Finish "),s.Rb()}}function C(t,e){if(1&t&&(s.Sb(0,"mat-step",6),s.uc(1,S,1,1,"ng-template",7),s.Sb(2,"mat-button-toggle-group",8),s.uc(3,y,2,2,"mat-button-toggle",9),s.Rb(),s.Sb(4,"div"),s.uc(5,w,2,0,"button",10),s.uc(6,R,2,0,"button",11),s.uc(7,x,2,0,"button",12),s.Rb(),s.Rb()),2&t){const t=e.$implicit,a=e.index,r=e.last,o=s.cc();s.hc("formGroupName",a)("stepControl",t),s.Bb(3),s.hc("ngForOf",o.inputVariables[a].fuzzyAreas),s.Bb(2),s.hc("ngIf",a>0),s.Bb(1),s.hc("ngIf",!r),s.Bb(1),s.hc("ngIf",r)}}let F=(()=>{class t{constructor(t,e,a){this.mamdaniService=t,this.formCreatorService=e,this.dialog=a,this.destroy$=new o.a}ngOnInit(){Object(n.a)([this.mamdaniService.inputVariables$,this.mamdaniService.outputVariables$,this.mamdaniService.rules$]).pipe(Object(i.a)(this.destroy$)).subscribe(([t,e,a])=>{this.inputVariables=t,this.initForm()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getFuzzyAreaValue(t){return t.ranges.reduce((t,e)=>t+e,0)/t.ranges.length}getResult(){const t=this.form.get("variables").value;this.dialog.open(l,{data:{values:t}}).afterClosed().pipe(Object(i.a)(this.destroy$)).subscribe(t=>{this.initForm(),this.stepper.reset()})}calculateMaxValue(t){return this.formCreatorService.calculateMaxMin("max",this.inputVariables[t].fuzzyAreas)}initForm(){this.form=this.formCreatorService.initExampleForm();const t=this.form.get("variables");t.clear(),this.inputVariables.forEach(e=>{t.push(this.formCreatorService.addExample(e))})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(u.a),s.Mb(m.a),s.Mb(c.b))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-home"]],viewQuery:function(t,e){if(1&t&&s.Ac(v,1),2&t){let t;s.lc(t=s.bc())&&(e.stepper=t.first)}},decls:7,vars:2,consts:[[1,"container"],[1,"mat-elevation-z4"],[3,"formGroup"],["formArrayName","variables","linear",""],["stepper",""],[3,"formGroupName","stepControl",4,"ngFor","ngForOf"],[3,"formGroupName","stepControl"],["matStepLabel",""],["formControlName","example",1,"fuzzy-area-toogle-group"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","matStepperPrevious","","type","button",4,"ngIf"],["mat-button","","matStepperNext","","type","button",4,"ngIf"],["mat-button","","color","primary",3,"click",4,"ngIf"],[3,"value"],["mat-button","","matStepperPrevious","","type","button"],["mat-button","","matStepperNext","","type","button"],["mat-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"mat-card",1),s.Sb(2,"mat-card-content"),s.Sb(3,"form",2),s.Sb(4,"mat-vertical-stepper",3,4),s.uc(6,C,8,6,"mat-step",5),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Bb(3),s.hc("formGroup",e.form),s.Bb(3),s.hc("ngForOf",e.form.get("variables").controls))},directives:[p.a,p.c,f.u,f.o,f.h,h.f,f.c,d.l,h.a,f.i,h.b,g.b,f.n,f.f,d.m,g.a,b.b,h.e,h.d],styles:[""]}),t})();const z=[{path:"",component:F},{path:"viewer",component:F}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[r.e.forChild(z)],r.e]}),t})();var $=a("PCNd");let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[N,$.a]]}),t})()}}]);