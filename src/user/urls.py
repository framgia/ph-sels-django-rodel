from django.urls import path
from django.urls.conf import include

from rest_framework import routers

from .views import UserViewSet, user_owner_details_view, get_user_list_view


router = routers.SimpleRouter()
router.register(r'users', UserViewSet)

app_name = 'user'

urlpatterns = [
    path('users/<str:username>/', user_owner_details_view,
         name='auth-user-details'),
    path('users-list/', get_user_list_view, name='list'),
    path('', include(router.urls)),
]
