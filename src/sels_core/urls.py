from django.contrib import admin
from django.urls import path
from django.urls.conf import include

from rest_framework_simplejwt.views import (
  TokenObtainPairView,
  TokenRefreshView
)


app_name='user'

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  path('api/', include('user.urls'), name='api'),
  path('api-auth/', include('rest_framework.urls')),
]
