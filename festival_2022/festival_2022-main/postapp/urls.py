from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import SimpleRouter
from .views import PostViewSet
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import PostViewSet, CommentView
from rest_framework.urlpatterns import format_suffix_patterns

product_router = SimpleRouter(trailing_slash=False)
product_router.register('', PostViewSet, basename='post')


post_router = SimpleRouter(trailing_slash=False)
post_router.register('', PostViewSet, basename='post')




urlpatterns = [
    path('', views.home),
    path('admin/', admin.site.urls),
    path('post/', include(post_router.urls)),
    path('search/', include(post_router.urls)),
    path('posts/comments', views.CommentView.as_view()),    
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)