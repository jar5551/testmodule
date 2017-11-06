import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HelloModule} from './hello/hello.module';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HelloModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
