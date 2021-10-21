from django.contrib.auth import get_user_model


from rest_framework import viewsets


from .serializers import (
  QuizSerializer,
)
from .models import Quiz




class QuizViewSet(viewsets.ModelViewSet):
  queryset = Quiz.objects.all()
  serializer_class = QuizSerializer
  # permission_classes = [ IsAuthenticated ]

  
  # def get_serializer_context(self):
  #   return{"owner": self.request.user}
     