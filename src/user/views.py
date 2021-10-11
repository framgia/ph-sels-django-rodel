from django.contrib.auth import get_user_model


from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response

from sels_core.permissions import UserPermission
from .serializers import UserSerializer

User = get_user_model()



class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  # permission_classes = [ UserPermission ]
  