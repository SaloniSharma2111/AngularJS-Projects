"use strict";
var router_1 = require('@angular/router');
var app_page_a_1 = require('./app.page-a');
var app_page_b_1 = require('./app.page-b');
var app_pagedefault_1 = require('./app.pagedefault');
var appRoutes = [
    { path: 'page-a', component: app_page_a_1.PageAComponent },
    { path: 'page-b/:id/:firstname', component: app_page_b_1.PageBComponent },
    { path: '', redirectTo: '/page-a', pathMatch: 'full' },
    { path: '**', component: app_pagedefault_1.PageDefault }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map