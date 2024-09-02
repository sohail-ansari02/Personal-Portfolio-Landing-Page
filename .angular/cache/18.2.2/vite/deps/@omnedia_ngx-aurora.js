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

// node_modules/@omnedia/ngx-aurora/fesm2022/omnedia-ngx-aurora.mjs
var _c0 = ["OmAuroraWrapper"];
var _c1 = ["*"];
var _NgxAuroraComponent = class _NgxAuroraComponent {
  constructor() {
    this.versionTwo = false;
    this.style = {};
    this.isInView = false;
  }
  set auroraInvert(invert) {
    if (invert) {
      this.style["--om-aurora-invert"] = "invert(1)";
      return;
    }
    this.style["--om-aurora-invert"] = "invert(0)";
  }
  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!this.isInView) {
          this.isInView = true;
        }
      } else if (this.isInView) {
        this.isInView = false;
      }
    });
    this.intersectionObserver.observe(this.auroraRef.nativeElement);
  }
  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
};
_NgxAuroraComponent.ɵfac = function NgxAuroraComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxAuroraComponent)();
};
_NgxAuroraComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxAuroraComponent,
  selectors: [["om-aurora"]],
  viewQuery: function NgxAuroraComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.auroraRef = _t.first);
    }
  },
  inputs: {
    styleClass: "styleClass",
    auroraInvert: [0, "invert", "auroraInvert"],
    versionTwo: "versionTwo"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 6,
  consts: [["OmAuroraWrapper", ""], [1, "om-aurora", 3, "ngStyle", "ngClass"], [1, "om-aurora-background"], [1, "om-aurora-lights"]],
  template: function NgxAuroraComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1, 0)(2, "div", 2);
      ɵɵelement(3, "div", 3);
      ɵɵelementEnd();
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
      ɵɵadvance(3);
      ɵɵclassProp("version-two", ctx.versionTwo)("outOfView", !ctx.isInView);
    }
  },
  dependencies: [CommonModule, NgClass, NgStyle],
  styles: ['.om-aurora[_ngcontent-%COMP%]{--om-aurora-invert: invert(0);position:relative;width:100%;height:100%}.om-aurora[_ngcontent-%COMP%]   .om-aurora-background[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;overflow:hidden;inset:0;pointer-events:none}.om-aurora[_ngcontent-%COMP%]   .om-aurora-background[_ngcontent-%COMP%]   .om-aurora-lights[_ngcontent-%COMP%]{pointer-events:none;position:absolute;background-image:var(--dark-gradient),var(--aurora);will-change:transform;opacity:.5;inset:-10px;filter:blur(10px) var(--om-aurora-invert);-webkit-mask-image:radial-gradient(ellipse at 100% 0,#000 10%,transparent 70%);mask-image:radial-gradient(ellipse at 100% 0,#000 10%,transparent 70%);background-size:300%,200%;background-position:50% 50%,50% 50%;--white-gradient: repeating-linear-gradient( 100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16% );--dark-gradient: repeating-linear-gradient( 100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16% );--aurora: repeating-linear-gradient( 100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30% )}.om-aurora[_ngcontent-%COMP%]   .om-aurora-background[_ngcontent-%COMP%]   .om-aurora-lights[_ngcontent-%COMP%]:after{content:"";position:absolute;background-image:var(--dark-gradient),var(--aurora);background-size:200%,100%;background-attachment:fixed;mix-blend-mode:difference;inset:0;animation:_ngcontent-%COMP%_om-aurora 60s linear infinite}.om-aurora[_ngcontent-%COMP%]   .om-aurora-background[_ngcontent-%COMP%]   .om-aurora-lights.version-two[_ngcontent-%COMP%]:after{background-image:var(--white-gradient),var(--aurora)}.om-aurora[_ngcontent-%COMP%]   .om-aurora-background[_ngcontent-%COMP%]   .om-aurora-lights.outOfView[_ngcontent-%COMP%]:after{animation-play-state:paused}@keyframes _ngcontent-%COMP%_om-aurora{0%{content:"";background-position:50% 50%,50% 50%}to{content:"";background-position:350% 50%,350% 50%}}']
});
var NgxAuroraComponent = _NgxAuroraComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxAuroraComponent, [{
    type: Component,
    args: [{
      selector: "om-aurora",
      standalone: true,
      imports: [CommonModule],
      template: '<div\n  class="om-aurora"\n  [ngStyle]="style"\n  [ngClass]="styleClass"\n  #OmAuroraWrapper\n>\n  <div class="om-aurora-background">\n    <div\n      class="om-aurora-lights"\n      [class.version-two]="versionTwo"\n      [class.outOfView]="!isInView"\n    ></div>\n  </div>\n  <ng-content></ng-content>\n</div>\n',
      styles: ['.om-aurora{--om-aurora-invert: invert(0);position:relative;width:100%;height:100%}.om-aurora .om-aurora-background{position:absolute;width:100%;height:100%;overflow:hidden;inset:0;pointer-events:none}.om-aurora .om-aurora-background .om-aurora-lights{pointer-events:none;position:absolute;background-image:var(--dark-gradient),var(--aurora);will-change:transform;opacity:.5;inset:-10px;filter:blur(10px) var(--om-aurora-invert);-webkit-mask-image:radial-gradient(ellipse at 100% 0,#000 10%,transparent 70%);mask-image:radial-gradient(ellipse at 100% 0,#000 10%,transparent 70%);background-size:300%,200%;background-position:50% 50%,50% 50%;--white-gradient: repeating-linear-gradient( 100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16% );--dark-gradient: repeating-linear-gradient( 100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16% );--aurora: repeating-linear-gradient( 100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30% )}.om-aurora .om-aurora-background .om-aurora-lights:after{content:"";position:absolute;background-image:var(--dark-gradient),var(--aurora);background-size:200%,100%;background-attachment:fixed;mix-blend-mode:difference;inset:0;animation:om-aurora 60s linear infinite}.om-aurora .om-aurora-background .om-aurora-lights.version-two:after{background-image:var(--white-gradient),var(--aurora)}.om-aurora .om-aurora-background .om-aurora-lights.outOfView:after{animation-play-state:paused}@keyframes om-aurora{0%{content:"";background-position:50% 50%,50% 50%}to{content:"";background-position:350% 50%,350% 50%}}\n']
    }]
  }], null, {
    auroraRef: [{
      type: ViewChild,
      args: ["OmAuroraWrapper"]
    }],
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }],
    auroraInvert: [{
      type: Input,
      args: ["invert"]
    }],
    versionTwo: [{
      type: Input,
      args: ["versionTwo"]
    }]
  });
})();
export {
  NgxAuroraComponent
};
//# sourceMappingURL=@omnedia_ngx-aurora.js.map
