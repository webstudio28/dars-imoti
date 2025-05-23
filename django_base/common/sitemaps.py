from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse

class StaticViewSitemap(Sitemap):
    changefreq = 'monthly'

    def items(self):
        return [
            'home',
            'pricing',
            'news',
            'about',
            'contacts',
            'faq',
            'cookies-page',
        ]

    def location(self, item):
        return reverse(item)

    def priority(self, item):
        if item in ['home', 'pricing', 'news']:
            return 0.9
        return 0.5

