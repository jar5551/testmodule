import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelloComponent} from './hello/hello.component';

const DECLARATIONS = [
    HelloComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class HelloModule {
}
