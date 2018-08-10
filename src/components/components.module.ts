import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieCardComponent } from './movie-card/movie-card';
@NgModule({
	declarations: [MovieCardComponent],
	imports: [IonicPageModule.forChild(MovieCardComponent)],
	exports: [MovieCardComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
