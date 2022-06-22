import { SlidesService } from './services/slides.service';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule
} from "@angular/core";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService, SlidesService],
})
export class CoreModule {}
