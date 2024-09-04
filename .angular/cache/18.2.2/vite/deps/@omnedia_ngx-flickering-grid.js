import {
  CommonModule,
  NgClass
} from "./chunk-QA5DSV7M.js";
import {
  Component,
  Input,
  ViewChild,
  setClassMetadata,
  ɵɵStandaloneFeature,
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

// node_modules/@omnedia/ngx-flickering-grid/fesm2022/omnedia-ngx-flickering-grid.mjs
var _c0 = ["OmFlickeringGridBackground"];
var _c1 = ["OmFlickeringGridCanvas"];
var _c2 = ["*"];
var NgxFlickeringGridComponent = class _NgxFlickeringGridComponent {
  background;
  canvas;
  styleClass;
  squareSize = 4;
  gridGap = 6;
  flickerChance = 0.3;
  color = "#6B7280";
  maxOpacity = 0.3;
  intersectionObserver;
  ctx;
  cols = 0;
  rows = 0;
  squares;
  lastAnimationTime = 0;
  animationFrameId;
  memoizedColor = "rgba(0, 0, 0,";
  isInView = false;
  animating = false;
  ngAfterViewInit() {
    this.initCanvas();
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.renderContents(entry.isIntersecting);
    });
    this.intersectionObserver.observe(this.canvas.nativeElement);
  }
  ngOnDestroy() {
    window.removeEventListener("resize", () => this.setCanvasSize());
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
  renderContents(isIntersecting) {
    if (isIntersecting && !this.isInView) {
      this.isInView = true;
      if (!this.animating) {
        this.animationFrameId = requestAnimationFrame((time) => this.animateCanvas(time));
      }
    } else if (!isIntersecting) {
      this.isInView = false;
    }
  }
  initCanvas() {
    this.setCanvasSize();
    this.setMemoizedColor();
    window.addEventListener("resize", () => this.setCanvasSize());
    if (!this.animating) {
      this.animationFrameId = requestAnimationFrame((time) => this.animateCanvas(time));
    }
  }
  setMemoizedColor() {
    if (typeof window === "undefined") {
      this.memoizedColor = `rgba(0, 0, 0,`;
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      this.memoizedColor = `rgba(0, 0, 0,`;
      return;
    }
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    this.memoizedColor = `rgba(${r}, ${g}, ${b},`;
    return;
  }
  animateCanvas(time) {
    if (!this.isInView) {
      this.animating = false;
      return;
    }
    this.animating = true;
    const deltaTime = (time - this.lastAnimationTime) / 1e3;
    this.lastAnimationTime = time;
    this.updateSquares(deltaTime);
    this.drawGrid();
    this.animationFrameId = requestAnimationFrame((time2) => this.animateCanvas(time2));
  }
  setCanvasSize() {
    this.canvas.nativeElement.width = this.background.nativeElement.getBoundingClientRect().width + 50;
    this.canvas.nativeElement.height = this.background.nativeElement.getBoundingClientRect().height + 50;
    this.setupCanvas();
    this.ctx = this.canvas.nativeElement.getContext("2d");
  }
  setupCanvas() {
    this.cols = Math.floor(this.canvas.nativeElement.width / (this.squareSize + this.gridGap));
    this.rows = Math.floor(this.canvas.nativeElement.height / (this.squareSize + this.gridGap));
    this.squares = new Float32Array(this.cols * this.rows);
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i] = Math.random() * this.maxOpacity;
    }
  }
  updateSquares(deltaTime) {
    if (!this.squares) {
      return;
    }
    for (let i = 0; i < this.squares.length; i++) {
      if (Math.random() < this.flickerChance * deltaTime) {
        this.squares[i] = Math.random() * this.maxOpacity;
      }
    }
  }
  drawGrid() {
    if (!this.squares) {
      return;
    }
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    const [r, g, b] = this.ctx.getImageData(0, 0, 1, 1).data;
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const opacity = this.squares[i * this.rows + j];
        this.ctx.fillStyle = `${this.memoizedColor}${opacity})`;
        this.ctx.fillRect(i * (this.squareSize + this.gridGap), j * (this.squareSize + this.gridGap), this.squareSize, this.squareSize);
      }
    }
  }
  static ɵfac = function NgxFlickeringGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxFlickeringGridComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgxFlickeringGridComponent,
    selectors: [["om-flickering-grid"]],
    viewQuery: function NgxFlickeringGridComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.background = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.canvas = _t.first);
      }
    },
    inputs: {
      styleClass: "styleClass",
      squareSize: "squareSize",
      gridGap: "gridGap",
      flickerChance: "flickerChance",
      color: "color",
      maxOpacity: "maxOpacity"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c2,
    decls: 7,
    vars: 1,
    consts: [["OmFlickeringGridBackground", ""], ["OmFlickeringGridCanvas", ""], [1, "om-flickering-grid", 3, "ngClass"], [1, "om-flickering-grid-background"], ["width", "100", "height", "100", 1, "om-flickering-grid-canvas"], [1, "om-flickering-grid-content"]],
    template: function NgxFlickeringGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 2)(1, "div", 3, 0);
        ɵɵelement(3, "canvas", 4, 1);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 5);
        ɵɵprojection(6);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.styleClass);
      }
    },
    dependencies: [CommonModule, NgClass],
    styles: [".om-flickering-grid[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.om-flickering-grid[_ngcontent-%COMP%]   .om-flickering-grid-background[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;pointer-events:none;overflow:hidden}.om-flickering-grid[_ngcontent-%COMP%]   .om-flickering-grid-background[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{pointer-events:none;z-index:0;position:absolute;inset:0}.om-flickering-grid[_ngcontent-%COMP%]   .om-flickering-grid-content[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;height:100%}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxFlickeringGridComponent, [{
    type: Component,
    args: [{
      selector: "om-flickering-grid",
      standalone: true,
      imports: [CommonModule],
      template: '<div class="om-flickering-grid" [ngClass]="styleClass">\r\n    <div class="om-flickering-grid-background" #OmFlickeringGridBackground>\r\n        <canvas class="om-flickering-grid-canvas" width="100" height="100" #OmFlickeringGridCanvas></canvas>\r\n    </div>\r\n    <div class="om-flickering-grid-content">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>',
      styles: [".om-flickering-grid{position:relative;width:100%;height:100%}.om-flickering-grid .om-flickering-grid-background{position:absolute;width:100%;height:100%;pointer-events:none;overflow:hidden}.om-flickering-grid .om-flickering-grid-background canvas{pointer-events:none;z-index:0;position:absolute;inset:0}.om-flickering-grid .om-flickering-grid-content{position:relative;z-index:1;width:100%;height:100%}\n"]
    }]
  }], null, {
    background: [{
      type: ViewChild,
      args: ["OmFlickeringGridBackground"]
    }],
    canvas: [{
      type: ViewChild,
      args: ["OmFlickeringGridCanvas"]
    }],
    styleClass: [{
      type: Input,
      args: ["styleClass"]
    }],
    squareSize: [{
      type: Input,
      args: ["squareSize"]
    }],
    gridGap: [{
      type: Input,
      args: ["gridGap"]
    }],
    flickerChance: [{
      type: Input,
      args: ["flickerChance"]
    }],
    color: [{
      type: Input,
      args: ["color"]
    }],
    maxOpacity: [{
      type: Input,
      args: ["maxOpacity"]
    }]
  });
})();
export {
  NgxFlickeringGridComponent
};
//# sourceMappingURL=@omnedia_ngx-flickering-grid.js.map
