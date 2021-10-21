from django.urls import path
from django.urls.conf import include

from rest_framework import routers

from .views import (
    AnswerViewSet,
    ChoiceViewSet,
    QuestionViewSet
)

router = routers.SimpleRouter()
router.register(r'answer', AnswerViewSet)
router.register(r'choice', ChoiceViewSet)
router.register(r'question', QuestionViewSet)


app_name = 'answer_choice'

urlpatterns = [
    path('', include(router.urls)),
    path('questions/bulk',
         QuestionViewSet.as_view({'post': 'bulk_create'}),
         name='create-questions'),
    path('choices/bulk',
         ChoiceViewSet.as_view({'post': 'bulk_create'}),
         name='create-choices'),
    path('answers/bulk',
         AnswerViewSet.as_view({'post': 'bulk_create'}),
         name='create-answers'),
]
