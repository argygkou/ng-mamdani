"use strict";(self.webpackChunkng_mamdani=self.webpackChunkng_mamdani||[]).push([[676],{4676:(z,l,r)=>{r.r(l),r.d(l,{HomeModule:()=>J});var p=r(4655),h=r(9765),C=r(739),c=r(6782),m=r(2238),t=r(7716),d=r(2835),g=r(1095);let x=(()=>{class o{constructor(e,n){this.data=e,this.mamdaniService=n}ngOnInit(){const e=this.mamdaniService.getResult(this.data.values);this.result=e.fuzzyAreas.output.area;const n=this.mamdaniService.exposeResultValue(e);parent.postMessage({mamdaniResult:n},"*"),console.log(n)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.WI),t.Y36(d.q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-result"]],decls:9,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content","","id","mamdani-result"],[1,"result"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","","mat-raised-button","","color","primary"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Congratulations"),t.qZA(),t.TgZ(2,"div",1),t._uU(3," Recomendation is "),t.TgZ(4,"span",2),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"button",4),t._uU(8," Close "),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Oqu(n.result))},directives:[m.uh,m.xY,m.H8,g.lW,m.ZT],styles:[".result[_ngcontent-%COMP%]{font-weight:500}"]}),o})();var Z=r(8036),f=r(3738),s=r(3679),u=r(7832),v=r(8583),b=r(2613);const y=["stepper"];function T(o,a){if(1&o&&t._uU(0),2&o){const e=t.oxw().$implicit;t.Oqu(e.get("name").value)}}function A(o,a){if(1&o&&(t.TgZ(0,"mat-radio-button",15),t._uU(1),t.qZA()),2&o){const e=a.$implicit,n=t.oxw(2);t.Q6J("value",n.getFuzzyAreaValue(e)),t.xp6(1),t.Oqu(e.name)}}function H(o,a){1&o&&(t.TgZ(0,"button",16),t._uU(1," Back "),t.qZA())}function S(o,a){1&o&&(t.TgZ(0,"button",17),t._uU(1," Next "),t.qZA())}function M(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).getResult()}),t._uU(1," Finish "),t.qZA()}}function O(o,a){if(1&o&&(t.TgZ(0,"mat-step",6),t.YNc(1,T,1,1,"ng-template",7),t.TgZ(2,"div",8),t.TgZ(3,"mat-radio-group",9),t.YNc(4,A,2,2,"mat-radio-button",10),t.qZA(),t.qZA(),t.TgZ(5,"div",11),t.YNc(6,H,2,0,"button",12),t.YNc(7,S,2,0,"button",13),t.YNc(8,M,2,0,"button",14),t.qZA(),t.qZA()),2&o){const e=a.$implicit,n=a.index,i=a.last,Y=t.oxw();t.Q6J("formGroupName",n)("stepControl",e),t.xp6(4),t.Q6J("ngForOf",Y.inputVariables[n].fuzzyAreas),t.xp6(2),t.Q6J("ngIf",n>0),t.xp6(1),t.Q6J("ngIf",!i),t.xp6(1),t.Q6J("ngIf",i)}}const R=[{path:"",component:(()=>{class o{constructor(e,n,i){this.mamdaniService=e,this.formCreatorService=n,this.dialog=i,this.destroy$=new h.xQ}ngOnInit(){(0,C.aj)([this.mamdaniService.inputVariables$,this.mamdaniService.outputVariables$,this.mamdaniService.rules$]).pipe((0,c.R)(this.destroy$)).subscribe(([e,n,i])=>{this.inputVariables=e,this.initForm()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getFuzzyAreaValue(e){return e.ranges.reduce((n,i)=>n+i,0)/e.ranges.length}getResult(){const e=this.form.get("variables").value;this.dialog.open(x,{data:{values:e}}).afterClosed().pipe((0,c.R)(this.destroy$)).subscribe(i=>{this.initForm(),this.stepper.reset()})}calculateMaxValue(e){return this.formCreatorService.calculateMaxMin("max",this.inputVariables[e].fuzzyAreas)}initForm(){this.form=this.formCreatorService.initExampleForm();const e=this.form.get("variables");e.clear(),this.inputVariables.forEach(n=>{e.push(this.formCreatorService.addExample(n))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.q),t.Y36(Z.A),t.Y36(m.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&t.Gf(y,5),2&e){let i;t.iGM(i=t.CRH())&&(n.stepper=i.first)}},decls:7,vars:2,consts:[[1,"container"],[1,"mat-elevation-z4"],[3,"formGroup"],["orientation","vertical","formArrayName","variables","linear",""],["stepper",""],[3,"formGroupName","stepControl",4,"ngFor","ngForOf"],[3,"formGroupName","stepControl"],["matStepLabel",""],[1,"radio-container"],["aria-label","Select an option","formControlName","example"],[3,"value",4,"ngFor","ngForOf"],[1,"stepper-buttons"],["class","back-button","mat-stroked-button","","matStepperPrevious","","type","button",4,"ngIf"],["mat-stroked-button","","matStepperNext","","color","primary","type","button",4,"ngIf"],["mat-flat-button","","matStepperNext","","color","primary",3,"click",4,"ngIf"],[3,"value"],["mat-stroked-button","","matStepperPrevious","","type","button",1,"back-button"],["mat-stroked-button","","matStepperNext","","color","primary","type","button"],["mat-flat-button","","matStepperNext","","color","primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"mat-card-content"),t.TgZ(3,"form",2),t.TgZ(4,"mat-stepper",3,4),t.YNc(6,O,9,6,"mat-step",5),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(3),t.Q6J("ngForOf",n.form.get("variables").controls))},directives:[f.a8,f.dn,s._Y,s.JL,s.sg,u.Vq,s.CE,v.sg,u.C0,s.x0,u.VY,b.VQ,s.JJ,s.u,v.O5,b.U0,g.lW,u.fd,u.Ic],styles:[".stepper-buttons[_ngcontent-%COMP%]{padding:0 20px;margin-top:10px}.stepper-buttons[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{margin-right:15px}.radio-container[_ngcontent-%COMP%]{padding:20px}.radio-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}"]}),o})()}];let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(R)],p.Bz]}),o})();var N=r(495);let J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[F,N.m]]}),o})()}}]);