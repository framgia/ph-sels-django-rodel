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


app_name='answer_choice'

urlpatterns = [
  path('', include(router.urls)),
]