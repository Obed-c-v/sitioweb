import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router'; // ← RouterModule aquí
import { CommonModule } from '@angular/common'; // ← CommonModule para *ngIf, *ngFor, etc.
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,     // ← Resuelve *ngIf y *ngFor
    RouterModule      // ← Resuelve [routerLink]
  ],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css'
})
export class Breadcrumbs implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    });

    // Inicial
    this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet === 'primary') {
        const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
        if (routeURL) {
          url += `/${routeURL}`;
        }

        let label = child.snapshot.data['title'] || routeURL || 'Inicio';
        if (label === '') label = 'Inicio';

        breadcrumbs.push({ label, url });

        return this.createBreadcrumbs(child, url, breadcrumbs);
      }
    }

    return breadcrumbs;
  }
}