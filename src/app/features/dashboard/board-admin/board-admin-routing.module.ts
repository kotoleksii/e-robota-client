import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BoardAdminComponent} from './board-admin.component';

const routes: Routes = [
    {
        path: '',
        component: BoardAdminComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class BoardAdminRoutingModule {
}