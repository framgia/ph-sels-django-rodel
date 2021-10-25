from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model

from rest_framework import serializers
# from rest_framework.validators import UniqueTogetherValidator

from .models import Lesson

User = get_user_model()


class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields = ['id', 'quiz', 'taken_by', 'updated_at', 'created_at']

    # def validate(self, data):
    #     quiz_name = data['name']
    #     user = self.context['request'].user
    #     quiz_exist = Quiz.objects.all().filter(
    #         name=quiz_name,
    #         created_by=user
    #     ).exists()
    #     if quiz_exist and self.context['request'].method == 'POST':
    #         raise serializers.ValidationError(
    #             f"{user} has already created a quiz with this name.")
    #     return data

    # def create(self, validated_data):
    #     user = self.context['request'].user
    #     try:
    #         instance = Quiz.objects.create(**validated_data, created_by=user)
    #         instance.save()
    #     except:
    #         raise serializers.ValidationError(f"Unauthorized user.")
    #     return instance
