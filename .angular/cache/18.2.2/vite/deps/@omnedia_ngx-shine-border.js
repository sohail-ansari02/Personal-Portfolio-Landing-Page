import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-QA5DSV7M.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-U4VCVINX.js";
import "./chunk-ALAF7JJI.js";
import "./chunk-3OV72XIM.js";

// node_modules/@omnedia/ngx-shine-border/fesm2022/omnedia-ngx-shine-border.mjs
var _c0 = ["*"];
var _NgxShineBorderComponent = class _NgxShineBorderComponent {
  constructor() {
    this.style = {};
  }
  set colorFrom(color) {
    this.style["--color-from"] = color;
  }
  set colorMiddle(color) {
    this.style["--color-middle"] = color;
  }
  set colorTo(color) {
    this.style["--color-to"] = color;
  }
  set borderRadius(radius) {
    this.style["--border-radius"] = radius;
  }
  set borderColor(color) {
    this.style["--border-color"] = color;
  }
  set animationDuration(duration) {
    this.style["--animation-duration"] = duration;
  }
};
_NgxShineBorderComponent.ɵfac = function NgxShineBorderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxShineBorderComponent)();
};
_NgxShineBorderComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxShineBorderComponent,
  selectors: [["om-shine-border"]],
  inputs: {
    styleClass: "styleClass",
    colorFrom: [0, "gradientColorStart", "colorFrom"],
    colorMiddle: [0, "gradientColorMiddle", "colorMiddle"],
    colorTo: [0, "gradientColorEnd", "colorTo"],
    borderRadius: "borderRadius",
    borderColor: "borderColor",
    animationDuration: "animationDuration"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 2,
  consts: [[1, "om-shine-border-wrapper"], [1, "om-shine-border", 3, "ngStyle", "ngClass"], [1, "om-shine-border-border"]],
  template: function NgxShineBorderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵelement(2, "div", 2);
      ɵɵprojection(3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
    }
  },
  dependencies: [CommonModule, NgClass, NgStyle],
  styles: ['.om-shine-border-wrapper[_ngcontent-%COMP%]{overflow:hidden;padding:1px}.om-shine-border[_ngcontent-%COMP%]{--color-from: #ffaa40;--color-middle: #fe8fb5;--color-to: #9c40ff;--border-radius: .5rem;--border-color: hsl(240, 3.9%, 15.1%);--animation-duration: 14s;border:1px solid;border-radius:var(--border-radius);border-color:var(--border-color);position:relative}.om-shine-border[_ngcontent-%COMP%]   .om-shine-border-border[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:inherit;pointer-events:none}.om-shine-border[_ngcontent-%COMP%]   .om-shine-border-border[_ngcontent-%COMP%]:before{content:"";position:absolute;height:100%;width:100%;aspect-ratio:1/1;will-change:background-position;border-radius:var(--border-radius);padding:1px;inset:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;background-size:300% 300%;background-image:radial-gradient(transparent,transparent,var(--color-from),var(--color-middle),var(--color-to),transparent,transparent);animation:_ngcontent-%COMP%_shine-pulse var(--animation-duration) infinite linear}@keyframes _ngcontent-%COMP%_shine-pulse{0%{background-position:0 0;content:""}50%{background-position:100% 100%;content:""}to{background-position:0 0;content:""}}']
});
var NgxShineBorderComponent = _NgxShineBorderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxShineBorderComponent, [{
    type: Component,
    args: [{
      selector: "om-shine-border",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="om-shine-border-wrapper">\n  <div class="om-shine-border" [ngStyle]="style" [ngClass]="styleClass">\n    <div class="om-shine-border-border"></div>\n    <ng-content></ng-content>\n  </div>\n</div>\n',
      styles: ['.om-shine-border-wrapper{overflow:hidden;padding:1px}.om-shine-border{--color-from: #ffaa40;--color-middle: #fe8fb5;--color-to: #9c40ff;--border-radius: .5rem;--border-color: hsl(240, 3.9%, 15.1%);--animation-duration: 14s;border:1px solid;border-radius:var(--border-radius);border-color:var(--border-color);position:relative}.om-shine-border .om-shine-border-border{border:1px solid transparent;border-radius:inherit;pointer-events:none}.om-shine-border .om-shine-border-border:before{content:"";position:absolute;height:100%;width:100%;aspect-ratio:1/1;will-change:background-position;border-radius:var(--border-radius);padding:1px;inset:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;background-size:300% 300%;background-image:radial-gradient(transparent,transparent,var(--color-from),var(--color-middle),var(--color-to),transparent,transparent);animation:shine-pulse var(--animation-duration) infinite linear}@keyframes shine-pulse{0%{background-position:0 0;content:""}50%{background-position:100% 100%;content:""}to{background-position:0 0;content:""}}\n']
    }]
  }], null, {
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }],
    colorFrom: [{
      type: Input,
      args: ["gradientColorStart"]
    }],
    colorMiddle: [{
      type: Input,
      args: ["gradientColorMiddle"]
    }],
    colorTo: [{
      type: Input,
      args: ["gradientColorEnd"]
    }],
    borderRadius: [{
      type: Input,
      args: ["borderRadius"]
    }],
    borderColor: [{
      type: Input,
      args: ["borderColor"]
    }],
    animationDuration: [{
      type: Input,
      args: ["animationDuration"]
    }]
  });
})();
export {
  NgxShineBorderComponent
};
//# sourceMappingURL=@omnedia_ngx-shine-border.js.map
