

from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from sels_core.permissions import IsAdminOrReadonly
from .serializers import AnsweredQuestionSerializer
from .models import AnsweredQuestion


class AnsweredQuestionViewSet(viewsets.ModelViewSet):
    queryset = AnsweredQuestion.objects.all()
    serializer_class = AnsweredQuestionSerializer
    # authentication_classes = [JWTAuthentication, SessionAuthentication]
    # permission_classes = [IsAdminOrReadonly]

    @action(methods=['POST'], detail=False)
    def bulk_create(self, request):
        serializer = AnsweredQuestionSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
