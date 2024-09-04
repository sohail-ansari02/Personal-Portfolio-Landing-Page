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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-U4VCVINX.js";
import "./chunk-ALAF7JJI.js";
import "./chunk-3OV72XIM.js";

// node_modules/@omnedia/ngx-dotpattern/fesm2022/omnedia-ngx-dotpattern.mjs
var _c0 = ["*"];
var _NgxDotpatternComponent = class _NgxDotpatternComponent {
  constructor() {
    this.style = {};
  }
  set meteorRotation(color) {
    this.style["--om-dotpattern-color"] = color;
  }
};
_NgxDotpatternComponent.ɵfac = function NgxDotpatternComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxDotpatternComponent)();
};
_NgxDotpatternComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxDotpatternComponent,
  selectors: [["om-dotpattern"]],
  inputs: {
    styleClass: "styleClass",
    meteorRotation: [0, "patternColor", "meteorRotation"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 8,
  vars: 2,
  consts: [[1, "om-dotpattern", 3, "ngStyle", "ngClass"], [1, "om-dotpattern-background"], ["aria-hidden", "true"], ["id", ":r4i:", "width", "16", "height", "16", "patternUnits", "userSpaceOnUse", "patternContentUnits", "userSpaceOnUse", "x", "0", "y", "0"], ["id", "pattern-circle", "cx", "1", "cy", "1", "r", "1"], ["width", "100%", "height", "100%", "stroke-width", "0", "fill", "url(#:r4i:)"]],
  template: function NgxDotpatternComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵnamespaceSVG();
      ɵɵelementStart(2, "svg", 2)(3, "defs")(4, "pattern", 3);
      ɵɵelement(5, "circle", 4);
      ɵɵelementEnd()();
      ɵɵelement(6, "rect", 5);
      ɵɵelementEnd()();
      ɵɵprojection(7);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
    }
  },
  dependencies: [CommonModule, NgClass, NgStyle],
  styles: [".om-dotpattern[_ngcontent-%COMP%]{position:relative;overflow:hidden;--om-dotpattern-color: hsla(0, 0%, 64%, .8)}.om-dotpattern[_ngcontent-%COMP%]   .om-dotpattern-background[_ngcontent-%COMP%]{position:absolute;pointer-events:none;height:100%;width:100%}.om-dotpattern[_ngcontent-%COMP%]   .om-dotpattern-background[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{pointer-events:none;inset:0;height:100%;width:100%;fill:var(--om-dotpattern-color);-webkit-mask-image:radial-gradient(500px circle at center,#fff,transparent);mask-image:radial-gradient(500px circle at center,#fff,transparent)}"]
});
var NgxDotpatternComponent = _NgxDotpatternComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDotpatternComponent, [{
    type: Component,
    args: [{
      selector: "om-dotpattern",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="om-dotpattern" [ngStyle]="style" [ngClass]="styleClass">\n    <div class="om-dotpattern-background">\n        <svg aria-hidden="true"><defs><pattern id=":r4i:" width="16" height="16" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0"><circle id="pattern-circle" cx="1" cy="1" r="1"></circle></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:r4i:)"></rect></svg>\n    </div>\n    <ng-content></ng-content>\n</div>',
      styles: [".om-dotpattern{position:relative;overflow:hidden;--om-dotpattern-color: hsla(0, 0%, 64%, .8)}.om-dotpattern .om-dotpattern-background{position:absolute;pointer-events:none;height:100%;width:100%}.om-dotpattern .om-dotpattern-background svg{pointer-events:none;inset:0;height:100%;width:100%;fill:var(--om-dotpattern-color);-webkit-mask-image:radial-gradient(500px circle at center,#fff,transparent);mask-image:radial-gradient(500px circle at center,#fff,transparent)}\n"]
    }]
  }], null, {
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }],
    meteorRotation: [{
      type: Input,
      args: ["patternColor"]
    }]
  });
})();
export {
  NgxDotpatternComponent
};
//# sourceMappingURL=@omnedia_ngx-dotpattern.js.map
