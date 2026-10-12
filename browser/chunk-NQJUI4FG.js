import{Ba as Hn,Ca as de,E as Pn,F as Ln,J as Qt,R as Rn,V as Bn,W as k,Z as V,b as Se,d as $e,da as ue,ea as ne,fa as Ue,ga as Yt,ha as Et,ja as jn,k as Nn,la as N,ma as we,na as De,pa as $t,q as Tn,qa as Jt,ra as qe,u as Me,ua as M,z as Kt}from"./chunk-3JLCQ6KU.js";import{A as _n,Ab as le,Ac as Ge,Bb as X,Ca as Ee,Cb as vt,Db as _t,Dc as Zt,Eb as En,Gc as ce,Hb as Ce,Ib as q,Jb as Ct,Kb as St,Mb as je,Nc as An,Ob as He,Pa as A,Pb as ze,Qa as C,Qb as Ut,Qc as In,Rb as $n,Tb as wt,Tc as kn,U as bt,Ua as Be,Ub as Dt,Uc as Fn,V as W,W as $,Wa as B,X as R,Xa as Wt,Xc as We,Z as ie,Zc as Vt,_c as On,a as f,aa as m,ab as J,b as G,bb as j,cb as _,da as Cn,dc as D,eb as b,fc as qt,gb as ye,hb as ve,ja as U,jb as wn,k as mt,lb as Dn,ma as yt,o as yn,oa as y,ob as I,pb as E,qa as Gt,qb as xn,rb as _e,sb as Vn,tb as se,u as vn,ua as Y,uc as xt,va as Sn,wc as S,xa as re,xc as Mn,ya as be,yc as ee,zb as ae,zc as te}from"./chunk-BQHCT3U7.js";var Jn=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(C(Be),C(be))};static \u0275dir=_({type:t})}return t})(),sn=(()=>{class t extends Jn{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,features:[b]})}return t})(),Xe=new ie(""),uo={provide:Xe,useExisting:W(()=>ho),multi:!0},ho=(()=>{class t extends sn{writeValue(e){this.setProperty("checked",e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,o){i&1&&Ce("change",function(s){return o.onChange(s.target.checked)})("blur",function(){return o.onTouched()})},standalone:!1,features:[D([uo]),b]})}return t})(),po={provide:Xe,useExisting:W(()=>Xn),multi:!0};function fo(){let t=Zt()?Zt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var go=new ie(""),Xn=(()=>{class t extends Jn{_compositionMode;_composing=!1;constructor(e,i,o){super(e,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!fo())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(C(Be),C(be),C(go,8))};static \u0275dir=_({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&Ce("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[D([po]),b]})}return t})();function he(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function ei(t){return t!=null&&typeof t.length=="number"}var Ve=new ie(""),et=new ie(""),mo=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,zn=class{static min(n){return bo(n)}static max(n){return yo(n)}static required(n){return ti(n)}static requiredTrue(n){return vo(n)}static email(n){return _o(n)}static minLength(n){return Co(n)}static maxLength(n){return ni(n)}static pattern(n){return So(n)}static nullValidator(n){return At(n)}static compose(n){return li(n)}static composeAsync(n){return ui(n)}};function bo(t){return n=>{if(he(n.value)||he(t))return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function yo(t){return n=>{if(he(n.value)||he(t))return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function ti(t){return he(t.value)?{required:!0}:null}function vo(t){return t.value===!0?null:{required:!0}}function _o(t){return he(t.value)||mo.test(t.value)?null:{email:!0}}function Co(t){return n=>he(n.value)||!ei(n.value)?null:n.value.length<t?{minlength:{requiredLength:t,actualLength:n.value.length}}:null}function ni(t){return n=>ei(n.value)&&n.value.length>t?{maxlength:{requiredLength:t,actualLength:n.value.length}}:null}function So(t){if(!t)return At;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(he(i.value))return null;let o=i.value;return n.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function At(t){return null}function ii(t){return t!=null}function oi(t){return wn(t)?yn(t):t}function ri(t){let n={};return t.forEach(e=>{n=e!=null?f(f({},n),e):n}),Object.keys(n).length===0?null:n}function si(t,n){return n.map(e=>e(t))}function wo(t){return!t.validate}function ai(t){return t.map(n=>wo(n)?n:e=>n.validate(e))}function li(t){if(!t)return null;let n=t.filter(ii);return n.length==0?null:function(e){return ri(si(e,n))}}function ci(t){return t!=null?li(ai(t)):null}function ui(t){if(!t)return null;let n=t.filter(ii);return n.length==0?null:function(e){let i=si(e,n).map(oi);return _n(i).pipe(vn(ri))}}function di(t){return t!=null?ui(ai(t)):null}function Gn(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function hi(t){return t._rawValidators}function pi(t){return t._rawAsyncValidators}function Xt(t){return t?Array.isArray(t)?t:[t]:[]}function It(t,n){return Array.isArray(t)?t.includes(n):t===n}function Wn(t,n){let e=Xt(n);return Xt(t).forEach(o=>{It(e,o)||e.push(o)}),e}function Un(t,n){return Xt(n).filter(e=>!It(t,e))}var kt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ci(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=di(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},T=class extends kt{name;get formDirective(){return null}get path(){return null}},xe=class extends kt{_parent=null;name=null;valueAccessor=null},Ft=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Do={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},rs=G(f({},Do),{"[class.ng-submitted]":"isSubmitted"}),ss=(()=>{class t extends Ft{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(C(xe,2))};static \u0275dir=_({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&_e("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[b]})}return t})(),as=(()=>{class t extends Ft{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(C(T,10))};static \u0275dir=_({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&_e("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[b]})}return t})();var Ze="VALID",Mt="INVALID",Ae="PENDING",Ke="DISABLED",pe=class{},Ot=class extends pe{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Qe=class extends pe{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Ye=class extends pe{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ie=class extends pe{status;source;constructor(n,e){super(),this.status=n,this.source=e}},en=class extends pe{source;constructor(n){super(),this.source=n}},tn=class extends pe{source;constructor(n){super(),this.source=n}};function an(t){return(Lt(t)?t.validators:t)||null}function xo(t){return Array.isArray(t)?ci(t):t||null}function ln(t,n){return(Lt(n)?n.asyncValidators:t)||null}function Vo(t){return Array.isArray(t)?di(t):t||null}function Lt(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function fi(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new bt(1e3,"");if(!i[e])throw new bt(1001,"")}function gi(t,n,e){t._forEachChild((i,o)=>{if(e[o]===void 0)throw new bt(1002,"")})}var ke=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return te(this.statusReactive)}set status(n){te(()=>this.statusReactive.set(n))}_status=ee(()=>this.statusReactive());statusReactive=B(void 0);get valid(){return this.status===Ze}get invalid(){return this.status===Mt}get pending(){return this.status==Ae}get disabled(){return this.status===Ke}get enabled(){return this.status!==Ke}errors;get pristine(){return te(this.pristineReactive)}set pristine(n){te(()=>this.pristineReactive.set(n))}_pristine=ee(()=>this.pristineReactive());pristineReactive=B(!0);get dirty(){return!this.pristine}get touched(){return te(this.touchedReactive)}set touched(n){te(()=>this.touchedReactive.set(n))}_touched=ee(()=>this.touchedReactive());touchedReactive=B(!1);get untouched(){return!this.touched}_events=new mt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Wn(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Wn(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Un(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Un(n,this._rawAsyncValidators))}hasValidator(n){return It(this._rawValidators,n)}hasAsyncValidator(n){return It(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(G(f({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Ye(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Ye(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(G(f({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Qe(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Qe(!0,i))}markAsPending(n={}){this.status=Ae;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ie(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(G(f({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ke,this.errors=null,this._forEachChild(o=>{o.disable(G(f({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ot(this.value,i)),this._events.next(new Ie(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(f({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ze,this._forEachChild(i=>{i.enable(G(f({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(f({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ze||this.status===Ae)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ot(this.value,e)),this._events.next(new Ie(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(G(f({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ke:Ze}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ae,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=oi(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,o)=>i&&i._find(o),this)}getError(n,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Ie(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new Y,this.statusChanges=new Y}_calculateStatus(){return this._allControlsDisabled()?Ke:this.errors?Mt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ae)?Ae:this._anyControlsHaveStatus(Mt)?Mt:Ze}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,e),o&&this._events.next(new Qe(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ye(this.touched,e)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Lt(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let e=this._parent&&this._parent.dirty;return!n&&!!e&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=xo(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Vo(this._rawAsyncValidators)}},Nt=class extends ke{constructor(n,e,i){super(an(e),ln(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){gi(this,!0,n),Object.keys(n).forEach(i=>{fi(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,o)=>((i.enabled||this.disabled)&&(e[o]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((o,r)=>{i=e(i,o,r)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var nn=class extends Nt{};var Rt=new ie("CallSetDisabledState",{providedIn:"root",factory:()=>Bt}),Bt="always";function jt(t,n){return[...n.path,t]}function on(t,n,e=Bt){cn(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),$o(t,n),Ao(t,n),Mo(t,n),Eo(t,n)}function qn(t,n,e=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),Pt(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Tt(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Eo(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function cn(t,n){let e=hi(t);n.validator!==null?t.setValidators(Gn(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=pi(t);n.asyncValidator!==null?t.setAsyncValidators(Gn(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let o=()=>t.updateValueAndValidity();Tt(n._rawValidators,o),Tt(n._rawAsyncValidators,o)}function Pt(t,n){let e=!1;if(t!==null){if(n.validator!==null){let o=hi(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(n.asyncValidator!==null){let o=pi(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let i=()=>{};return Tt(n._rawValidators,i),Tt(n._rawAsyncValidators,i),e}function $o(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&mi(t,n)})}function Mo(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&mi(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function mi(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ao(t,n){let e=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Io(t,n){t==null,cn(t,n)}function ko(t,n){return Pt(t,n)}function bi(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Fo(t){return Object.getPrototypeOf(t.constructor)===sn}function Oo(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function yi(t,n){if(!n)return null;Array.isArray(n);let e,i,o;return n.forEach(r=>{r.constructor===Xn?e=r:Fo(r)?i=r:o=r}),o||i||e||null}function No(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Zn(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Kn(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Je=class extends ke{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(an(e),ln(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Lt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Kn(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Zn(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Zn(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Kn(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var To=t=>t instanceof Je,Po=(()=>{class t extends T{_parent;ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return jt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,standalone:!1,features:[b]})}return t})();var Lo={provide:xe,useExisting:W(()=>Ro)},Qn=Promise.resolve(),Ro=(()=>{class t extends xe{_changeDetectorRef;callSetDisabledState;control=new Je;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Y;constructor(e,i,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=yi(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),bi(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){on(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Qn.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,o=i!==0&&S(i);Qn.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?jt(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(C(T,9),C(Ve,10),C(et,10),C(Xe,10),C(xt,8),C(Rt,8))};static \u0275dir=_({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[D([Lo]),b,U]})}return t})(),cs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=_({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),Bo={provide:Xe,useExisting:W(()=>jo),multi:!0},jo=(()=>{class t extends sn{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&Ce("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[D([Bo]),b]})}return t})();var vi=new ie("");var Ho={provide:T,useExisting:W(()=>_i)},_i=(()=>{class t extends T{callSetDisabledState;get submitted(){return te(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ee(()=>this._submittedReactive());_submittedReactive=B(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new Y;constructor(e,i,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Pt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let i=this.form.get(e.path);return on(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){qn(e.control||null,e,!1),No(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,i){this.form.get(e.path).setValue(i)}onSubmit(e){return this._submittedReactive.set(!0),Oo(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new en(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new tn(this.form))}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,o=this.form.get(e.path);i!==o&&(qn(i||null,e),To(o)&&(on(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Io(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let i=this.form.get(e.path);i&&ko(i,e)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){cn(this.form,this),this._oldForm&&Pt(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(C(Ve,10),C(et,10),C(Rt,8))};static \u0275dir=_({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&Ce("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[D([Ho]),b,U]})}return t})(),zo={provide:T,useExisting:W(()=>Ci)},Ci=(()=>{class t extends Po{name=null;constructor(e,i,o){super(),this._parent=e,this._setValidators(i),this._setAsyncValidators(o)}_checkParentType(){wi(this._parent)}static \u0275fac=function(i){return new(i||t)(C(T,13),C(Ve,10),C(et,10))};static \u0275dir=_({type:t,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},standalone:!1,features:[D([zo]),b]})}return t})(),Go={provide:T,useExisting:W(()=>Si)},Si=(()=>{class t extends T{_parent;name=null;constructor(e,i,o){super(),this._parent=e,this._setValidators(i),this._setAsyncValidators(o)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return jt(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){wi(this._parent)}static \u0275fac=function(i){return new(i||t)(C(T,13),C(Ve,10),C(et,10))};static \u0275dir=_({type:t,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},standalone:!1,features:[D([Go]),b]})}return t})();function wi(t){return!(t instanceof Ci)&&!(t instanceof _i)&&!(t instanceof Si)}var Wo={provide:xe,useExisting:W(()=>Uo)},Uo=(()=>{class t extends xe{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new Y;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=yi(this,r)}ngOnChanges(e){this._added||this._setUpControl(),bi(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return jt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(C(T,13),C(Ve,10),C(et,10),C(Xe,10),C(vi,8))};static \u0275dir=_({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[D([Wo]),b,U]})}return t})();function qo(t){return typeof t=="number"?t:parseInt(t,10)}var Di=(()=>{class t{_validator=At;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):At,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=_({type:t,features:[U]})}return t})();var Zo={provide:Ve,useExisting:W(()=>Ko),multi:!0};var Ko=(()=>{class t extends Di{required;inputName="required";normalizeInput=S;createValidator=e=>ti;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&I("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[D([Zo]),b]})}return t})();var Qo={provide:Ve,useExisting:W(()=>Yo),multi:!0},Yo=(()=>{class t extends Di{maxlength;inputName="maxlength";normalizeInput=e=>qo(e);createValidator=e=>ni(e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(i,o){i&2&&I("maxlength",o._enabled?o.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[D([Qo]),b]})}return t})();var xi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=R({})}return t})(),rn=class extends ke{constructor(n,e,i){super(an(e),ln(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){gi(this,!1,n),n.forEach((i,o)=>{fi(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function Yn(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var us=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let o=this._reduceControls(e),r={};return Yn(i)?r=i:i!==null&&(r.validators=i.validator,r.asyncValidators=i.asyncValidator),new Nt(o,r)}record(e,i=null){let o=this._reduceControls(e);return new nn(o,i)}control(e,i,o){let r={};return this.useNonNullable?(Yn(i)?r=i:(r.validators=i,r.asyncValidators=o),new Je(e,G(f({},r),{nonNullable:!0}))):new Je(e,i,o)}array(e,i,o){let r=e.map(s=>this._createControl(s));return new rn(r,i,o)}_reduceControls(e){let i={};return Object.keys(e).forEach(o=>{i[o]=this._createControl(e[o])}),i}_createControl(e){if(e instanceof Je)return e;if(e instanceof ke)return e;if(Array.isArray(e)){let i=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(i,o,r)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ds=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Rt,useValue:e.callSetDisabledState??Bt}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=R({imports:[xi]})}return t})(),hs=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:vi,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Rt,useValue:e.callSetDisabledState??Bt}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=R({imports:[xi]})}return t})();var Jo=Object.defineProperty,Xo=Object.defineProperties,er=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertySymbols,$i=Object.prototype.hasOwnProperty,Mi=Object.prototype.propertyIsEnumerable,Vi=(t,n,e)=>n in t?Jo(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,x=(t,n)=>{for(var e in n||(n={}))$i.call(n,e)&&Vi(t,e,n[e]);if(Ht)for(var e of Ht(n))Mi.call(n,e)&&Vi(t,e,n[e]);return t},Oe=(t,n)=>Xo(t,er(n)),oe=(t,n)=>{var e={};for(var i in t)$i.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Ht)for(var i of Ht(t))n.indexOf(i)<0&&Mi.call(t,i)&&(e[i]=t[i]);return e};var tr=Bn(),P=tr;function Ei(t,n){Et(t)?t.push(...n||[]):ue(t)&&Object.assign(t,n)}function nr(t){return ue(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function ir(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function un(t="",n=""){return ir(`${Ue(t,!1)&&Ue(n,!1)?`${t}-`:t}${n}`)}function Ai(t="",n=""){return`--${un(t,n)}`}function or(t=""){let n=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(n+e)%2!==0}function Ii(t,n="",e="",i=[],o){if(Ue(t)){let r=/{([^}]*)}/g,s=t.trim();if(or(s))return;if(N(s,r)){let a=s.replaceAll(r,c=>{let h=c.replace(/{|}/g,"").split(".").filter(p=>!i.some(v=>N(p,v)));return`var(${Ai(e,$t(h.join("-")))}${V(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return N(a.replace(u,"0"),l)?`calc(${a})`:a}return s}else if(jn(t))return t}function rr(t,n,e){Ue(n,!1)&&t.push(`${n}:${e};`)}function Fe(t,n){return t?`${t}{${n}}`:""}var Ne=(...t)=>sr(g.getTheme(),...t),sr=(t={},n,e,i)=>{if(n){let{variable:o,options:r}=g.defaults||{},{prefix:s,transform:a}=t?.options||r||{},u=N(n,/{([^}]*)}/g)?n:`{${n}}`;return i==="value"||k(i)&&a==="strict"?g.getTokenValue(n):Ii(u,void 0,s,[o.excludedKeyRegex],e)}return""};var ar=(t={})=>{let{preset:n,options:e}=t;return{preset(i){return n=n?we(n,i):i,this},options(i){return e=e?x(x({},e),i):i,this},primaryPalette(i){let{semantic:o}=n||{};return n=Oe(x({},n),{semantic:Oe(x({},o),{primary:i})}),this},surfacePalette(i){var o,r;let{semantic:s}=n||{},a=i?.hasOwnProperty("light")?i?.light:i,l=i?.hasOwnProperty("dark")?i?.dark:i,u={colorScheme:{light:x(x({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:x(x({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return n=Oe(x({},n),{semantic:x(x({},s),u)}),this},define({useDefaultPreset:i=!1,useDefaultOptions:o=!1}={}){return{preset:i?g.getPreset():n,options:o?g.getOptions():e}},update({mergePresets:i=!0,mergeOptions:o=!0}={}){let r={preset:i?we(g.getPreset(),n):n,options:o?x(x({},g.getOptions()),e):e};return g.setTheme(r),r},use(i){let o=this.define(i);return g.setTheme(o),o}}};function lr(t,n={}){let e=g.defaults.variable,{prefix:i=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=n,s=(u,c="")=>Object.entries(u).reduce((d,[h,p])=>{let v=N(h,r)?un(c):un(c,$t(h)),w=nr(p);if(ue(w)){let{variables:H,tokens:Q}=s(w,v);Ei(d.tokens,Q),Ei(d.variables,H)}else d.tokens.push((i?v.replace(`${i}-`,""):v).replaceAll("-",".")),rr(d.variables,Ai(v),Ii(w,v,i,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,i);return{value:a,tokens:l,declarations:a.join(""),css:Fe(o,a.join(""))}}var K={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let n=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var i;return(i=n.map(o=>o.resolve(e)).find(o=>o.matched))!=null?i:this.rules.custom.resolve(e)})}},_toVariables(t,n){return lr(t,{prefix:n?.prefix})},getCommon({name:t="",theme:n={},params:e,set:i,defaults:o}){var r,s,a,l,u,c,d;let{preset:h,options:p}=n,v,w,H,Q,O,me,z;if(V(h)&&p.transform!=="strict"){let{primitive:tt,semantic:nt,extend:it}=h,Pe=nt||{},{colorScheme:ot}=Pe,rt=oe(Pe,["colorScheme"]),st=it||{},{colorScheme:at}=st,Le=oe(st,["colorScheme"]),Re=ot||{},{dark:lt}=Re,ct=oe(Re,["dark"]),ut=at||{},{dark:dt}=ut,ht=oe(ut,["dark"]),pt=V(tt)?this._toVariables({primitive:tt},p):{},ft=V(rt)?this._toVariables({semantic:rt},p):{},gt=V(ct)?this._toVariables({light:ct},p):{},fn=V(lt)?this._toVariables({dark:lt},p):{},gn=V(Le)?this._toVariables({semantic:Le},p):{},mn=V(ht)?this._toVariables({light:ht},p):{},bn=V(dt)?this._toVariables({dark:dt},p):{},[Ui,qi]=[(r=pt.declarations)!=null?r:"",pt.tokens],[Zi,Ki]=[(s=ft.declarations)!=null?s:"",ft.tokens||[]],[Qi,Yi]=[(a=gt.declarations)!=null?a:"",gt.tokens||[]],[Ji,Xi]=[(l=fn.declarations)!=null?l:"",fn.tokens||[]],[eo,to]=[(u=gn.declarations)!=null?u:"",gn.tokens||[]],[no,io]=[(c=mn.declarations)!=null?c:"",mn.tokens||[]],[oo,ro]=[(d=bn.declarations)!=null?d:"",bn.tokens||[]];v=this.transformCSS(t,Ui,"light","variable",p,i,o),w=qi;let so=this.transformCSS(t,`${Zi}${Qi}`,"light","variable",p,i,o),ao=this.transformCSS(t,`${Ji}`,"dark","variable",p,i,o);H=`${so}${ao}`,Q=[...new Set([...Ki,...Yi,...Xi])];let lo=this.transformCSS(t,`${eo}${no}color-scheme:light`,"light","variable",p,i,o),co=this.transformCSS(t,`${oo}color-scheme:dark`,"dark","variable",p,i,o);O=`${lo}${co}`,me=[...new Set([...to,...io,...ro])],z=ne(h.css,{dt:Ne})}return{primitive:{css:v,tokens:w},semantic:{css:H,tokens:Q},global:{css:O,tokens:me},style:z}},getPreset({name:t="",preset:n={},options:e,params:i,set:o,defaults:r,selector:s}){var a,l,u;let c,d,h;if(V(n)&&e.transform!=="strict"){let p=t.replace("-directive",""),v=n,{colorScheme:w,extend:H,css:Q}=v,O=oe(v,["colorScheme","extend","css"]),me=H||{},{colorScheme:z}=me,tt=oe(me,["colorScheme"]),nt=w||{},{dark:it}=nt,Pe=oe(nt,["dark"]),ot=z||{},{dark:rt}=ot,st=oe(ot,["dark"]),at=V(O)?this._toVariables({[p]:x(x({},O),tt)},e):{},Le=V(Pe)?this._toVariables({[p]:x(x({},Pe),st)},e):{},Re=V(it)?this._toVariables({[p]:x(x({},it),rt)},e):{},[lt,ct]=[(a=at.declarations)!=null?a:"",at.tokens||[]],[ut,dt]=[(l=Le.declarations)!=null?l:"",Le.tokens||[]],[ht,pt]=[(u=Re.declarations)!=null?u:"",Re.tokens||[]],ft=this.transformCSS(p,`${lt}${ut}`,"light","variable",e,o,r,s),gt=this.transformCSS(p,ht,"dark","variable",e,o,r,s);c=`${ft}${gt}`,d=[...new Set([...ct,...dt,...pt])],h=ne(Q,{dt:Ne})}return{css:c,tokens:d,style:h}},getPresetC({name:t="",theme:n={},params:e,set:i,defaults:o}){var r;let{preset:s,options:a}=n,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:i,defaults:o})},getPresetD({name:t="",theme:n={},params:e,set:i,defaults:o}){var r;let s=t.replace("-directive",""),{preset:a,options:l}=n,u=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:u,options:l,params:e,set:i,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,n){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?n.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:n.options.darkModeSelector):[]},getLayerOrder(t,n={},e,i){let{cssLayer:o}=n;return o?`@layer ${ne(o.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:n={},params:e,props:i={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:n,params:e,set:o,defaults:r}),a=Object.entries(i).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(c?.css){let d=De(c?.css),h=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:n={},params:e,props:i={},set:o,defaults:r}){var s;let a={name:t,theme:n,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(i).reduce((c,[d,h])=>c.push(`${d}="${h}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${De(l)}</style>`:""},createTokens(t={},n,e="",i="",o={}){return Object.entries(t).forEach(([r,s])=>{let a=N(r,n.variable.excludedKeyRegex)?e:e?`${e}.${Jt(r)}`:Jt(r),l=i?`${i}.${r}`:r;ue(s)?this.createTokens(s,n,a,l,o):(o[a]||(o[a]={paths:[],computed(u,c={}){var d,h;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,c.binding):u&&u!=="none"?(h=this.paths.find(p=>p.scheme===u))==null?void 0:h.computed(u,c.binding):this.paths.map(p=>p.computed(p.scheme,c[p.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(u,c={}){let d=/{([^}]*)}/g,h=s;if(c.name=this.path,c.binding||(c.binding={}),N(s,d)){let v=s.trim().replaceAll(d,Q=>{var O;let me=Q.replace(/{|}/g,""),z=(O=o[me])==null?void 0:O.computed(u,c);return Et(z)&&z.length===2?`light-dark(${z[0].value},${z[1].value})`:z?.value}),w=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,H=/var\([^)]+\)/g;h=N(v.replace(H,"0"),w)?`calc(${v})`:v}return k(c.binding)&&delete c.binding,{colorScheme:u,path:this.path,paths:c,value:h.includes("undefined")?void 0:h}}}))}),o},getTokenValue(t,n,e){var i;let r=(l=>l.split(".").filter(c=>!N(c.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(n),s=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,a=[(i=t[r])==null?void 0:i.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},u)=>{let c=u,{colorScheme:d}=c,h=oe(c,["colorScheme"]);return l[d]=h,l},void 0)},getSelectorRule(t,n,e,i){return e==="class"||e==="attr"?Fe(V(n)?`${t}${n},${t} ${n}`:t,i):Fe(t,V(n)?Fe(n,i):i)},transformCSS(t,n,e,i,o={},r,s,a){if(V(n)){let{cssLayer:l}=o;if(i!=="style"){let u=this.getColorSchemeOption(o,s);n=e==="dark"?u.reduce((c,{type:d,selector:h})=>(V(h)&&(c+=h.includes("[CSS]")?h.replace("[CSS]",n):this.getSelectorRule(h,a,d,n)),c),""):Fe(a??":root",n)}if(l){let u={name:"primeui",order:"primeui"};ue(l)&&(u.name=ne(l.name,{name:t,type:i})),V(u.name)&&(n=Fe(`@layer ${u.name}`,n),r?.layerNames(u.name))}return n}return""}},g={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:n}=t;n&&(this._theme=Oe(x({},n),{options:x(x({},this.defaults.options),n.options)}),this._tokens=K.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),P.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Oe(x({},this.theme),{preset:t}),this._tokens=K.createTokens(t,this.defaults),this.clearLoadedStyleNames(),P.emit("preset:change",t),P.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Oe(x({},this.theme),{options:t}),this.clearLoadedStyleNames(),P.emit("options:change",t),P.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return K.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",n){return K.getCommon({name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",n){let e={name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return K.getPresetC(e)},getDirective(t="",n){let e={name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return K.getPresetD(e)},getCustomPreset(t="",n,e,i){let o={name:t,preset:n,options:this.options,selector:e,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return K.getPreset(o)},getLayerOrderCSS(t=""){return K.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",n,e="style",i){return K.transformCSS(t,n,i,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",n,e={}){return K.getCommonStyleSheet({name:t,theme:this.theme,params:n,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,n,e={}){return K.getStyleSheet({name:t,theme:this.theme,params:n,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),P.emit(`theme:${n}:load`,t),!this._loadingStyles.size&&P.emit("theme:load"))}};function Ds(...t){let n=we(g.getPreset(),...t);return g.setPreset(n),n}function xs(t){return ar().surfacePalette(t).update().preset}var cr=0,ki=(()=>{class t{document=m(ce);use(e,i={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++cr}`,id:c=void 0,media:d=void 0,nonce:h=void 0,first:p=!1,props:v={}}=i;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=e;let w=this.document.head;p&&w.firstChild?w.insertBefore(s,w.firstChild):w.appendChild(s),Tn(s,{type:"text/css",media:d,nonce:h,"data-primeng-style-id":u})}return s.textContent!==r&&(s.textContent=r),{id:c,name:u,el:s,css:r}}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Te={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},ur=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,dr=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,F=(()=>{class t{name="base";useStyle=m(ki);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,i={},o=r=>r)=>{let r=o(ne(e,{dt:Ne}));return r?this.useStyle.use(De(r),f({name:this.name},i)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},i="")=>this.load(this.theme,e,(o="")=>g.transformCSS(e.name||this.name,`${o}${i}`));loadGlobalCSS=(e={})=>this.load(dr,e);loadGlobalTheme=(e={},i="")=>this.load(ur,e,(o="")=>g.transformCSS(e.name||this.name,`${o}${i}`));getCommonTheme=e=>g.getCommon(this.name,e);getComponentTheme=e=>g.getComponent(this.name,e);getDirectiveTheme=e=>g.getDirective(this.name,e);getPresetTheme=(e,i,o)=>g.getCustomPreset(this.name,e,i,o);getLayerOrderThemeCSS=()=>g.getLayerOrderCSS(this.name);getStyleSheet=(e="",i={})=>{if(this.css){let o=ne(this.css,{dt:Ne}),r=De(`${o}${e}`),s=Object.entries(i).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,i={})=>g.getCommonStyleSheet(this.name,e,i);getThemeStyleSheet=(e,i={})=>{let o=[g.getStyleSheet(this.name,e,i)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=ne(this.theme,{dt:Ne}),a=De(g.transformCSS(r,s)),l=Object.entries(i).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hr=(()=>{class t{theme=B(void 0);csp=B({nonce:void 0});isThemeChanged=!1;document=m(ce);baseStyle=m(F);constructor(){Ge(()=>{P.on("theme:change",e=>{te(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Ge(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){g.clearLoadedStyleNames(),P.clear()}onThemeChange(e){g.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!g.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,f({name:"primitive-variables"},s)),this.baseStyle.load(i?.css,f({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,f({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(f({name:"global-style"},s),r),g.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:i,csp:o}=e||{};i&&this.theme.set(i),o&&this.csp.set(o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dn=(()=>{class t extends hr{ripple=B(!1);platformId=m(Ee);inputStyle=B(null);inputVariant=B(null);overlayOptions={};csp=B({nonce:void 0});filterMatchModeOptions={text:[M.STARTS_WITH,M.CONTAINS,M.NOT_CONTAINS,M.ENDS_WITH,M.EQUALS,M.NOT_EQUALS],numeric:[M.EQUALS,M.NOT_EQUALS,M.LESS_THAN,M.LESS_THAN_OR_EQUAL_TO,M.GREATER_THAN,M.GREATER_THAN_OR_EQUAL_TO],date:[M.DATE_IS,M.DATE_IS_NOT,M.DATE_BEFORE,M.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new mt;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=f(f({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:i,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c}=e||{};i&&this.csp.set(i),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),a&&this.setThemeConfig({theme:a,csp:i})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pr=new ie("PRIME_NG_CONFIG");function qs(...t){let n=t?.map(i=>({provide:pr,useValue:i,multi:!1})),e=Dn(()=>{let i=m(dn);t?.forEach(o=>i.setConfig(o))});return Cn([...n,e])}var Fi=(()=>{class t extends F{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),L=(()=>{class t{document=m(ce);platformId=m(Ee);el=m(be);injector=m(Gt);cd=m(xt);renderer=m(Be);config=m(dn);baseComponentStyle=m(Fi);baseStyle=m(F);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=qe("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",o={}){return Yt(e,i,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!On(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>P.off("theme:change",e))}_loadStyles(){let e=()=>{Te.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Te.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Te.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Te.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!g.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,f({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,f({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,f({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(f({name:"global-style"},this.styleOptions),r),g.setLoadedStyleName("common")}if(!g.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,f({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(f({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),g.setLoadedStyleName(this.componentStyle?.name)}if(!g.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,f({name:"layer-order",first:!0},this.styleOptions)),g.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(i,f({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Te.clearLoadedStyleNames(),P.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,i){let o=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:f({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=_({type:t,inputs:{dt:"dt"},features:[D([Fi,F]),U]})}return t})();var fr=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,gr={root:({props:t,instance:n})=>["p-badge p-component",{"p-badge-circle":V(t.value)&&String(t.value).length===1,"p-badge-dot":k(t.value)&&!n.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Oi=(()=>{class t extends F{name="badge";theme=fr;classes=gr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var hn=(()=>{class t extends L{styleClass=re();style=re();badgeSize=re();size=re();severity=re();value=re();badgeDisabled=re(!1,{transform:S});_componentStyle=m(Oi);containerClass=ee(()=>{let e="p-badge p-component";return V(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),k(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,o){i&2&&(Vn(o.style()),se(o.containerClass()),xn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[D([Oi]),b],decls:1,vars:1,template:function(i,o){i&1&&wt(0),i&2&&Dt(o.value())},dependencies:[We,de],encapsulation:2,changeDetection:0})}return t})(),Ni=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=R({imports:[hn,de,de]})}return t})();var pn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let o=i.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=i.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,o=0;for(var r=0;r<i.length;r++){if(i[r]==e)return o;i[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,i){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[i]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,i,o="self"){o!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,o="self",r=!0){e&&i&&(r&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),o==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,o=!0){let r=O=>{if(O)return getComputedStyle(O).getPropertyValue("position")==="relative"?O:r(O.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=i.offsetHeight,l=i.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},v,w;l.top+a+s.height>d.height?(v=l.top-p.top-s.height,e.style.transformOrigin="bottom",l.top+v<0&&(v=-1*l.top)):(v=a+l.top-p.top,e.style.transformOrigin="top");let H=l.left+s.width-d.width,Q=l.left-p.left;s.width>d.width?w=(l.left-p.left)*-1:H>0?w=Q-H:w=l.left-p.left,e.style.top=v+"px",e.style.left=w+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=i.offsetHeight,u=i.offsetWidth,c=i.getBoundingClientRect(),d=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),v,w;c.top+l+s>p.height?(v=c.top+d-s,e.style.transformOrigin="bottom",v<0&&(v=d)):(v=l+c.top+d,e.style.transformOrigin="top"),c.left+a>p.width?w=Math.max(0,c.left+h+u-a):w=c.left+h,e.style.top=v+"px",e.style.left=w+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&i.push(d)}}a.nodeType!==9&&s(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,h=e.clientHeight,p=this.getOuterHeight(i);c<0?e.scrollTop=d+c:c+p>h&&(e.scrollTop=d+c-h+p)}static fadeIn(e,i){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,i){var o=1,r=50,s=i,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,i)}static getOuterWidth(e,i){let o=e.offsetWidth;if(i){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(e,i){let o=e.offsetHeight;if(i){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let e=window,i=document,o=i.documentElement,r=i.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,o){e[i].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let o=this.find(e,this.getFocusableSelectorString(i)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,i=""){let o=this.findSingle(e,this.getFocusableSelectorString(i));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,i=""){let o=this.getFocusableElements(e,i);return o.length>0?o[0]:null}static getLastFocusableElement(e,i){let o=this.getFocusableElements(e,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,i=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);i?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let o=e.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,i),r.append(...o),r}}static setAttribute(e,i="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(i,o)}static setAttributes(e,i={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?o(r,u):Object.entries(u).map(([h,p])=>r==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})(),Ti=class{element;listener;scrollableParents;constructor(n,e=()=>{}){this.element=n,this.listener=e}bindScrollListener(){this.scrollableParents=pn.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Pi=(()=>{class t extends L{autofocus=!1;_autofocus=!1;focused=!1;platformId=m(Ee);document=m(ce);host=m(be);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Vt(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=pn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",S],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[ye,b]})}return t})(),Ma=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=R({})}return t})();var br=["*"],yr=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,vr=(()=>{class t extends F{name="baseicon";inlineStyles=yr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var zt=(()=>{class t extends L{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=k(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",S],styleClass:"styleClass"},features:[D([vr]),ye,b],ngContentSelectors:br,decls:1,vars:0,template:function(i,o){i&1&&(Ct(),St(0))},encapsulation:2,changeDetection:0})}return t})();var Li=(()=>{class t extends zt{pathId;ngOnInit(){this.pathId="url(#"+qe()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["SpinnerIcon"]],features:[b],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(yt(),ae(0,"svg",0)(1,"g"),X(2,"path",1),le(),ae(3,"defs")(4,"clipPath",2),X(5,"rect",3),le()()()),i&2&&(se(o.getClassNames()),I("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),A(),I("clip-path",o.pathId),A(3),E("id",o.pathId))},encapsulation:2})}return t})();var Wa=(()=>{class t extends zt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["TimesIcon"]],features:[b],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(yt(),ae(0,"svg",0),X(1,"path",1),le()),i&2&&(se(o.getClassNames()),I("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var _r=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Cr={root:"p-ink"},Ri=(()=>{class t extends F{name="ripple";theme=_r;classes=Cr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Bi=(()=>{class t extends L{zone=m(Sn);_componentStyle=m(Ri);animationListener;mouseDownListener;timeout;constructor(){super(),Ge(()=>{Vt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if($e(i,"p-ink-active"),!Kt(i)&&!Qt(i)){let a=Math.max(Nn(this.el.nativeElement),Ln(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let o=Pn(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Qt(i)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Kt(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),Se(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&$e(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&$e(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),$e(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Rn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=_({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[D([Ri]),b]})}return t})(),tl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=R({})}return t})();var Sr=["content"],wr=["loadingicon"],Dr=["icon"],xr=["*"],zi=t=>({class:t});function Vr(t,n){t&1&&En(0)}function Er(t,n){if(t&1&&X(0,"span",8),t&2){let e=q(3);E("ngClass",e.iconClass()),I("aria-hidden",!0)("data-pc-section","loadingicon")}}function $r(t,n){if(t&1&&X(0,"SpinnerIcon",9),t&2){let e=q(3);E("styleClass",e.spinnerIconClass())("spin",!0),I("aria-hidden",!0)("data-pc-section","loadingicon")}}function Mr(t,n){if(t&1&&(vt(0),ve(1,Er,1,3,"span",6)(2,$r,1,4,"SpinnerIcon",7),_t()),t&2){let e=q(2);A(),E("ngIf",e.loadingIcon),A(),E("ngIf",!e.loadingIcon)}}function Ar(t,n){}function Ir(t,n){if(t&1&&ve(0,Ar,0,0,"ng-template",10),t&2){let e=q(2);E("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function kr(t,n){if(t&1&&(vt(0),ve(1,Mr,3,2,"ng-container",2)(2,Ir,1,1,null,5),_t()),t&2){let e=q();A(),E("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),A(),E("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",qt(3,zi,e.iconClass()))}}function Fr(t,n){if(t&1&&X(0,"span",8),t&2){let e=q(2);se(e.icon),E("ngClass",e.iconClass()),I("data-pc-section","icon")}}function Or(t,n){}function Nr(t,n){if(t&1&&ve(0,Or,0,0,"ng-template",10),t&2){let e=q(2);E("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Tr(t,n){if(t&1&&(vt(0),ve(1,Fr,1,4,"span",11)(2,Nr,1,1,null,5),_t()),t&2){let e=q();A(),E("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),A(),E("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",qt(3,zi,e.iconClass()))}}function Pr(t,n){if(t&1&&(ae(0,"span",12),wt(1),le()),t&2){let e=q();I("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),A(),Dt(e.label)}}function Lr(t,n){if(t&1&&X(0,"p-badge",13),t&2){let e=q();E("value",e.badge)("severity",e.badgeSeverity)}}var Rr=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Br={root:({instance:t,props:n})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},ge=(()=>{class t extends F{name="button";theme=Rr;classes=Br;static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var fe={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},ji=(()=>{class t extends L{_componentStyle=m(ge);static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(i,o){i&2&&_e("p-button-label",!0)},features:[D([ge]),b]})}return t})(),Hi=(()=>{class t extends L{_componentStyle=m(ge);static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(i,o){i&2&&_e("p-button-icon",!0)},features:[D([ge]),b]})}return t})(),Dl=(()=>{class t extends L{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Wt(Hi);labelSignal=Wt(ji);isIconOnly=ee(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(fe);isTextButton=ee(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=m(ge);ngAfterViewInit(){super.ngAfterViewInit(),Se(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let e=[fe.button,fe.component];return this.icon&&!this.label&&k(this.htmlElement.textContent)&&e.push(fe.iconOnly),this.loading&&(e.push(fe.disabled,fe.loading),!this.icon&&this.label&&e.push(fe.labelOnly),this.icon&&!this.label&&!k(this.htmlElement.textContent)&&e.push(fe.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return k(this.fluid)?!!i:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],i=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));i&&this.htmlElement.classList.remove(i)}createLabel(){if(!Me(this.htmlElement,".p-button-label")&&this.label){let i=this.document.createElement("span");this.icon&&!this.label&&i.setAttribute("aria-hidden","true"),i.className="p-button-label",i.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(i)}}createIcon(){if(!Me(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let i=this.document.createElement("span");i.className="p-button-icon",i.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Se(i,o);let r=this.getIconClass();r&&Se(i,r),!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let e=Me(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Me(this.htmlElement,".p-button-icon"),i=Me(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(i?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275dir=_({type:t,selectors:[["","pButton",""]],contentQueries:function(i,o,r){i&1&&(Ut(r,o.iconSignal,Hi,5),Ut(r,o.labelSignal,ji,5)),i&2&&$n(2)},hostVars:4,hostBindings:function(i,o){i&2&&_e("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",S],rounded:[2,"rounded","rounded",S],text:[2,"text","text",S],outlined:[2,"outlined","outlined",S],size:"size",plain:[2,"plain","plain",S],fluid:[2,"fluid","fluid",S],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[D([ge]),ye,b,U]})}return t})(),jr=(()=>{class t extends L{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new Y;onFocus=new Y;onBlur=new Y;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return k(this.fluid)?!!i:this.fluid}_componentStyle=m(ge);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=y(t)))(o||t)}})();static \u0275cmp=J({type:t,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&(je(r,Sr,5),je(r,wr,5),je(r,Dr,5),je(r,Hn,4)),i&2){let s;He(s=ze())&&(o.contentTemplate=s.first),He(s=ze())&&(o.loadingIconTemplate=s.first),He(s=ze())&&(o.iconTemplate=s.first),He(s=ze())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",S],loading:[2,"loading","loading",S],loadingIcon:"loadingIcon",raised:[2,"raised","raised",S],rounded:[2,"rounded","rounded",S],text:[2,"text","text",S],plain:[2,"plain","plain",S],severity:"severity",outlined:[2,"outlined","outlined",S],link:[2,"link","link",S],tabindex:[2,"tabindex","tabindex",Mn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",S],fluid:[2,"fluid","fluid",S],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[D([ge]),ye,b,U],ngContentSelectors:xr,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,o){i&1&&(Ct(),ae(0,"button",0),Ce("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),St(1),ve(2,Vr,1,0,"ng-container",1)(3,kr,3,5,"ng-container",2)(4,Tr,3,5,"ng-container",2)(5,Pr,2,3,"span",3)(6,Lr,1,2,"p-badge",4),le()),i&2&&(E("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),I("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),A(2),E("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),A(),E("ngIf",o.loading),A(),E("ngIf",!o.loading),A(),E("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),A(),E("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[We,An,In,Fn,kn,Bi,Pi,Li,Ni,hn,de],encapsulation:2,changeDetection:0})}return t})(),xl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=R({imports:[We,jr,de,de]})}return t})();var Gi=class t{static isArray(n,e=!0){return Array.isArray(n)&&(e||n.length!==0)}static isObject(n,e=!0){return typeof n=="object"&&!Array.isArray(n)&&n!=null&&(e||Object.keys(n).length!==0)}static equals(n,e,i){return i?this.resolveFieldData(n,i)===this.resolveFieldData(e,i):this.equalsByValue(n,e)}static equalsByValue(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){var i=Array.isArray(n),o=Array.isArray(e),r,s,a;if(i&&o){if(s=n.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(n[r],e[r]))return!1;return!0}if(i!=o)return!1;var l=this.isDate(n),u=this.isDate(e);if(l!=u)return!1;if(l&&u)return n.getTime()==e.getTime();var c=n instanceof RegExp,d=e instanceof RegExp;if(c!=d)return!1;if(c&&d)return n.toString()==e.toString();var h=Object.keys(n);if(s=h.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[r]))return!1;for(r=s;r--!==0;)if(a=h[r],!this.equalsByValue(n[a],e[a]))return!1;return!0}return n!==n&&e!==e}static resolveFieldData(n,e){if(n&&e){if(this.isFunction(e))return e(n);if(e.indexOf(".")==-1)return n[e];{let i=e.split("."),o=n;for(let r=0,s=i.length;r<s;++r){if(o==null)return null;o=o[i[r]]}return o}}else return null}static isFunction(n){return!!(n&&n.constructor&&n.call&&n.apply)}static reorderArray(n,e,i){let o;n&&e!==i&&(i>=n.length&&(i%=n.length,e%=n.length),n.splice(i,0,n.splice(e,1)[0]))}static insertIntoOrderedArray(n,e,i,o){if(i.length>0){let r=!1;for(let s=0;s<i.length;s++)if(this.findIndexInList(i[s],o)>e){i.splice(s,0,n),r=!0;break}r||i.push(n)}else i.push(n)}static findIndexInList(n,e){let i=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==n){i=o;break}}return i}static contains(n,e){if(n!=null&&e&&e.length){for(let i of e)if(this.equals(n,i))return!0}return!1}static removeAccents(n){return n&&(n=n.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),n}static isDate(n){return Object.prototype.toString.call(n)==="[object Date]"}static isEmpty(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!this.isDate(n)&&typeof n=="object"&&Object.keys(n).length===0}static isNotEmpty(n){return!this.isEmpty(n)}static compare(n,e,i,o=1){let r=-1,s=this.isEmpty(n),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof n=="string"&&typeof e=="string"?r=n.localeCompare(e,i,{numeric:!0}):r=n<e?-1:n>e?1:0,r}static sort(n,e,i=1,o,r=1){let s=t.compare(n,e,o,i),a=i;return(t.isEmpty(n)||t.isEmpty(e))&&(a=r===1?i:r),a*s}static merge(n,e){if(!(n==null&&e==null)){{if((n==null||typeof n=="object")&&(e==null||typeof e=="object"))return f(f({},n||{}),e||{});if((n==null||typeof n=="string")&&(e==null||typeof e=="string"))return[n||"",e||""].join(" ")}return e||n}}static isPrintableCharacter(n=""){return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}static getItemValue(n,...e){return this.isFunction(n)?n(...e):n}static findLastIndex(n,e){let i=-1;if(this.isNotEmpty(n))try{i=n.findLastIndex(e)}catch{i=n.lastIndexOf([...n].reverse().find(e))}return i}static findLast(n,e){let i;if(this.isNotEmpty(n))try{i=n.findLast(e)}catch{i=[...n].reverse().find(e)}return i}static deepEquals(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){var i=Array.isArray(n),o=Array.isArray(e),r,s,a;if(i&&o){if(s=n.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(n[r],e[r]))return!1;return!0}if(i!=o)return!1;var l=n instanceof Date,u=e instanceof Date;if(l!=u)return!1;if(l&&u)return n.getTime()==e.getTime();var c=n instanceof RegExp,d=e instanceof RegExp;if(c!=d)return!1;if(c&&d)return n.toString()==e.toString();var h=Object.keys(n);if(s=h.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,h[r]))return!1;for(r=s;r--!==0;)if(a=h[r],!this.deepEquals(n[a],e[a]))return!1;return!0}return n!==n&&e!==e}static minifyCSS(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}static isString(n,e=!0){return typeof n=="string"&&(e||n!=="")}},Wi=0;function El(t="pn_id_"){return Wi++,`${t}${Wi}`}function Hr(){let t=[],n=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},i=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(n(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>i(),generateZIndex:n,revertZIndex:e}}var $l=Hr(),Ml=t=>!!t;export{ar as a,Ds as b,xs as c,F as d,dn as e,qs as f,Xe as g,ho as h,Xn as i,zn as j,xe as k,ss as l,as as m,Nt as n,Je as o,Ro as p,cs as q,jo as r,_i as s,Ci as t,Si as u,Uo as v,Ko as w,Yo as x,rn as y,us as z,ds as A,hs as B,L as C,Bi as D,tl as E,pn as F,Ti as G,zt as H,Li as I,Wa as J,Gi as K,El as L,$l as M,Ml as N,Pi as O,Ma as P,Ni as Q,Dl as R,jr as S,xl as T};
