import{C as G,d as R}from"./chunk-NQJUI4FG.js";import{Ba as q,Ca as g}from"./chunk-3JLCQ6KU.js";import{Ab as p,Bb as M,Eb as F,Ib as m,Mb as v,Nc as Q,Ob as y,Pa as a,Pb as h,Qc as V,Tb as B,Tc as O,Uc as z,W as _,Wb as P,X as T,Xc as A,aa as w,ab as k,bb as x,dc as D,eb as I,fc as $,gb as S,gc as j,hb as f,oa as b,ob as s,pb as r,qb as c,tb as u,wc as E,xc as N,zb as l}from"./chunk-BQHCT3U7.js";var J=["content"],K=(e,o)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":e,"p-progressbar-indeterminate":o}),L=e=>({$implicit:e});function U(e,o){if(e&1&&(l(0,"div"),B(1),p()),e&2){let t=m(2);c("display",t.value!=null&&t.value!==0?"flex":"none"),s("data-pc-section","label"),a(),P("",t.value,"",t.unit,"")}}function W(e,o){e&1&&F(0)}function X(e,o){if(e&1&&(l(0,"div",3)(1,"div",4),f(2,U,2,5,"div",5)(3,W,1,0,"ng-container",6),p()()),e&2){let t=m();u(t.valueStyleClass),c("width",t.value+"%")("background",t.color),r("ngClass","p-progressbar-value p-progressbar-value-animate"),s("data-pc-section","value"),a(2),r("ngIf",t.showValue&&!t.contentTemplate&&!t._contentTemplate),a(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",$(11,L,t.value))}}function Y(e,o){if(e&1&&(l(0,"div",7),M(1,"div",8),p()),e&2){let t=m();u(t.valueStyleClass),r("ngClass","p-progressbar-indeterminate-container"),s("data-pc-section","container"),a(),c("background",t.color),s("data-pc-section","value")}}var Z=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,ee={root:({instance:e})=>["p-progressbar p-component",{"p-progressbar-determinate":e.determinate,"p-progressbar-indeterminate":e.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},H=(()=>{class e extends R{name="progressbar";theme=Z;classes=ee;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var te=(()=>{class e extends G{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=w(H);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=k({type:e,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,C){if(i&1&&(v(C,J,4),v(C,q,4)),i&2){let d;y(d=h())&&(n.contentTemplate=d.first),y(d=h())&&(n.templates=d)}},inputs:{value:[2,"value","value",N],showValue:[2,"showValue","showValue",E],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[D([H]),S,I],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(l(0,"div",0),f(1,X,4,13,"div",1)(2,Y,2,7,"div",2),p()),i&2&&(u(n.styleClass),r("ngStyle",n.style)("ngClass",j(12,K,n.mode==="determinate",n.mode==="indeterminate")),s("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",n.value+n.unit),a(),r("ngIf",n.mode==="determinate"),a(),r("ngIf",n.mode==="indeterminate"))},dependencies:[A,Q,V,z,O,g],encapsulation:2,changeDetection:0})}return e})(),ve=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=x({type:e});static \u0275inj=T({imports:[te,g,g]})}return e})();export{te as a,ve as b};
