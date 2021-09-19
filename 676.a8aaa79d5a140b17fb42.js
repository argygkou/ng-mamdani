"use strict";(self.webpackChunkng_mamdani=self.webpackChunkng_mamdani||[]).push([[676],{4676:(Q,l,r)=>{r.r(l),r.d(l,{HomeModule:()=>z});var p=r(4655),b=r(9765),C=r(739),c=r(6782),i=r(2238),t=r(7716),g=r(2835),f=r(1095);let Z=(()=>{class o{constructor(e,n){this.data=e,this.mamdaniService=n}ngOnInit(){this.result=this.mamdaniService.getResult(this.data.values)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.WI),t.Y36(g.q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-result"]],decls:7,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Congratulations"),t.qZA(),t.TgZ(2,"div",1),t._uU(3),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"button",3),t._uU(6," Close "),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(n.result))},directives:[i.uh,i.xY,i.H8,f.lW,i.ZT],styles:[""]}),o})();var y=r(8036),d=r(3738),m=r(3679),u=r(7832),v=r(8583),h=r(2542);const x=["stepper"];function T(o,a){if(1&o&&t._uU(0),2&o){const e=t.oxw().$implicit;t.Oqu(e.get("name").value)}}function A(o,a){if(1&o&&(t.TgZ(0,"mat-button-toggle",13),t._uU(1),t.qZA()),2&o){const e=a.$implicit,n=t.oxw(2);t.Q6J("value",n.getFuzzyAreaValue(e)),t.xp6(1),t.hij(" ",e.name,"")}}function H(o,a){1&o&&(t.TgZ(0,"button",14),t._uU(1," Back "),t.qZA())}function F(o,a){1&o&&(t.TgZ(0,"button",15),t._uU(1," Next "),t.qZA())}function S(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).getResult()}),t._uU(1," Finish "),t.qZA()}}function N(o,a){if(1&o&&(t.TgZ(0,"mat-step",6),t.YNc(1,T,1,1,"ng-template",7),t.TgZ(2,"mat-button-toggle-group",8),t.YNc(3,A,2,2,"mat-button-toggle",9),t.qZA(),t.TgZ(4,"div"),t.YNc(5,H,2,0,"button",10),t.YNc(6,F,2,0,"button",11),t.YNc(7,S,2,0,"button",12),t.qZA(),t.qZA()),2&o){const e=a.$implicit,n=a.index,s=a.last,M=t.oxw();t.Q6J("formGroupName",n)("stepControl",e),t.xp6(3),t.Q6J("ngForOf",M.inputVariables[n].fuzzyAreas),t.xp6(2),t.Q6J("ngIf",n>0),t.xp6(1),t.Q6J("ngIf",!s),t.xp6(1),t.Q6J("ngIf",s)}}const R=[{path:"",component:(()=>{class o{constructor(e,n,s){this.mamdaniService=e,this.formCreatorService=n,this.dialog=s,this.destroy$=new b.xQ}ngOnInit(){(0,C.aj)([this.mamdaniService.inputVariables$,this.mamdaniService.outputVariables$,this.mamdaniService.rules$]).pipe((0,c.R)(this.destroy$)).subscribe(([e,n,s])=>{this.inputVariables=e,this.initForm()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getFuzzyAreaValue(e){return e.ranges.reduce((n,s)=>n+s,0)/e.ranges.length}getResult(){const e=this.form.get("variables").value;this.dialog.open(Z,{data:{values:e}}).afterClosed().pipe((0,c.R)(this.destroy$)).subscribe(s=>{this.initForm(),this.stepper.reset()})}calculateMaxValue(e){return this.formCreatorService.calculateMaxMin("max",this.inputVariables[e].fuzzyAreas)}initForm(){this.form=this.formCreatorService.initExampleForm();const e=this.form.get("variables");e.clear(),this.inputVariables.forEach(n=>{e.push(this.formCreatorService.addExample(n))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.q),t.Y36(y.A),t.Y36(i.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&t.Gf(x,5),2&e){let s;t.iGM(s=t.CRH())&&(n.stepper=s.first)}},decls:7,vars:2,consts:[[1,"container"],[1,"mat-elevation-z4"],[3,"formGroup"],["formArrayName","variables","linear",""],["stepper",""],[3,"formGroupName","stepControl",4,"ngFor","ngForOf"],[3,"formGroupName","stepControl"],["matStepLabel",""],["formControlName","example",1,"fuzzy-area-toogle-group"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","matStepperPrevious","","type","button",4,"ngIf"],["mat-button","","matStepperNext","","type","button",4,"ngIf"],["mat-button","","color","primary",3,"click",4,"ngIf"],[3,"value"],["mat-button","","matStepperPrevious","","type","button"],["mat-button","","matStepperNext","","type","button"],["mat-button","","color","primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"mat-card-content"),t.TgZ(3,"form",2),t.TgZ(4,"mat-vertical-stepper",3,4),t.YNc(6,N,8,6,"mat-step",5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(3),t.Q6J("ngForOf",n.form.get("variables").controls))},directives:[d.a8,d.dn,m._Y,m.JL,m.sg,u.Vq,m.CE,v.sg,u.C0,m.x0,u.VY,h.A9,m.JJ,m.u,v.O5,h.Yi,f.lW,u.fd,u.Ic],styles:[""]}),o})()}];let Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(R)],p.Bz]}),o})();var J=r(4431);let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[Y,J.m]]}),o})()}}]);