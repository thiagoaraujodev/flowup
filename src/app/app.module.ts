import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/outros/header/header.component';
import { FooterComponent } from './components/outros/footer/footer.component';
import { CardTimeComponent } from './components/outros/card-time/card-time.component';
import { ConstrucaoComponent } from './components/apagar/construcao/construcao.component';
import { CarouselComponent } from './components/outros/carousel/carousel.component';
import { CarouselSeguroIntuitivoComponent } from './components/outros/carousel-seguro-intuitivo/carousel-seguro-intuitivo.component';
import { DepoimentoEmpresasComponent } from './components/outros/depoimento-empresas/depoimento-empresas.component';
import { ConteudosGratuitosComponent } from './components/outros/conteudos-gratuitos/conteudos-gratuitos.component';
import { ComeceAgoraUsarComponent } from './components/outros/comece-agora-usar/comece-agora-usar.component';
import { ParceirosComponent } from './components/outros/parceiros/parceiros.component';
import { TesteComponent } from './components/apagar/teste/teste.component';
import { MelhorSoftwareComponent } from './components/outros/melhor-software/melhor-software.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardTimeComponent,
    ConstrucaoComponent,
    CarouselComponent,
    CarouselSeguroIntuitivoComponent,
    DepoimentoEmpresasComponent,
    ConteudosGratuitosComponent,
    ComeceAgoraUsarComponent,
    ParceirosComponent,
    TesteComponent,
    MelhorSoftwareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    SlickCarouselModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
