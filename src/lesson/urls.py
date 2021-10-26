from django.urls import path
from django.urls.conf import include

from rest_framework import routers

from .views import (
    LessonViewSet,
)

router = routers.SimpleRouter()
router.register(r'lesson', LessonViewSet)


app_name = 'lesson'

urlpatterns = [
    path('', include(router.urls)),
]
