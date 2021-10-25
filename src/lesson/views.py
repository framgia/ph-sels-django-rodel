from django.contrib.auth import get_user_model


from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

from sels_core.permissions import IsAdminOrReadonly
from .serializers import LessonSerializer
from .models import Lesson


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    # authentication_classes = [JWTAuthentication, SessionAuthentication]
    # permission_classes = [IsAdminOrReadonly]
