from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from rest_framework import viewsets
from rest_framework.decorators import ( 
  api_view,
  permission_classes,
  authentication_classes
)
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from sels_core.permissions import IsAdminUser
from .serializers import UserSerializer

User = get_user_model()



class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  # permission_classes = [ IsAdminUser ]
  authentication_classes = [ JWTAuthentication ]
  


@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication, SessionAuthentication])
def user_owner_details_view(request, username, *args, **kwargs):
  profile = get_object_or_404(User, username=username)
  if request.user.username == username:
    serializer = UserSerializer(profile)
  return Response(serializer.data, status=status.HTTP_200_OK)
