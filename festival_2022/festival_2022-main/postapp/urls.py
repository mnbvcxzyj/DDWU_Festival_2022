from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import SimpleRouter
from .views import PostViewSet, CommentViewSet
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import PostViewSet
from rest_framework.urlpatterns import format_suffix_patterns

product_router = SimpleRouter(trailing_slash=False)
product_router.register('', PostViewSet, basename='post')


post_router = SimpleRouter(trailing_slash=False)
post_router.register('', PostViewSet, basename='post')

comment_router = SimpleRouter(trailing_slash=False)
comment_router.register('comments', CommentViewSet, basename='comment')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(post_router.urls)),
    path('search/', include(post_router.urls)),
    path('posts/', include(comment_router.urls)),    
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)