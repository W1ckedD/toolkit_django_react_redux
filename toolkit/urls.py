from django.contrib import admin
from django.urls import path, re_path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('', include('frontend.urls')),
    re_path(r'^.*/$', include('frontend.urls')),
]
