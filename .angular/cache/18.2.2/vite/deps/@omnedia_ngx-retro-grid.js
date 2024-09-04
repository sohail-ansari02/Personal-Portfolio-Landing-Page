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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-U4VCVINX.js";
import "./chunk-ALAF7JJI.js";
import "./chunk-3OV72XIM.js";

// node_modules/@omnedia/ngx-retro-grid/fesm2022/omnedia-ngx-retro-grid.mjs
var _c0 = ["*"];
var _NgxRetroGridComponent = class _NgxRetroGridComponent {
  constructor() {
    this.style = {};
  }
  set gridColor(hexColor) {
    const hsl = this.hexToHSL(hexColor);
    this.style["--grid-color"] = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 0.35)`;
  }
  set fadeColor(color) {
    this.style["--fade-color"] = color;
  }
  set gridRotation(rotation) {
    this.style["--grid-rotation"] = rotation;
  }
  hexToHSL(hex) {
    if (Array.from(hex)[0] !== "#") {
      hex = "#" + hex;
    }
    if (hex.length === 4) {
      hex = hex.split("").map((char) => {
        if (char === "#") {
          return char;
        }
        return char + char;
      }).join("");
    }
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      throw new Error("Could not parse Hex Color");
    }
    const rHex = parseInt(result[1], 16);
    const gHex = parseInt(result[2], 16);
    const bHex = parseInt(result[3], 16);
    const r = rHex / 255;
    const g = gHex / 255;
    const b = bHex / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = (max + min) / 2;
    let s = h;
    let l = h;
    if (max === min) {
      return {
        h: 0,
        s: 0,
        l: 100
      };
    }
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);
    return {
      h,
      s,
      l
    };
  }
};
_NgxRetroGridComponent.ɵfac = function NgxRetroGridComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxRetroGridComponent)();
};
_NgxRetroGridComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxRetroGridComponent,
  selectors: [["om-retro-grid"]],
  inputs: {
    gridColor: "gridColor",
    fadeColor: "fadeColor",
    gridRotation: "gridRotation",
    styleClass: "styleClass"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 6,
  vars: 2,
  consts: [[1, "om-retro-grid", 3, "ngStyle", "ngClass"], [1, "om-retro-grid-grid"], [1, "om-retro-grid-animation"], [1, "om-retro-grid-animate"], [1, "om-retro-grid-background"]],
  template: function NgxRetroGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      ɵɵelement(3, "div", 3);
      ɵɵelementEnd();
      ɵɵelement(4, "div", 4);
      ɵɵelementEnd();
      ɵɵprojection(5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
    }
  },
  dependencies: [CommonModule, NgClass, NgStyle],
  styles: [".om-retro-grid[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;--grid-color: hsla(0, 0%, 0%, .35);--fade-color: #fff;--grid-rotation: 35deg}.om-retro-grid[_ngcontent-%COMP%]   .om-retro-grid-grid[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;pointer-events:none;perspective:200px;opacity:.5;overflow:hidden}.om-retro-grid[_ngcontent-%COMP%]   .om-retro-grid-grid[_ngcontent-%COMP%]   .om-retro-grid-animation[_ngcontent-%COMP%]{position:absolute;transform:rotateX(var(--grid-rotation)) translate(30%);inset:0;pointer-events:none;margin-left:-100%}.om-retro-grid[_ngcontent-%COMP%]   .om-retro-grid-grid[_ngcontent-%COMP%]   .om-retro-grid-animation[_ngcontent-%COMP%]   .om-retro-grid-animate[_ngcontent-%COMP%]{width:600vw;height:300vh;pointer-events:none;transform-origin:100% 0 0;margin-left:-51%;inset:0;background-image:linear-gradient(90deg,var(--grid-color) 1px,transparent 0),linear-gradient(180deg,var(--grid-color) 1px,transparent 0);background-size:60px 60px;background-repeat:repeat;animation:_ngcontent-%COMP%_om-grid-animation 15s linear infinite}.om-retro-grid[_ngcontent-%COMP%]   .om-retro-grid-grid[_ngcontent-%COMP%]   .om-retro-grid-background[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(to top,var(--fade-color),transparent 60%,var(--fade-color))}@keyframes _ngcontent-%COMP%_om-grid-animation{0%{transform:translateY(-50%)}to{transform:translateY(0)}}"]
});
var NgxRetroGridComponent = _NgxRetroGridComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxRetroGridComponent, [{
    type: Component,
    args: [{
      selector: "om-retro-grid",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="om-retro-grid" [ngStyle]="style" [ngClass]="styleClass">\n  <div class="om-retro-grid-grid">\n    <div class="om-retro-grid-animation">\n      <div class="om-retro-grid-animate"></div>\n    </div>\n    <div class="om-retro-grid-background"></div>\n  </div>\n  <ng-content></ng-content>\n</div>\n',
      styles: [".om-retro-grid{width:100%;height:100%;position:relative;--grid-color: hsla(0, 0%, 0%, .35);--fade-color: #fff;--grid-rotation: 35deg}.om-retro-grid .om-retro-grid-grid{position:absolute;width:100%;height:100%;pointer-events:none;perspective:200px;opacity:.5;overflow:hidden}.om-retro-grid .om-retro-grid-grid .om-retro-grid-animation{position:absolute;transform:rotateX(var(--grid-rotation)) translate(30%);inset:0;pointer-events:none;margin-left:-100%}.om-retro-grid .om-retro-grid-grid .om-retro-grid-animation .om-retro-grid-animate{width:600vw;height:300vh;pointer-events:none;transform-origin:100% 0 0;margin-left:-51%;inset:0;background-image:linear-gradient(90deg,var(--grid-color) 1px,transparent 0),linear-gradient(180deg,var(--grid-color) 1px,transparent 0);background-size:60px 60px;background-repeat:repeat;animation:om-grid-animation 15s linear infinite}.om-retro-grid .om-retro-grid-grid .om-retro-grid-background{position:absolute;inset:0;background-image:linear-gradient(to top,var(--fade-color),transparent 60%,var(--fade-color))}@keyframes om-grid-animation{0%{transform:translateY(-50%)}to{transform:translateY(0)}}\n"]
    }]
  }], null, {
    gridColor: [{
      type: Input,
      args: ["gridColor"]
    }],
    fadeColor: [{
      type: Input,
      args: ["fadeColor"]
    }],
    gridRotation: [{
      type: Input,
      args: ["gridRotation"]
    }],
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }]
  });
})();
export {
  NgxRetroGridComponent
};
//# sourceMappingURL=@omnedia_ngx-retro-grid.js.map
