import { Routes } from '@angular/router';

import { Layout } from './layout/layout';
import { Inicio } from './pages/inicio/inicio';
import { ElementosSitio } from './pages/elementos-sitio/elementos-sitio';
import { MapaSitio } from './pages/mapa-sitio/mapa-sitio';
import { Error404 } from './pages/error-404/error-404';
import { Menu } from './pages/menu/menu';
import { Breadcrumbs } from './pages/breadcrumbs/breadcrumbs';
import { Busqueda } from './pages/busqueda/busqueda';
export const routes: Routes = [
  {
    path: '',
    component: Layout,           
    children: [
      {
        path: '',               
        component: Inicio,
        pathMatch: 'full'
      },
      {
        path: 'elementos',       
        component: ElementosSitio
      },
      {
        path: 'mapa-sitio',
        component: MapaSitio
      },

      {
        path: 'menu',
        component: Menu
      },
     {
      path: 'breadcrumbs',
      component: Breadcrumbs

     },

     {
       path: 'busqueda',
       component: Busqueda
     },
      {
        path: '**',              // Cualquier ruta desconocida DENTRO del layout
        component: Error404
      }
    ]
  },

  // 404 global (por si alguien entra a rutas muy extrañas fuera del layout)
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];


//1- en angular se ejecuta priero el main 
//2-despues el index
// el index tiene una extructura basica de una pagina htm
//-selector: nombre del componenente de la etiqueta con el que la bas a traer 
//-app.routers 