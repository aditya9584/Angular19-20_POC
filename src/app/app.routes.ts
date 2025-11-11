import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { NgClassComponent } from './components/ng-class-component/ng-class-component';
import { NgStyleComponent } from './components/ng-style-component/ng-style-component';
import { ControlStatement } from './components/control-statement/control-statement';
import { Signal } from './components/signal/signal';
import { LinkedSignal } from './components/linked-signal/linked-signal';
import { TemplateForm } from './components/template-form/template-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { GetApi } from './components/API/get-api/get-api';
import { ResourceAPI } from './components/resource-api/resource-api';
import { LifeCycle } from './components/life-cycle/life-cycle';
import { NgForComponent } from './components/ng-for-component/ng-for-component';

export const routes: Routes = [
    { path: '',   component: Home, pathMatch:'full'},  // Home page
    { path: 'about', component: About }, //About page
    { path:'ng-class-component', component:NgClassComponent},
    { path:'ng-style-component', component:NgStyleComponent},
    { path:'control-flow', component:ControlStatement},
    { path:'ng-for', component:NgForComponent},
    { path:'signal', component:Signal},
    { path:'linkedSignal', component:LinkedSignal},
    { path:'template-form', component:TemplateForm},
    { path:'reactive-form', component:ReactiveForm},
    { path:'get-api', component:GetApi},
    { path:'resource-api', component:ResourceAPI},
    { path:'lifecycle', component:LifeCycle},
];
