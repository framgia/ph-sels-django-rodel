from django.contrib.auth import get_user_model


from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from .serializers import (
    AnswerSerializer,
    ChoiceSerializer,
    QuestionSerializer
)
from .models import Answer, Choice, Question


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    # permission_classes = [ IsAuthenticated ]

    @action(methods=['POST'], detail=False)
    def bulk_create(self, request):
        serializer = AnswerSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer
    # permission_classes = [ IsAuthenticated ]

    @action(methods=['POST'], detail=False)
    def bulk_create(self, request):
        serializer = ChoiceSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    # permission_classes = [ IsAuthenticated ]

    @action(methods=['POST'], detail=False)
    def bulk_create(self, request):
        serializer = QuestionSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
