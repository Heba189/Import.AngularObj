import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { logService } from "./services/log.services";
import { LoginService } from "./services/login.service";
import { ModuleWithProviders } from "@angular/core";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule, providers: [] };
  }
}
// export const moduleWithProviders: ModuleWithProviders = {
//   ngModule: CoreModule,
//   providers: [logService],
// };
