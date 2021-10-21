from django.contrib import admin

from .models import Answer, Choice, Question

admin.site.register([ Answer, Choice, Question ])