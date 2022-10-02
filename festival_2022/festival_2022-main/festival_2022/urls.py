from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('postapp.urls')),
    #앱의 urls를 받아오는것
]