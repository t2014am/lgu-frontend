import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';

import {
    SharedModule,
    FooterComponent,
    HeaderComponent,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        SharedModule,
        HomeModule,
        rootRouting,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
