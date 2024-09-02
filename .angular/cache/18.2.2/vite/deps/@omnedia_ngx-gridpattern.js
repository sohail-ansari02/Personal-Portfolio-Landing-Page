import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-QA5DSV7M.js";
import {
  Component,
  Input,
  ViewChild,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-U4VCVINX.js";
import "./chunk-ALAF7JJI.js";
import "./chunk-3OV72XIM.js";

// node_modules/@omnedia/ngx-gridpattern/fesm2022/omnedia-ngx-gridpattern.mjs
var _c0 = ["OmGridPatternBackground"];
var _c1 = ["*"];
var _NgxGridpatternComponent = class _NgxGridpatternComponent {
  constructor() {
    this.smallGrid = false;
    this.gridColor = "rgba(255, 255, 255, 0.2)";
    this.gradientColor = "rgb(0, 0, 0)";
    this.gridStyle = {};
  }
  set smallGridValue(smallGrid) {
    this.smallGrid = smallGrid;
    this.setGridStyle();
  }
  set gridColorValue(color) {
    this.gridColor = color;
    this.setGridStyle();
  }
  set gradientColorValue(color) {
    this.gradientColor = color;
    this.setGridStyle();
  }
  setGridStyle() {
    let dataUri = "";
    if (this.smallGrid) {
      dataUri = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none' stroke='${this.gridColor}' %3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e`;
    } else {
      dataUri = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${this.gridColor}' %3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e`;
    }
    this.gridStyle["background-image"] = `url("${dataUri}")`;
    this.gridStyle["--om-gridpattern-gradient-color"] = this.gradientColor;
  }
};
_NgxGridpatternComponent.ɵfac = function NgxGridpatternComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxGridpatternComponent)();
};
_NgxGridpatternComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxGridpatternComponent,
  selectors: [["om-gridpattern"]],
  viewQuery: function NgxGridpatternComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elementRef = _t.first);
    }
  },
  inputs: {
    styleClass: "styleClass",
    smallGridValue: [0, "smallGrid", "smallGridValue"],
    gridColorValue: [0, "gridColor", "gridColorValue"],
    gradientColorValue: [0, "gradientColor", "gradientColorValue"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 4,
  consts: [[1, "om-gridpattern", 3, "ngClass"], [1, "om-gridpattern-background", 3, "ngStyle"], [1, "om-gridpattern-gradient"]],
  template: function NgxGridpatternComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵelement(2, "div", 2);
      ɵɵelementEnd();
      ɵɵprojection(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.styleClass);
      ɵɵadvance();
      ɵɵclassProp("om-gridpattern-background-small", ctx.smallGrid);
      ɵɵproperty("ngStyle", ctx.gridStyle);
    }
  },
  dependencies: [CommonModule, NgClass, NgStyle],
  styles: [`.om-gridpattern[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;height:100%}.om-gridpattern[_ngcontent-%COMP%]   .om-gridpattern-background[_ngcontent-%COMP%]{--om-gridpattern-gradient-color: rgb(0, 0, 0);position:absolute;pointer-events:none;height:100%;width:100%;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255, 255, 255, 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")}.om-gridpattern[_ngcontent-%COMP%]   .om-gridpattern-background.om-gridpattern-background-small[_ngcontent-%COMP%]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none' stroke='rgba(255, 255, 255, 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")}.om-gridpattern[_ngcontent-%COMP%]   .om-gridpattern-background[_ngcontent-%COMP%]   .om-gridpattern-gradient[_ngcontent-%COMP%]{position:absolute;inset:0;-webkit-mask-image:radial-gradient(ellipse at center,transparent 10%,#000);mask-image:radial-gradient(ellipse at center,transparent 10%,#000);background-color:var(--om-gridpattern-gradient-color)}`]
});
var NgxGridpatternComponent = _NgxGridpatternComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGridpatternComponent, [{
    type: Component,
    args: [{
      selector: "om-gridpattern",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="om-gridpattern" [ngClass]="styleClass">\n    <div class="om-gridpattern-background" [ngStyle]="gridStyle" [class.om-gridpattern-background-small]="smallGrid">\n        <div class="om-gridpattern-gradient"></div>\n    </div>\n    <ng-content></ng-content>\n</div>',
      styles: [`.om-gridpattern{position:relative;overflow:hidden;width:100%;height:100%}.om-gridpattern .om-gridpattern-background{--om-gridpattern-gradient-color: rgb(0, 0, 0);position:absolute;pointer-events:none;height:100%;width:100%;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255, 255, 255, 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")}.om-gridpattern .om-gridpattern-background.om-gridpattern-background-small{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none' stroke='rgba(255, 255, 255, 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")}.om-gridpattern .om-gridpattern-background .om-gridpattern-gradient{position:absolute;inset:0;-webkit-mask-image:radial-gradient(ellipse at center,transparent 10%,#000);mask-image:radial-gradient(ellipse at center,transparent 10%,#000);background-color:var(--om-gridpattern-gradient-color)}
`]
    }]
  }], null, {
    elementRef: [{
      type: ViewChild,
      args: ["OmGridPatternBackground"]
    }],
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }],
    smallGridValue: [{
      type: Input,
      args: ["smallGrid"]
    }],
    gridColorValue: [{
      type: Input,
      args: ["gridColor"]
    }],
    gradientColorValue: [{
      type: Input,
      args: ["gradientColor"]
    }]
  });
})();
export {
  NgxGridpatternComponent
};
//# sourceMappingURL=@omnedia_ngx-gridpattern.js.map
