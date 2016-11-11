import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


import {RequestCalcComponent} from "./request-calc.component";

@NgModule({
  declarations: [RequestCalcComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [RequestCalcComponent]
})
export class RequestCalcModule {

}
