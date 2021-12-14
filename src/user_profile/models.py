from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model

from django.dispatch import receiver
from django.db.models.signals import post_save

USER = get_user_model()


class Profile(models.Model):
    user = models.ForeignKey(USER, default=1, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        ordering = ['-pk']
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=USER)
def post_save_project(sender, instance, created, *args, **kwargs):
    if created:
        profile = Profile(
            user=instance,
        )
        profile.save()
