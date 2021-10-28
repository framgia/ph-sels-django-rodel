from django.urls import path
from django.urls.conf import include

from rest_framework import routers

from .views import (
    ActivityViewSet,
)

router = routers.SimpleRouter()
router.register(r'activity', ActivityViewSet)


app_name = 'activity'

urlpatterns = [
    path('', include(router.urls)),
    path('activity/bulk',
         ActivityViewSet.as_view({'post': 'bulk_create'}),
         name='create-activities'),
]
