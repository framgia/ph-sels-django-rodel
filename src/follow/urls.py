from django.urls import path
from django.urls.conf import include

from rest_framework import routers

from .views import ( 
  FollowViewSet,
  FollowUserViewSet,
  following_users_view
)

router = routers.SimpleRouter()
router.register(r'follows', FollowViewSet)
router.register(r'follow-user', FollowUserViewSet)


app_name='follows'

urlpatterns = [
  path('follows/following/', following_users_view, name='following'),
  path('', include(router.urls)),
]