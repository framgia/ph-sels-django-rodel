from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model


USER = get_user_model()


class Quiz(models.Model):
    name = models.CharField(max_length=120, verbose_name=_('Quiz name'))
    description = models.CharField(max_length=1028, blank=True, null=True)
    is_active = models.BooleanField(_("quiz active"), default=False)
    created_by = models.ForeignKey(
        USER, default=1, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        ordering = ['-id']
        verbose_name = 'Quiz'
        verbose_name_plural = 'Quizzes'

    def __str__(self):
        return self.name
