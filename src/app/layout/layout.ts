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
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goSearch(): void {
    const q = this.quickQuery?.trim() ?? '';
    if (!q) return;

    this.router.navigate(['/busqueda'], {
      queryParams: { q },
      queryParamsHandling: 'merge'
    });

    this.quickQuery = '';
    this.menuOpen = false; // Cerrar menú al buscar
  }
}
 

