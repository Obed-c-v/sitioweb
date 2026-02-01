import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Breadcrumb } from '../component/shared/breadcrumb/breadcrumb';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, Breadcrumb, FormsModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true
})
export class Layout {


  quickQuery = '';

  constructor(private router: Router) {}
goSearch(): void {
  const q = this.quickQuery?.trim() ?? '';

  if (!q) {
    // opcional: podrías mostrar un mensaje, o simplemente no hacer nada
    return;
  }

  this.router.navigate(['/busqueda'], {
    queryParams: { q },
    queryParamsHandling: 'merge'   // ← recomendado si quieres conservar otros params futuros
  });

  this.quickQuery = '';  // limpia el input después de buscar (mejora UX)
}


}
 

