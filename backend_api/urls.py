
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('backendapi.urls')),
    path('admin/', admin.site.urls),
]
