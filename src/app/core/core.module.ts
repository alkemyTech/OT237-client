import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { SlideService } from './services/slide.service';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule
} from "@angular/core";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService, SlideService, UserService, RoleService],
})
export class CoreModule {}
