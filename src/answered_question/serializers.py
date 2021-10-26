from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model

from rest_framework import serializers
# from rest_framework.validators import UniqueTogetherValidator

from .models import AnsweredQuestion

User = get_user_model()


class AnsweredQuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnsweredQuestion
        fields = '__all__'
