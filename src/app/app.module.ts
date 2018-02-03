import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routes
import { app_routing } from './app.routes';

// Servicios
import { InformationService } from './services/information.service';
import { ProductosService } from './services/productos.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioItemComponent } from './components/portafolio/portfolio-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortfolioItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [InformationService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
