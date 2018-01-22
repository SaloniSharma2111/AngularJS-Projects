import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { PageDefault }    from './app.pagedefault';
import { PageAComponent } from './app.page-a';
import { PageBComponent } from './app.page-b';
import { routing } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, PageDefault, 
                    PageAComponent, PageBComponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
