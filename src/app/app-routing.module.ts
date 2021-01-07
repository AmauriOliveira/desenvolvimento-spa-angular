import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CreateComponent } from "./print/create/create.component";
import { GenerateComponent } from "./print/generate/generate.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "create", component: CreateComponent },
  { path: "print", component: GenerateComponent },
  { path: "about", component: SobreComponent },
  { path: "contact", component: ContatoComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: '**', component: NotFoundComponent },//404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
