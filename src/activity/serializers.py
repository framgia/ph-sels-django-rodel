from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers

from .models import Activity
from follow.models import Follow
from lesson.models import Lesson
from quiz.models import Quiz

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username']


class QuizSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    quiz = QuizSerializer(read_only=True)

    class Meta:
        model = Lesson
        fields = '__all__'


class ActivitySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    followed = UserSerializer(read_only=True)
    started_lesson = LessonSerializer(read_only=True)

    class Meta:
        model = Activity
        fields = '__all__'
