import {
  DomSanitizer
} from "./chunk-57QCPTF3.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-QA5DSV7M.js";
import {
  Component,
  ContentChildren,
  Input,
  ViewChild,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeHtml,
  ɵɵviewQuery
} from "./chunk-U4VCVINX.js";
import "./chunk-ALAF7JJI.js";
import "./chunk-3OV72XIM.js";

// node_modules/@omnedia/ngx-marquee/fesm2022/omnedia-ngx-marquee.mjs
var _c0 = ["OmMarqueeContent"];
var _c1 = ["OmMarquee"];
var _c2 = ["*"];
function NgxMarqueeComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const content_r1 = ctx.$implicit;
    ɵɵproperty("innerHTML", content_r1, ɵɵsanitizeHtml);
  }
}
function NgxMarqueeComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const content_r2 = ctx.$implicit;
    ɵɵproperty("innerHTML", content_r2, ɵɵsanitizeHtml);
  }
}
function NgxMarqueeComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const content_r3 = ctx.$implicit;
    ɵɵproperty("innerHTML", content_r3, ɵɵsanitizeHtml);
  }
}
function NgxMarqueeComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const content_r4 = ctx.$implicit;
    ɵɵproperty("innerHTML", content_r4, ɵɵsanitizeHtml);
  }
}
var _NgxMarqueeComponent = class _NgxMarqueeComponent {
  set reverse(reverse) {
    if (reverse) {
      this.style["--om-marquee-reverse"] = "reverse";
      return;
    }
    this.style["--om-marquee-reverse"] = "";
  }
  set animationDuration(animationDuration) {
    this.style["--om-marquee-animation-duration"] = animationDuration;
  }
  set marqueeGap(marqueeGap) {
    this.style["--om-marquee-gap"] = marqueeGap;
  }
  set pauseOnHover(pauseOnHover) {
    if (pauseOnHover) {
      this.style["--om-marquee-pause"] = "paused";
      return;
    }
    this.style["--om-marquee-pause"] = "running";
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.vertical = false;
    this.style = {};
    this.marqueeElements = [];
    this.isInView = false;
  }
  ngAfterViewInit() {
    if (!this.elementRefs) {
      return;
    }
    this.marqueeElements = this.elementRefs?.toArray().map((ref) => {
      return this.sanitizer.bypassSecurityTrustHtml(ref.nativeElement.outerHTML);
    });
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!this.isInView) {
          this.isInView = true;
        }
      } else if (this.isInView) {
        this.isInView = false;
      }
    });
    this.intersectionObserver.observe(this.marqueeRef.nativeElement);
  }
  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
};
_NgxMarqueeComponent.ɵfac = function NgxMarqueeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxMarqueeComponent)(ɵɵdirectiveInject(DomSanitizer));
};
_NgxMarqueeComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxMarqueeComponent,
  selectors: [["om-marquee"]],
  contentQueries: function NgxMarqueeComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c0, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elementRefs = _t);
    }
  },
  viewQuery: function NgxMarqueeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.marqueeRef = _t.first);
    }
  },
  inputs: {
    styleClass: "styleClass",
    reverse: "reverse",
    animationDuration: "animationDuration",
    marqueeGap: "marqueeGap",
    pauseOnHover: "pauseOnHover",
    vertical: "vertical"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 17,
  vars: 8,
  consts: [["OmMarquee", ""], [1, "om-marquee", 3, "ngStyle", "ngClass"], [1, "om-marquee-invisible"], [1, "om-marquee-content"], [1, "om-marquee-item-wrapper"], [1, "om-marquee-item", 3, "innerHTML"]],
  template: function NgxMarqueeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1, 0)(2, "div", 2);
      ɵɵprojection(3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 3)(5, "div", 4);
      ɵɵrepeaterCreate(6, NgxMarqueeComponent_For_7_Template, 1, 1, "div", 5, ɵɵrepeaterTrackByIndex);
      ɵɵelementEnd();
      ɵɵelementStart(8, "div", 4);
      ɵɵrepeaterCreate(9, NgxMarqueeComponent_For_10_Template, 1, 1, "div", 5, ɵɵrepeaterTrackByIndex);
      ɵɵelementEnd();
      ɵɵelementStart(11, "div", 4);
      ɵɵrepeaterCreate(12, NgxMarqueeComponent_For_13_Template, 1, 1, "div", 5, ɵɵrepeaterTrackByIndex);
      ɵɵelementEnd();
      ɵɵelementStart(14, "div", 4);
      ɵɵrepeaterCreate(15, NgxMarqueeComponent_For_16_Template, 1, 1, "div", 5, ɵɵrepeaterTrackByIndex);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassProp("direction-row", !ctx.vertical)("direction-column", ctx.vertical);
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
      ɵɵadvance(4);
      ɵɵclassProp("outOfView", !ctx.isInView);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.marqueeElements);
      ɵɵadvance(3);
      ɵɵrepeater(ctx.marqueeElements);
      ɵɵadvance(3);
      ɵɵrepeater(ctx.marqueeElements);
      ɵɵadvance(3);
      ɵɵrepeater(ctx.marqueeElements);
    }
  },
  dependencies: [CommonModule, NgClass, NgStyle],
  styles: [".om-marquee[_ngcontent-%COMP%]{--om-marquee-animation-duration: 20s;--om-marquee-gap: 1rem;--om-marquee-reverse: ;--om-marquee-pause: paused;width:100%;height:100%}.om-marquee[_ngcontent-%COMP%]   .om-marquee-invisible[_ngcontent-%COMP%]{width:0;height:0;display:none;pointer-events:none}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;gap:var(--om-marquee-gap);overflow:hidden;padding:.5rem}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]   .om-marquee-item-wrapper[_ngcontent-%COMP%]{display:flex;gap:var(--om-marquee-gap);flex-shrink:0}.om-marquee.direction-row[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]{flex-direction:row}.om-marquee.direction-row[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]   .om-marquee-item-wrapper[_ngcontent-%COMP%]{flex-direction:row;animation:_ngcontent-%COMP%_om-marquee-row var(--om-marquee-animation-duration) infinite linear var(--om-marquee-reverse)}.om-marquee.direction-column[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]{flex-direction:column}.om-marquee.direction-column[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]   .om-marquee-item-wrapper[_ngcontent-%COMP%]{flex-direction:column;animation:_ngcontent-%COMP%_om-marquee-column var(--om-marquee-animation-duration) infinite linear var(--om-marquee-reverse)}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content[_ngcontent-%COMP%]:hover > .om-marquee-item-wrapper[_ngcontent-%COMP%]{animation-play-state:var(--om-marquee-pause)}.om-marquee[_ngcontent-%COMP%]   .om-marquee-content.outOfView[_ngcontent-%COMP%] > .om-marquee-item-wrapper[_ngcontent-%COMP%]{animation-play-state:paused}@keyframes _ngcontent-%COMP%_om-marquee-row{0%{transform:translate(0)}to{transform:translate(calc(-100% - var(--om-marquee-gap)))}}@keyframes _ngcontent-%COMP%_om-marquee-column{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - var(--om-marquee-gap)))}}"]
});
var NgxMarqueeComponent = _NgxMarqueeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMarqueeComponent, [{
    type: Component,
    args: [{
      selector: "om-marquee",
      standalone: true,
      imports: [CommonModule],
      template: '<div\n  class="om-marquee"\n  [class.direction-row]="!vertical"\n  [class.direction-column]="vertical"\n  [ngStyle]="style"\n  [ngClass]="styleClass"\n  #OmMarquee\n>\n  <div class="om-marquee-invisible">\n    <ng-content></ng-content>\n  </div>\n  <div class="om-marquee-content" [class.outOfView]="!isInView">\n    <div class="om-marquee-item-wrapper">\n      @for (content of marqueeElements; track $index) {\n      <div class="om-marquee-item" [innerHTML]="content"></div>\n      }\n    </div>\n    <div class="om-marquee-item-wrapper">\n      @for (content of marqueeElements; track $index) {\n      <div class="om-marquee-item" [innerHTML]="content"></div>\n      }\n    </div>\n    <div class="om-marquee-item-wrapper">\n      @for (content of marqueeElements; track $index) {\n      <div class="om-marquee-item" [innerHTML]="content"></div>\n      }\n    </div>\n    <div class="om-marquee-item-wrapper">\n      @for (content of marqueeElements; track $index) {\n      <div class="om-marquee-item" [innerHTML]="content"></div>\n      }\n    </div>\n  </div>\n</div>\n',
      styles: [".om-marquee{--om-marquee-animation-duration: 20s;--om-marquee-gap: 1rem;--om-marquee-reverse: ;--om-marquee-pause: paused;width:100%;height:100%}.om-marquee .om-marquee-invisible{width:0;height:0;display:none;pointer-events:none}.om-marquee .om-marquee-content{width:100%;height:100%;display:flex;gap:var(--om-marquee-gap);overflow:hidden;padding:.5rem}.om-marquee .om-marquee-content .om-marquee-item-wrapper{display:flex;gap:var(--om-marquee-gap);flex-shrink:0}.om-marquee.direction-row .om-marquee-content{flex-direction:row}.om-marquee.direction-row .om-marquee-content .om-marquee-item-wrapper{flex-direction:row;animation:om-marquee-row var(--om-marquee-animation-duration) infinite linear var(--om-marquee-reverse)}.om-marquee.direction-column .om-marquee-content{flex-direction:column}.om-marquee.direction-column .om-marquee-content .om-marquee-item-wrapper{flex-direction:column;animation:om-marquee-column var(--om-marquee-animation-duration) infinite linear var(--om-marquee-reverse)}.om-marquee .om-marquee-content:hover>.om-marquee-item-wrapper{animation-play-state:var(--om-marquee-pause)}.om-marquee .om-marquee-content.outOfView>.om-marquee-item-wrapper{animation-play-state:paused}@keyframes om-marquee-row{0%{transform:translate(0)}to{transform:translate(calc(-100% - var(--om-marquee-gap)))}}@keyframes om-marquee-column{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - var(--om-marquee-gap)))}}\n"]
    }]
  }], () => [{
    type: DomSanitizer
  }], {
    marqueeRef: [{
      type: ViewChild,
      args: ["OmMarquee"]
    }],
    elementRefs: [{
      type: ContentChildren,
      args: ["OmMarqueeContent"]
    }],
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }],
    reverse: [{
      type: Input,
      args: ["reverse"]
    }],
    animationDuration: [{
      type: Input,
      args: ["animationDuration"]
    }],
    marqueeGap: [{
      type: Input,
      args: ["marqueeGap"]
    }],
    pauseOnHover: [{
      type: Input,
      args: ["pauseOnHover"]
    }],
    vertical: [{
      type: Input,
      args: ["vertical"]
    }]
  });
})();
export {
  NgxMarqueeComponent
};
//# sourceMappingURL=@omnedia_ngx-marquee.js.map
