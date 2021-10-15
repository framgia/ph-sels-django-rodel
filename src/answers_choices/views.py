from django.contrib.auth import get_user_model


from rest_framework import viewsets

from .serializers import (
  AnswerSerializer,
  ChoiceSerializer,
  QuestionSerializer
)
from .models import Answer, Choice, Question





class AnswerViewSet(viewsets.ModelViewSet):
  queryset = Answer.objects.all()
  serializer_class = AnswerSerializer
  # permission_classes = [ IsAuthenticated ]

class ChoiceViewSet(viewsets.ModelViewSet):
  queryset = Choice.objects.all()
  serializer_class = ChoiceSerializer
  # permission_classes = [ IsAuthenticated ]

class QuestionViewSet(viewsets.ModelViewSet):
  queryset = Question.objects.all()
  serializer_class = QuestionSerializer
  # permission_classes = [ IsAuthenticated ]


