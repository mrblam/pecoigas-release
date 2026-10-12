import{a as ie}from"./chunk-5OOEOGBS.js";import{A as ee,C as te,d as W,g as X,l as Y,p as Z}from"./chunk-NQJUI4FG.js";import{$ as d,Ba as J,Ca as m,_ as p}from"./chunk-3JLCQ6KU.js";import{Ab as z,Eb as N,Fb as q,Hb as Q,Ib as u,Mb as y,Ob as _,Pa as S,Pb as C,Uc as G,V as v,W as x,X as E,Xc as H,aa as T,ab as w,bb as L,dc as R,eb as M,gb as V,gc as j,hb as c,ka as O,la as B,oa as b,ob as F,pb as g,rb as D,sb as $,sc as P,ua as f,ub as I,wc as r,xb as k,xc as U,yb as A,zb as K}from"./chunk-BQHCT3U7.js";var oe=["item"];function ae(i,a){return this.getOptionLabel(a)}var se=(i,a)=>({$implicit:i,index:a});function re(i,a){i&1&&N(0)}function ue(i,a){if(i&1&&c(0,re,1,0,"ng-container",3),i&2){let e=u(2),t=e.$implicit,n=e.$index,l=u();g("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",j(2,se,t,n))}}function de(i,a){i&1&&c(0,ue,1,5,"ng-template",null,0,P)}function ce(i,a){if(i&1){let e=q();K(0,"p-toggleButton",2),Q("onChange",function(n){let l=O(e),o=l.$implicit,s=l.$index,h=u();return B(h.onOptionSelect(n,o,s))}),c(1,de,2,0),z()}if(i&2){let e=a.$implicit,t=u();g("autofocus",t.autofocus)("styleClass",t.styleClass)("ngModel",t.isSelected(e))("onLabel",t.getOptionLabel(e))("offLabel",t.getOptionLabel(e))("disabled",t.disabled||t.isOptionDisabled(e))("allowEmpty",t.getAllowEmpty())("size",t.size),S(),I(t.itemTemplate||t._itemTemplate?1:-1)}}var pe=({dt:i})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${i("selectbutton.border.radius")};
    border-end-start-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${i("selectbutton.border.radius")};
    border-end-end-radius: ${i("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${i("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,me={root:({props:i})=>["p-selectbutton p-component",{"p-invalid":i.invalid}]},ne=(()=>{class i extends W{name="selectbutton";theme=pe;classes=me;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var he={provide:X,useExisting:v(()=>le),multi:!0},le=(()=>{class i extends te{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new f;onChange=new f;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=T(ne);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?p(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?p(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?p(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOptionSelect(e,t,n){if(this.disabled||this.isOptionDisabled(t))return;let l=this.isSelected(t);if(l&&this.unselectable)return;let o=this.getOptionValue(t),s;if(this.multiple)l?s=this.value.filter(h=>!d(h,o,this.equalityKey)):s=this.value?[...this.value,o]:[o];else{if(l&&!this.allowEmpty)return;s=l?null:o}this.focusedIndex=n,this.value=s,this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:n})}changeTabIndexes(e,t){let n,l;for(let o=0;o<=this.el.nativeElement.children.length-1;o++)this.el.nativeElement.children[o].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[o],index:o});t==="prev"?n.index===0?l=this.el.nativeElement.children.length-1:l=n.index-1:n.index===this.el.nativeElement.children.length-1?l=0:l=n.index+1,this.focusedIndex=l,this.el.nativeElement.children[l].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!d(t,this.getOptionValue(e),this.dataKey))}isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let l of this.value)if(d(l,n,this.dataKey)){t=!0;break}}}else t=d(this.getOptionValue(e),this.value,this.equalityKey);return t}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(i)))(n||i)}})();static \u0275cmp=w({type:i,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(t,n,l){if(t&1&&(y(l,oe,4),y(l,J,4)),t&2){let o;_(o=C())&&(n.itemTemplate=o.first),_(o=C())&&(n.templates=o)}},hostVars:10,hostBindings:function(t,n){t&2&&(F("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),$(n.style),D("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",r],tabindex:[2,"tabindex","tabindex",U],multiple:[2,"multiple","multiple",r],allowEmpty:[2,"allowEmpty","allowEmpty",r],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",r],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",r]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[R([he,ne]),V,M],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&k(0,ce,2,9,"p-toggleButton",1,ae,!0),t&2&&A(n.options)},dependencies:[ie,ee,Y,Z,H,G,m],encapsulation:2,changeDetection:0})}return i})(),Ie=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=E({imports:[le,m,m]})}return i})();export{le as a,Ie as b};
