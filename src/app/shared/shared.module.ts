import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { ToolbarModule } from 'primeng/toolbar';
import {GalleriaModule} from 'primeng/galleria';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { SomosComponent } from './somos/somos.component';
import { TitleComponent } from './title/title.component';

import { FieldsetModule } from 'primeng/fieldset';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem, PrimeIcons } from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';
import { JogoComponent } from './jogo/jogo.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { PatrocinioComponent } from './patrocinio/patrocinio.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    SomosComponent,
    TitleComponent,
    JogoComponent,
    ReceitasComponent,
    PatrocinioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ToolbarModule,
    FieldsetModule,
    SidebarModule,
    ButtonModule,
    GalleriaModule,
    AccordionModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    SomosComponent,
    TitleComponent,
    JogoComponent,
    PatrocinioComponent,
    ReceitasComponent
  ]
})
export class SharedModule { }
