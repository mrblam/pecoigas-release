import{a as Z}from"./chunk-T7MGMD7F.js";import{C as Y,d as X}from"./chunk-NQJUI4FG.js";import{Ba as G,Ca as J,Da as W}from"./chunk-3JLCQ6KU.js";import{Ab as g,Bb as j,Cb as b,Db as x,Fb as u,Hb as d,Ib as r,Jb as z,Ka as V,Kb as A,Mb as I,Nc as L,Ob as T,Pa as s,Pb as w,Qc as q,Sb as O,Tb as R,Ub as B,Uc as H,W as k,Xc as U,aa as $,ab as M,dc as N,eb as P,gb as S,hb as m,ja as E,ka as p,la as l,oa as y,ob as _,pb as c,qb as F,sb as D,sc as Q,tb as f,ua as C,wc as K,zb as h}from"./chunk-BQHCT3U7.js";var ie=["removeicon"],ne=["*"];function te(e,a){if(e&1){let i=u();h(0,"img",4),d("error",function(t){p(i);let o=r();return l(o.imageError(t))}),g()}if(e&2){let i=r();c("src",i.image,V)("alt",i.alt)}}function oe(e,a){if(e&1&&j(0,"span",6),e&2){let i=r(2);f(i.icon),c("ngClass","p-chip-icon"),_("data-pc-section","icon")}}function re(e,a){if(e&1&&m(0,oe,1,4,"span",5),e&2){let i=r();c("ngIf",i.icon)}}function ce(e,a){if(e&1&&(h(0,"div",7),R(1),g()),e&2){let i=r();_("data-pc-section","label"),s(),B(i.label)}}function ae(e,a){if(e&1){let i=u();h(0,"span",11),d("click",function(t){p(i);let o=r(3);return l(o.close(t))})("keydown",function(t){p(i);let o=r(3);return l(o.onKeydown(t))}),g()}if(e&2){let i=r(3);f(i.removeIcon),c("ngClass","p-chip-remove-icon"),_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel)}}function se(e,a){if(e&1){let i=u();h(0,"TimesCircleIcon",12),d("click",function(t){p(i);let o=r(3);return l(o.close(t))})("keydown",function(t){p(i);let o=r(3);return l(o.onKeydown(t))}),g()}if(e&2){let i=r(3);f("p-chip-remove-icon"),_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel)}}function pe(e,a){if(e&1&&(b(0),m(1,ae,1,5,"span",9)(2,se,1,4,"TimesCircleIcon",10),x()),e&2){let i=r(2);s(),c("ngIf",i.removeIcon),s(),c("ngIf",!i.removeIcon)}}function le(e,a){}function me(e,a){e&1&&m(0,le,0,0,"ng-template")}function _e(e,a){if(e&1){let i=u();h(0,"span",13),d("click",function(t){p(i);let o=r(2);return l(o.close(t))})("keydown",function(t){p(i);let o=r(2);return l(o.onKeydown(t))}),m(1,me,1,0,null,14),g()}if(e&2){let i=r(2);_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel),s(),c("ngTemplateOutlet",i.removeIconTemplate||i._removeIconTemplate)}}function he(e,a){if(e&1&&(b(0),m(1,pe,3,2,"ng-container",3)(2,_e,2,3,"span",8),x()),e&2){let i=r();s(),c("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate),s(),c("ngIf",i.removeIconTemplate||i._removeIconTemplate)}}var ge=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding: ${e("chip.padding.y")} ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-left: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${e("chip.padding.y")} / 2);
    padding-bottom: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.font.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,fe={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},ee=(()=>{class e extends X{name="chip";theme=ge;classes=fe;static \u0275fac=(()=>{let i;return function(t){return(i||(i=y(e)))(t||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var je=(()=>{class e extends Y{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new C;onImageError=new C;visible=!0;get removeAriaLabel(){return this.config.getTranslation(W.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(i){this._chipProps=i,i&&typeof i=="object"&&Object.entries(i).forEach(([n,t])=>this[`_${n}`]!==t&&(this[`_${n}`]=t))}_chipProps;_componentStyle=$(ee);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"removeicon":this._removeIconTemplate=i.template;break;default:this._removeIconTemplate=i.template;break}})}ngOnChanges(i){if(super.ngOnChanges(i),i.chipProps&&i.chipProps.currentValue){let{currentValue:n}=i.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.style!==void 0&&(this.style=n.style),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}containerClass(){let i="p-chip p-component";return this.styleClass&&(i+=` ${this.styleClass}`),i}close(i){this.visible=!1,this.onRemove.emit(i)}onKeydown(i){(i.key==="Enter"||i.key==="Backspace")&&this.close(i)}imageError(i){this.onImageError.emit(i)}static \u0275fac=(()=>{let i;return function(t){return(i||(i=y(e)))(t||e)}})();static \u0275cmp=M({type:e,selectors:[["p-chip"]],contentQueries:function(n,t,o){if(n&1&&(I(o,ie,4),I(o,G,4)),n&2){let v;T(v=w())&&(t.removeIconTemplate=v.first),T(v=w())&&(t.templates=v)}},hostVars:9,hostBindings:function(n,t){n&2&&(_("data-pc-name","chip")("aria-label",t.label)("data-pc-section","root"),D(t.style),f(t.containerClass()),F("display",!t.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",K],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[N([ee]),S,P,E],ngContentSelectors:ne,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(n,t){if(n&1&&(z(),A(0),m(1,te,1,2,"img",1)(2,re,1,1,"ng-template",null,0,Q)(4,ce,2,2,"div",2)(5,he,3,2,"ng-container",3)),n&2){let o=O(3);s(),c("ngIf",t.image)("ngIfElse",o),s(3),c("ngIf",t.label),s(),c("ngIf",t.removable)}},dependencies:[U,L,q,H,Z,J],encapsulation:2,changeDetection:0})}return e})();export{je as a};
