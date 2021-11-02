from django.urls import path, re_path
from django.urls.conf import include

from rest_framework import routers

from .views import QuizViewSet

router = routers.SimpleRouter()
router.register(r'quiz', QuizViewSet)


app_name = 'quiz'

urlpatterns = [
    path('', include(router.urls)),
]
