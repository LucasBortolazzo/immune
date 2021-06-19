import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// aplicacao
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ServicosDisponiveisComponent } from './servicos-disponiveis/servicos-disponiveis.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {ROUTES} from './app.routes';
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { AskedQuestionsComponent } from './asked-questions/asked-questions.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServicosDisponiveisComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    PreCadastroComponent,
    AskedQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
