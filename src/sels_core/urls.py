from django.contrib import admin
from django.urls import path
from django.urls.conf import include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include('user.urls'), name='users_api'),
    path('api/', include('follow.urls'), name='follow_api'),
    path('api/', include('quiz.urls'), name='quiz_api'),
    path('api/', include('answers_choices.urls'), name='answers_choices_api'),
]
