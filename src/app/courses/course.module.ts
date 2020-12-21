import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppPipeModule } from "../shared/component/pipe/app-pipe.module";
import { StartModule } from "../shared/component/star/start.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./courses-list.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],imports: [
        CommonModule,
        FormsModule,
        StartModule,
        AppPipeModule,
        RouterModule.forChild([
            {
               path:'courses',component: CourseListComponent
            },
            {
               path:'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})

export class CourseModule {

}