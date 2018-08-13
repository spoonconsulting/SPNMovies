import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieCardComponent } from './movie-card/movie-card';
import { MovieCardDetailComponent } from './movie-card-detail/movie-card-detail';
import { MovieCardDescriptionComponent } from './movie-card-description/movie-card-description';
@NgModule({
	declarations: [
		MovieCardComponent,
		MovieCardDetailComponent,
    	MovieCardDescriptionComponent
	],
	imports: [
		IonicPageModule.forChild(MovieCardComponent),
		IonicPageModule.forChild(MovieCardDetailComponent),
		IonicPageModule.forChild(MovieCardDescriptionComponent)
	],
	exports: [
		MovieCardComponent,
		MovieCardDetailComponent,
    	MovieCardDescriptionComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
