from django.contrib.auth import get_user_model


from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from sels_core.permissions import IsAdminOrReadonly
from .serializers import (
    QuizSerializer,
)
from .models import Quiz


class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAdminOrReadonly]
