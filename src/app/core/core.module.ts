import { OrganizationService } from './services/organization.service';
import { SlideService } from './services/slide.service';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule
} from "@angular/core";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService, UserService, RoleService, SlideService, OrganizationService],
})
export class CoreModule {}
