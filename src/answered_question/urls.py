from django.urls import path
from django.urls.conf import include

from rest_framework import routers

from .views import (
    AnsweredQuestionViewSet,
)

router = routers.SimpleRouter()
router.register(r'answered', AnsweredQuestionViewSet)


app_name = 'answered_question'

urlpatterns = [
    path('', include(router.urls)),
    path('answered-questions/bulk',
         AnsweredQuestionViewSet.as_view({'post': 'bulk_create'}),
         name='create-answered-questions'),
]
