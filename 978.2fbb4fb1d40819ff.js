"use strict";(self.webpackChunkng_mamdani=self.webpackChunkng_mamdani||[]).push([[978],{1978:(Q,u,a)=>{a.r(u),a.d(u,{HomeModule:()=>z});var c=a(1083),g=a(7579),v=a(9841),b=a(2722),t=a(5e3),C=a(4836),h=a(8036),x=a(8966),l=a(9224),i=a(3075),s=a(2081),f=a(9808),d=a(9814),y=a(7423);const H=["stepper"];function S(o,r){if(1&o&&t._uU(0),2&o){const e=t.oxw().$implicit;t.Oqu(e.get("name").value)}}function N(o,r){if(1&o&&(t.TgZ(0,"mat-radio-button",15),t._uU(1),t.qZA()),2&o){const e=r.$implicit,n=t.oxw(2);t.Q6J("value",n.getFuzzyAreaValue(e)),t.xp6(1),t.Oqu(e.name)}}function F(o,r){1&o&&(t.TgZ(0,"button",16),t._uU(1," Back "),t.qZA())}function M(o,r){1&o&&(t.TgZ(0,"button",17),t._uU(1," Next "),t.qZA())}function O(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).getResult()}),t._uU(1," Finish "),t.qZA()}}function T(o,r){if(1&o&&(t.TgZ(0,"mat-step",6),t.YNc(1,S,1,1,"ng-template",7),t.TgZ(2,"div",8)(3,"mat-radio-group",9),t.YNc(4,N,2,2,"mat-radio-button",10),t.qZA()(),t.TgZ(5,"div",11),t.YNc(6,F,2,0,"button",12),t.YNc(7,M,2,0,"button",13),t.YNc(8,O,2,0,"button",14),t.qZA()()),2&o){const e=r.$implicit,n=r.index,m=r.last,p=t.oxw();t.Q6J("formGroupName",n)("stepControl",e),t.xp6(4),t.Q6J("ngForOf",p.inputVariables[n].fuzzyAreas),t.xp6(2),t.Q6J("ngIf",n>0),t.xp6(1),t.Q6J("ngIf",!m),t.xp6(1),t.Q6J("ngIf",m)}}const A=[{path:"",component:(()=>{class o{constructor(e,n,m){this.mamdaniService=e,this.formCreatorService=n,this.dialog=m,this.destroy$=new g.x}ngOnInit(){(0,v.a)([this.mamdaniService.inputVariables$,this.mamdaniService.outputVariables$,this.mamdaniService.rules$]).pipe((0,b.R)(this.destroy$)).subscribe(([e,n,m])=>{this.inputVariables=e,this.initForm()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getFuzzyAreaValue(e){return e.ranges.reduce((n,m)=>n+m,0)/e.ranges.length}getResult(){const e=this.form.get("variables").value,m=this.mamdaniService.getResult(e).fuzzyAreas.output.area;console.log(m);try{parent.sinterest(m)}catch(p){console.log(p)}}initForm(){this.form=this.formCreatorService.initExampleForm();const e=this.form.get("variables");e.clear(),this.inputVariables.forEach(n=>{e.push(this.formCreatorService.addExample(n))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.q),t.Y36(h.A),t.Y36(x.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&t.Gf(H,5),2&e){let m;t.iGM(m=t.CRH())&&(n.stepper=m.first)}},decls:7,vars:2,consts:[[1,"container"],[1,"mat-elevation-z4"],[3,"formGroup"],["orientation","vertical","formArrayName","variables","linear",""],["stepper",""],[3,"formGroupName","stepControl",4,"ngFor","ngForOf"],[3,"formGroupName","stepControl"],["matStepLabel",""],[1,"radio-container"],["aria-label","Select an option","formControlName","example"],[3,"value",4,"ngFor","ngForOf"],[1,"stepper-buttons"],["class","back-button","mat-stroked-button","","matStepperPrevious","","type","button",4,"ngIf"],["mat-stroked-button","","matStepperNext","","color","primary","type","button",4,"ngIf"],["mat-flat-button","","matStepperNext","","color","primary",3,"click",4,"ngIf"],[3,"value"],["mat-stroked-button","","matStepperPrevious","","type","button",1,"back-button"],["mat-stroked-button","","matStepperNext","","color","primary","type","button"],["mat-flat-button","","matStepperNext","","color","primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-content")(3,"form",2)(4,"mat-stepper",3,4),t.YNc(6,T,9,6,"mat-step",5),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(3),t.Q6J("ngForOf",n.form.get("variables").controls))},directives:[l.a8,l.dn,i._Y,i.JL,i.sg,s.Vq,i.CE,f.sg,s.C0,i.x0,s.VY,d.VQ,i.JJ,i.u,d.U0,f.O5,y.lW,s.fd,s.Ic],styles:[".stepper-buttons[_ngcontent-%COMP%]{padding:0 20px;margin-top:10px}.stepper-buttons[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{margin-right:15px}.radio-container[_ngcontent-%COMP%]{padding:20px}.radio-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(A)],c.Bz]}),o})();var J=a(8560);let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[Z,J.m]]}),o})()}}]);