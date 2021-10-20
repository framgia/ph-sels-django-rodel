from rest_framework import serializers

from .models import Answer, Choice, Question 




class AnswerSerializer(serializers.ModelSerializer):

  class Meta:
    model = Answer
    fields = '__all__'

class ChoiceSerializer(serializers.ModelSerializer):

  class Meta:
    model = Choice
    fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):

  class Meta:
    model = Question
    fields = '__all__'

    