import { NgModule } from "@angular/core";
import { NavbarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule {

}