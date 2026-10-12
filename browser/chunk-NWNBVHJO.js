import{b as Ee,c as we}from"./chunk-A6O2CKGO.js";import{C as je,G as Pe,M as Z,S as ke,T as Se,d as Ie}from"./chunk-NQJUI4FG.js";import{Ba as Te,Ca as S,Da as Q,E as F,N as ve,P as Ce,b as ge,i as be,ta as ye,u as H,ya as xe}from"./chunk-3JLCQ6KU.js";import{c as _e,d as O,f as z,g as M,h as A}from"./chunk-S35HUXPS.js";import{a as fe,b as de,d as he}from"./chunk-RJGXGAS2.js";import{Ab as d,Bb as w,Cb as R,Db as $,Eb as B,Fb as P,G as m,Gc as pe,Hb as T,Ib as p,Mb as g,Na as K,Nc as se,Ob as b,Pa as a,Pb as v,Qa as u,Qc as ae,Sb as D,Tb as ee,Tc as le,Ua as Y,Ub as te,Uc as me,W as j,X as N,Xc as ue,aa as y,ab as W,bb as J,dc as ne,eb as G,fc as k,gb as X,gc as ie,hb as l,ka as h,la as _,oa as E,ob as V,pb as c,sc as I,tb as x,ua as L,uc as oe,wc as re,xc as ce,ya as q,zb as f}from"./chunk-BQHCT3U7.js";var De=["content"],Oe=["accepticon"],ze=["rejecticon"],Me=["headless"],Ae=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),He=t=>({value:"open",params:t}),Ve=t=>({$implicit:t});function Fe(t,o){t&1&&B(0)}function Qe(t,o){if(t&1&&(R(0),l(1,Fe,1,0,"ng-container",8),$()),t&2){let e=p(2);a(),c("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)("ngTemplateOutletContext",k(2,Ve,e.confirmation))}}function Ze(t,o){t&1&&B(0)}function Ue(t,o){if(t&1&&(R(0),l(1,Ze,1,0,"ng-container",8),$()),t&2){let e=p(3);a(),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",k(2,Ve,e.confirmation))}}function Ne(t,o){if(t&1&&w(0,"i",15),t&2){let e=p(4);x(e.confirmation==null?null:e.confirmation.icon),c("ngClass","p-confirmpopup-icon")}}function qe(t,o){if(t&1&&(l(0,Ne,1,3,"i",13),f(1,"span",14),ee(2),d()),t&2){let e=p(3);c("ngIf",e.confirmation==null?null:e.confirmation.icon),a(2),te(e.confirmation==null?null:e.confirmation.message)}}function Ke(t,o){if(t&1&&w(0,"i"),t&2){let e=p(4);x(e.confirmation==null?null:e.confirmation.rejectIcon)}}function Ye(t,o){}function We(t,o){t&1&&l(0,Ye,0,0,"ng-template",null,3,I)}function Je(t,o){if(t&1){let e=P();f(0,"p-button",16),T("onClick",function(){h(e);let i=p(3);return _(i.onReject())}),l(1,Ke,1,2,"i",17)(2,We,2,0,null,18),d()}if(t&2){let e=p(3);c("label",e.rejectButtonLabel)("ngClass","p-confirmpopup-reject-button")("styleClass",e.confirmation==null?null:e.confirmation.rejectButtonStyleClass)("size",(e.confirmation.rejectButtonProps==null?null:e.confirmation.rejectButtonProps.size)||"small")("text",(e.confirmation.rejectButtonProps==null?null:e.confirmation.rejectButtonProps.text)||!1)("buttonProps",e.getRejectButtonProps()),V("aria-label",e.rejectButtonLabel),a(),c("ngIf",e.confirmation==null?null:e.confirmation.rejectIcon)("ngIfElse",e.rejecticon),a(),c("ngTemplateOutlet",e.rejectIconTemplate||e._rejectIconTemplate)}}function Ge(t,o){if(t&1&&w(0,"i"),t&2){let e=p(4);x(e.confirmation==null?null:e.confirmation.acceptIcon)}}function Xe(t,o){}function et(t,o){t&1&&l(0,Xe,0,0,"ng-template",null,4,I)}function tt(t,o){if(t&1){let e=P();f(0,"p-button",19),T("onClick",function(){h(e);let i=p(3);return _(i.onAccept())}),l(1,Ge,1,2,"i",17)(2,et,2,0,null,18),d()}if(t&2){let e=p(3);c("label",e.acceptButtonLabel)("ngClass","p-confirmpopup-accept-button")("styleClass",e.confirmation==null?null:e.confirmation.acceptButtonStyleClass)("size",(e.confirmation.acceptButtonProps==null?null:e.confirmation.acceptButtonProps.size)||"small")("buttonProps",e.getAcceptButtonProps()),V("aria-label",e.acceptButtonLabel),a(),c("ngIf",e.confirmation==null?null:e.confirmation.acceptIcon)("ngIfElse",e.accepticontemplate),a(),c("ngTemplateOutlet",e.acceptIconTemplate||e._acceptIconTemplate)}}function nt(t,o){if(t&1&&(f(0,"div",9,1),l(2,Ue,2,4,"ng-container",7)(3,qe,3,2,"ng-template",null,2,I),d(),f(5,"div",10),l(6,Je,3,10,"p-button",11)(7,tt,3,9,"p-button",12),d()),t&2){let e=D(4),n=p(2);a(2),c("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),a(4),c("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),a(),c("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function it(t,o){if(t&1){let e=P();f(0,"div",6),T("click",function(i){h(e);let r=p();return _(r.onOverlayClick(i))})("@animation.start",function(i){h(e);let r=p();return _(r.onAnimationStart(i))})("@animation.done",function(i){h(e);let r=p();return _(r.onAnimationEnd(i))}),l(1,Qe,2,4,"ng-container",7)(2,nt,8,4,"ng-template",null,0,I),d()}if(t&2){let e=D(3),n=p();x(n.styleClass),c("ngClass","p-confirmpopup p-component")("ngStyle",n.style)("@animation",k(10,He,ie(7,Ae,n.showTransitionOptions,n.hideTransitionOptions))),a(),c("ngIf",n.headlessTemplate||n._headlessTemplate)("ngIfElse",e)}}var ot=({dt:t})=>`
.p-confirmpopup {
    position: absolute;
    margin-top: ${t("confirmpopup.gutter")};
    top: 0;
    left: 0;
    background: ${t("confirmpopup.background")};
    color: ${t("confirmpopup.color")};
    border: 1px solid ${t("confirmpopup.border.color")};
    border-radius: ${t("confirmpopup.border.radius")};
    box-shadow: ${t("confirmpopup.shadow")};
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: ${t("confirmpopup.content.padding")};
    gap: ${t("confirmpopup.content.gap")};
}

.p-confirmpopup-icon {
    font-size: ${t("confirmpopup.icon.size")};
    width: ${t("confirmpopup.icon.size")};
    height: ${t("confirmpopup.icon.size")};
    color: ${t("confirmpopup.icon.color")};
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: ${t("confirmpopup.footer.gap")};
    padding: ${t("confirmpopup.footer.padding")};
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(${t("confirmpopup.gutter")} * -1);
    margin-bottom: ${t("confirmpopup.gutter")};
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: ${t("confirmpopup.arrow.offset")};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(${t("confirmpopup.gutter")} - 2px);
    margin-left: calc(-1 * (${t("confirmpopup.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("confirmpopup.background")};
}

.p-confirmpopup:before {
    border-width: ${t("confirmpopup.gutter")};
    margin-left: calc(-1 * ${t("confirmpopup.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("confirmpopup.border.color")};
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${t("confirmpopup.background")};
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${t("confirmpopup.border.color")};
}
`,rt={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},Le=(()=>{class t extends Ie{name="confirmpopup";theme=ot;classes=rt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=E(t)))(i||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var ct=(()=>{class t extends je{el;confirmationService;renderer;cd;overlayService;document;key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(e){this._visible=e,this.cd.markForCheck()}container;subscription;confirmation;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=y(Le);constructor(e,n,i,r,s,$e){super(),this.el=e,this.confirmationService=n,this.renderer=i,this.cd=r,this.overlayService=s,this.document=$e,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(C=>{if(!C){this.hide();return}C.key===this.key&&(this.confirmation=C,Object.keys(C).forEach(U=>{this[U]=C[U]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new L,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new L,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"rejecticon":this._rejectIconTemplate=e.template;break;case"accepticon":this._acceptIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break}})}option(e,n){let i=this;if(i.hasOwnProperty(e))return n?i[n]:i[e]}onEscapeKeydown(e){this.confirmation&&this.confirmation.closeOnEscape&&this.onReject()}onAnimationStart(e){if(e.toState==="open"){this.container=e.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners();let n=this.getElementToFocus();n&&n.focus()}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy();break}}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}getElementToFocus(){switch(this.defaultFocus){case"accept":return H(this.container,".p-confirm-popup-accept");case"reject":return H(this.container,".p-confirm-popup-reject");case"none":return null}}align(){if(this.autoZIndex&&Z.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;be(this.container,this.confirmation?.target,!1);let e=F(this.container),n=F(this.confirmation?.target),i=0;e.left<n.left&&(i=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${i}px`),e.top<n.top&&ge(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let e=ve()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,i=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let r=this.confirmation.target;this.container!==i.target&&!this.container?.contains(i.target)&&r!==i.target&&!r.contains(i.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!Ce()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Pe(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&Z.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(Q.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(Q.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)(u(q),u(ye),u(Y),u(oe),u(xe),u(pe))};static \u0275cmp=W({type:t,selectors:[["p-confirmPopup"],["p-confirmpopup"],["p-confirm-popup"]],contentQueries:function(n,i,r){if(n&1&&(g(r,De,4),g(r,Oe,4),g(r,ze,4),g(r,Me,4),g(r,Te,4)),n&2){let s;b(s=v())&&(i.contentTemplate=s.first),b(s=v())&&(i.acceptIconTemplate=s.first),b(s=v())&&(i.rejectIconTemplate=s.first),b(s=v())&&(i.headlessTemplate=s.first),b(s=v())&&(i.templates=s)}},hostBindings:function(n,i){n&1&&T("keydown.escape",function(s){return i.onEscapeKeydown(s)},!1,K)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",re],baseZIndex:[2,"baseZIndex","baseZIndex",ce],style:"style",styleClass:"styleClass",visible:"visible"},features:[ne([Le]),X,G],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["rejecticon",""],["accepticontemplate",""],["role","alertdialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","alertdialog",3,"click","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-confirmpopup-content"],[1,"p-confirmpopup-footer"],["type","button",3,"label","ngClass","styleClass","size","text","buttonProps","onClick",4,"ngIf"],["type","button",3,"label","ngClass","styleClass","size","buttonProps","onClick",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[1,"p-confirmpopup-message"],[3,"ngClass"],["type","button",3,"onClick","label","ngClass","styleClass","size","text","buttonProps"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","ngClass","styleClass","size","buttonProps"]],template:function(n,i){n&1&&l(0,it,4,12,"div",5),n&2&&c("ngIf",i.visible)},dependencies:[ue,se,ae,me,le,S,Se,ke],encapsulation:2,data:{animation:[_e("animation",[M("void",z({transform:"scaleY(0.8)",opacity:0})),M("open",z({transform:"translateY(0)",opacity:1})),A("void => open",O("{{showTransitionParams}}")),A("open => void",O("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),Lt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=J({type:t});static \u0275inj=N({imports:[ct,S,S]})}return t})();var Re=class t extends Ee{config=y(we);httpClient=y(he);_sharedHeaders=new fe({"Content-Type":"application/json"});getVehiclesByEntity(o){return this.httpClient.get(`${this.config.apiUrl}/api/v1/Entities/${o}/Vehicles`,{headers:this._sharedHeaders}).pipe(m(this.handleError))}getVehiclesFilter(o,e,n,i){let r=new de;return o&&(r=r.set("EntityId",o)),e&&(r=r.set("PageIndex",e)),n&&(r=r.set("PageSize",n)),i&&(r=r.set("Filter",i)),this.httpClient.get(`${this.config.apiUrl}/api/v1/Vehicles/filter`,{params:r,headers:this._sharedHeaders}).pipe(m(this.handleError))}getVehicleDetail(o){return this.httpClient.get(`${this.config.apiUrl}/api/v1/Vehicles/${o}`,{headers:this._sharedHeaders}).pipe(m(this.handleError))}createVehicle(o){return this.httpClient.post(`${this.config.apiUrl}/api/v1/Vehicles`,o,{headers:this._sharedHeaders}).pipe(m(this.handleError))}updateVehicle(o,e){return this.httpClient.put(`${this.config.apiUrl}/api/v1/Vehicles/${o}`,e,{headers:this._sharedHeaders}).pipe(m(this.handleError))}deleteVehicle(o){return this.httpClient.delete(`${this.config.apiUrl}/api/v1/Vehicles/${o}`,{headers:this._sharedHeaders}).pipe(m(this.handleError))}static \u0275fac=(()=>{let o;return function(n){return(o||(o=E(t)))(n||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})};export{Lt as a,Re as b};
