from django.contrib.sitemaps.views import sitemap
from django.urls import path
from django.views.static import serve

from django_base import settings
from django_base.common.sitemaps import StaticViewSitemap
from django_base.common.views import HomeView, AboutView, PricingView, ContactsView, FaqView, NewsView, NewsDetailView, \
    CookiesPolicy, MessageSent

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('za-nas/', AboutView.as_view(), name='about'),
    path('uslugi/', PricingView.as_view(), name='pricing'),
    path('kontakti/', ContactsView.as_view(), name='contacts'),
    path('faq/', FaqView.as_view(), name='faq'),
    path('novini-dars-imoti/', NewsView.as_view(), name='news'),
    path('novini-dars-imoti/<slug:slug>/', NewsDetailView.as_view(), name='news_detail'),
    path('politika-za-poveritelnost', CookiesPolicy.as_view(), name='cookies-page'),
    path('izprateno-uspeshno', MessageSent.as_view(), name='message-sent'),
    path("robots.txt", serve, {"path": "robots.txt", "document_root": settings.STATIC_URL}),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
]
