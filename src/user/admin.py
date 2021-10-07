from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _

from .models import CustomUser as User

# admin.site.register(User)

@admin.register(User)
class CustomUserAdmin(UserAdmin):
  ordering = ('pk', )
  fieldsets = (
    (None, {'fields': ( 'username', 'email', 'password',)}),
    (_('Personal info'), {'fields': ('first_name', 'last_name')}),
    (_('Permissions'), {
      'fields': ('is_active', 'is_admin', 'is_superuser', 'groups', 'user_permissions'),
    }),
    (_('Important dates'), {
      'fields': ('last_login', 'created_at')}),
  )

  add_fieldsets = (
    (None, {
      'classes': ('wide',),
      'fields': ( 'username', 'email', 'first_name', 'last_name', 'password1', 'password2', 'is_admin')}
    ),
  )
