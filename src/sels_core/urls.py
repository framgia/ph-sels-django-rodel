from django.contrib import admin
from django.urls import path
from django.urls.conf import include



app_name='user'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('user.urls'), name='api')
]
