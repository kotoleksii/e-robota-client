import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardNewsComponent} from './board-news.component';
import {BoardNewsRoutingModule} from './board-news-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    declarations: [BoardNewsComponent],
    imports: [
        CommonModule,
        BoardNewsRoutingModule,
        MatCardModule,
        MatButtonModule,
        NgxPaginationModule,
        FormsModule,
        MatProgressSpinnerModule
    ]
})
export class BoardNewsModule {
}
