import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [ NavbarComponent ],
	exports: [
		NavbarComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		FontAwesomeModule,
	],
})
export class CoreModule {
}
