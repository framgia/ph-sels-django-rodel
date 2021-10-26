

from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from sels_core.permissions import IsAdminOrReadonly
from .serializers import AnsweredQuestionSerializer
from .models import AnsweredQuestion


class AnsweredQuestionViewSet(viewsets.ModelViewSet):
    queryset = AnsweredQuestion.objects.all()
    serializer_class = AnsweredQuestionSerializer
    # authentication_classes = [JWTAuthentication, SessionAuthentication]
    # permission_classes = [IsAdminOrReadonly]
