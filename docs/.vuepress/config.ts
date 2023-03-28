import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'nl-BE',
    title: 'Draaiboek Trefpunt',
    description: 'Het grote draaiboek van Chiro Trefpunt',

    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ],
    theme: defaultTheme({
        logo: '/images/chirologo.png',
        // logo: '/images/logo_light.png',
        // logoDark: '/images/logo_dark.png',
        repo: 'Joris-Peeters/Draaiboek-trefpunt',
        docsDir: 'docs',
        warning: 'WAARSCHUWING',
        danger: 'GEVAAR',
        navbar: [
            '/algemeen/',
            {
                text: 'Evenementen',
                children: [
                    '/evenementen/diaavond/',
                    '/evenementen/fuif/',
                    '/evenementen/mosselsouper/',
                    '/evenementen/delivery/',
                    '/evenementen/spaghettiavond/',
                    '/evenementen/kerelsbbq/',
                ]
            },
            // '/groepsleiding/',
            {
                text: 'Dienstleiding',
                children: [
                    '/dienstleiding/intro.md',
                    '/dienstleiding/algemeen.md',
                    '/dienstleiding/mosselsouper',
                    '/dienstleiding/kamp/',
                ]
            },
            // '/kamp/',
        ],
        sidebarDepth: 1,
        sidebar: {
            '/algemeen/': [
                '/algemeen/agenda.md',
                '/algemeen/draaiboek.md'
            ],
            '/evenementen/': [
                '/evenementen/diaavond/',
                '/evenementen/fuif/',
                '/evenementen/mosselsouper/',
                '/evenementen/delivery/',
                '/evenementen/spaghettiavond/',
                '/evenementen/kerelsbbq/',
            ],
            '/dienstleiding/': [
                '/dienstleiding/intro.md',
                '/dienstleiding/algemeen.md',
                '/dienstleiding/mosselsouper/',
                {text: 'Kamp', link: '/dienstleiding/kamp/', collapsible: true, children: [
                    '/dienstleiding/kamp/administratie/bosaanvraag/',
                    '/dienstleiding/kamp/administratie/gemeentemateriaal.md',
                    '/dienstleiding/kamp/administratie/uldk.md',
                    '/dienstleiding/kamp/administratie/kampopstelling/',
                    '/dienstleiding/kamp/voorbereiding/organisatie_materiaal/',
                    '/dienstleiding/kamp/voorbereiding/materiaal_scheldebloem_trefpunt.md',
                    '/dienstleiding/kamp/voorbereiding/sjorhout.md',
                    '/dienstleiding/kamp/voorbereiding/camion_laden/',
                    '/dienstleiding/kamp/voorwacht/voorwacht.md',
                    '/dienstleiding/kamp/voorwacht/schade_gebreken.md',
                    '/dienstleiding/kamp/op_kamp/diensten.md',
                    '/dienstleiding/kamp/nawacht/nawacht.md'
                ]}
            ],
        }
    })
})
