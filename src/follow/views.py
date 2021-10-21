from django.shortcuts import get_object_or_404, get_list_or_404
from django.contrib.auth import get_user_model


from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.decorators import authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


from .serializers import FollowSerializer, FollowCreateSerializer
from .models import Follow


User = get_user_model()


class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
    # permission_classes = [ IsAuthenticated ]


class FollowUserViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowCreateSerializer
    # permission_classes = [ IsAuthenticated ]


@authentication_classes([IsAuthenticated])
@api_view(['GET'])
def following_users_view(request, *args, **kwargs):
    followed_users = get_list_or_404(
        Follow, follower=request.user, status='Following')
    if request.method == 'GET':
        serializer = FollowSerializer(followed_users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
