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

// node_modules/@omnedia/ngx-border-beam/fesm2022/omnedia-ngx-border-beam.mjs
var _c0 = ["*"];
var _NgxBorderBeamComponent = class _NgxBorderBeamComponent {
  constructor() {
    this.style = {};
  }
  set colorFrom(color) {
    this.style["--color-from"] = color;
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
_NgxBorderBeamComponent.ɵfac = function NgxBorderBeamComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxBorderBeamComponent)();
};
_NgxBorderBeamComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxBorderBeamComponent,
  selectors: [["om-border-beam"]],
  inputs: {
    colorFrom: [0, "gradientColorStart", "colorFrom"],
    colorTo: [0, "gradientColorEnd", "colorTo"],
    borderRadius: "borderRadius",
    borderColor: "borderColor",
    animationDuration: "animationDuration",
    styleClass: "styleClass"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 2,
  consts: [[1, "om-border-beam-wrapper"], [1, "om-border-beam", 3, "ngStyle", "ngClass"], [1, "om-border-beam-border"]],
  template: function NgxBorderBeamComponent_Template(rf, ctx) {
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
  styles: ['.om-border-beam-wrapper[_ngcontent-%COMP%]{overflow:hidden;padding:1px}.om-border-beam[_ngcontent-%COMP%]{--color-from: #ffaa40;--color-to: #9c40ff;--border-radius: .5rem;--border-color: hsl(240, 3.9%, 15.1%);--animation-duration: 12s;border:1px solid;border-radius:var(--border-radius);border-color:var(--border-color);position:relative}.om-border-beam[_ngcontent-%COMP%]   .om-border-beam-border[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;border:1px solid transparent;inset:0;border-radius:inherit;-webkit-mask:linear-gradient(transparent,transparent),linear-gradient(#fff,#fff);mask:linear-gradient(transparent,transparent),linear-gradient(#fff,#fff);-webkit-mask-composite:source-in,xor;mask-composite:intersect;mask-clip:padding-box,border-box;pointer-events:none}.om-border-beam[_ngcontent-%COMP%]   .om-border-beam-border[_ngcontent-%COMP%]:after{content:"";width:250px;aspect-ratio:1/1;display:block;box-sizing:border-box;border:0 solid;offset-path:rect(0 auto auto 0 round 200px);offset-anchor:90% 50%;background:linear-gradient(to left,var(--color-from),var(--color-to),transparent);animation:_ngcontent-%COMP%_border-beam var(--animation-duration) infinite linear}@keyframes _ngcontent-%COMP%_border-beam{to{content:"";offset-distance:100%}}']
});
var NgxBorderBeamComponent = _NgxBorderBeamComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxBorderBeamComponent, [{
    type: Component,
    args: [{
      selector: "om-border-beam",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="om-border-beam-wrapper">\n  <div class="om-border-beam" [ngStyle]="style" [ngClass]="styleClass">\n    <div class="om-border-beam-border"></div>\n    <ng-content></ng-content>\n  </div>\n</div>\n',
      styles: ['.om-border-beam-wrapper{overflow:hidden;padding:1px}.om-border-beam{--color-from: #ffaa40;--color-to: #9c40ff;--border-radius: .5rem;--border-color: hsl(240, 3.9%, 15.1%);--animation-duration: 12s;border:1px solid;border-radius:var(--border-radius);border-color:var(--border-color);position:relative}.om-border-beam .om-border-beam-border{position:absolute;width:100%;height:100%;border:1px solid transparent;inset:0;border-radius:inherit;-webkit-mask:linear-gradient(transparent,transparent),linear-gradient(#fff,#fff);mask:linear-gradient(transparent,transparent),linear-gradient(#fff,#fff);-webkit-mask-composite:source-in,xor;mask-composite:intersect;mask-clip:padding-box,border-box;pointer-events:none}.om-border-beam .om-border-beam-border:after{content:"";width:250px;aspect-ratio:1/1;display:block;box-sizing:border-box;border:0 solid;offset-path:rect(0 auto auto 0 round 200px);offset-anchor:90% 50%;background:linear-gradient(to left,var(--color-from),var(--color-to),transparent);animation:border-beam var(--animation-duration) infinite linear}@keyframes border-beam{to{content:"";offset-distance:100%}}\n']
    }]
  }], null, {
    colorFrom: [{
      type: Input,
      args: ["gradientColorStart"]
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
    }],
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }]
  });
})();
export {
  NgxBorderBeamComponent
};
//# sourceMappingURL=@omnedia_ngx-border-beam.js.map
