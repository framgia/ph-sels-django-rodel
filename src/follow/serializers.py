from django.contrib.auth import get_user_model

from rest_framework import serializers

from .models import Follow

User = get_user_model()




class UserSerializer(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = [ 'id', 'username']

    
class FollowSerializer(serializers.ModelSerializer):
  follower = UserSerializer(read_only=True)
  followee = UserSerializer(read_only=True)

  class Meta:
    model = Follow
    fields = [ 'id', 'follower', 'followee', 'status']

    
class FollowCreateSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Follow
    fields = [ 'id', 'follower', 'followee']


