import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.route';
import { AppService } from './app.service';
import { DescricaoComponent } from './descricao/descricao.component';
import { PedidoComponent } from './pedido/pedido.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
} from "angular-6-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("318370678758927")
      }
    ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DescricaoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,   
    RouterModule.forRoot(ROUTES),
    SocialLoginModule
  ],
  providers: [AppService,{provide: AuthServiceConfig,useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
