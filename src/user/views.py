from django.contrib.auth import get_user_model


from rest_framework import viewsets
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

from sels_core.permissions import IsAdminUser
from .serializers import UserSerializer

User = get_user_model()



class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  # permission_classes = [ IsAdminUser ]
  authentication_classes = [ JWTAuthentication ]
  