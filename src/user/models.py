from django.db import models
from django.utils import timezone
from django.contrib.auth.models import (
  AbstractBaseUser,
  PermissionsMixin,
  BaseUserManager
)
from django.utils.translation import ugettext_lazy as _


class CustomUserManager(BaseUserManager): 
  def create_superuser(self, email, username, first_name, last_name, password, **kwargs):
    kwargs.setdefault('is_staff', True)
    kwargs.setdefault('is_superuser', True)
    kwargs.setdefault('is_active', True)

    if kwargs.get('is_staff') is not True:
      raise ValueError('is_staff must be set True for superuser')
    if kwargs.get('is_superuser') is not True:
      raise ValueError('is_superuser must be set True for superuser')
    return self.create_user(email, username, first_name, last_name, password, **kwargs)

  def create_user(self, email, username, first_name, last_name, password, **kwargs):
    return self._create_user(email, username, first_name, last_name, password, **kwargs)

  def _create_user(self, email, username, first_name, last_name, password, **kwargs):
    if not email:
      raise ValueError(_('Enter a valid email address'))
    email = self.normalize_email(email)
    user = self.model(
      email=email,
      username=username,
      first_name=first_name,
      last_name=last_name,
      **kwargs
    )
    user.set_password(password)
    user.save()
    return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
  username = models.CharField( max_length=60, unique=True)
  email = models.EmailField(_('email address'), max_length=60, unique=True)
  first_name = models.CharField(max_length=60, blank=True, null=True)
  last_name = models.CharField(max_length=60, blank=True, null=True)
  is_admin = models.BooleanField(default=False)
  is_staff = models.BooleanField(default=False)
  is_active = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=False, auto_now=False, default=timezone.now)
  update_at = models.DateTimeField(auto_now_add=True)
   
  objects = CustomUserManager()

  USERNAME_FIELD = ('username')
  REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'password']

  class Meta:
    ordering = ['username', '-pk',]
    db_table = 'auth_user' 
    managed = True 
    verbose_name = 'User'
    verbose_name_plural = 'Users'
