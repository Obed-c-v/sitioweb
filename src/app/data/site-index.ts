export type SiteItemType = 'pagina' | 'seccion';

export type SiteItem = {
    id: string;
    title: string;
    description: string;
    path?: string;
    type: SiteItemType;
    section?: string;
    keywords?: string[];
    otro?: string;
};

export const SITE_INDEX: SiteItem[] = [
    {
        id: 'inicio',
        title: 'Inicio',
        description: 'Página principal del sitio de práctica',
        path: '/',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['inicio', 'home', 'principal', 'estructura'],
        otro: 'ahsdhd',
    },
    {
        id: 'elementos',
        title: 'Elementos',
        description: 'Elementos de la página web',
        path: '/elementos',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['elementos', 'ui', 'componentes'],
    },
    {
        id: 'menu',
        title: 'Menú',
        description: 'Elementos principales del menú web y su utilidad',
        path: '/menu',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['menu', 'navegación', 'navbar', 'links', 'persistente', 'principal'],
    },
    {
        id: 'breadcrumbs',
        title: 'Breadcrumbs',
        description: 'Describe el funcionamiento y utilidad de los breadcrumbs',
        path: '/breadcrumbs',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['breadcrumbs', 'navegación'],
    },
    {
        id: 'mapa',
        title: 'Mapa del sitio',
        description: 'Diseño del mapa del sitio y relación con la navegación',
        path: '/mapa-sitio',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['mapa del sitio', 'sitemap'],
    },
    {
        id: 'error404',
        title: 'Error 404',
        description: 'Página para rutas que no existen (404)',
        type: 'seccion',
        section: 'Errores',
    },
];

//un servicio es un sistema que se encarga de de hacer algo 