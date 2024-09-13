import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./core/layout/layout.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "",
				component: HomeComponent,
				// loadComponent: () =>
				//   import('./home/home.component').then((m) => m.HomeComponent),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
