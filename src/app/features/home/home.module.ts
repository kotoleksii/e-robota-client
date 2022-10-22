import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import {ScrollToTopComponent} from './components/scroll-to-top/scroll-to-top.component';
import {FooterComponent} from './components/footer/footer.component';
import {TitleComponent} from './components/title/title.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';


@NgModule({
    declarations: [HomeComponent, ScrollToTopComponent, FooterComponent, TitleComponent, AboutComponent, ContactComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatCardModule,
        MatButtonModule,
        NgxPaginationModule
    ]
})
export class HomeModule {
}
