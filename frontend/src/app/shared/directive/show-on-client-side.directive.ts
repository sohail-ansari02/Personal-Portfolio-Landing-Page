import {
	Directive,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	afterNextRender,
} from "@angular/core";

@Directive({
	selector: "[appShowOnClientSide]",
	standalone: true,
})
export class ShowOnClientSideDirective {
	constructor(
		private element: ElementRef,
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
	) {
		afterNextRender(() => {
			this.viewContainer.createEmbeddedView(this.templateRef);
		});
	}
}
