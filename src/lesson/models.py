from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model

from django.dispatch import receiver
from django.db.models.signals import post_save

from activity.models import Activity

USER = get_user_model()
QUIZ = 'quiz.Quiz'


class Lesson(models.Model):
    quiz = models.ForeignKey(QUIZ, default=1, on_delete=models.CASCADE)
    taken_by = models.ForeignKey(USER, default=1, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        ordering = ['-pk']
        unique_together = ['quiz', 'taken_by']
        verbose_name = 'Lesson'
        verbose_name_plural = 'Lessons'

    def __str__(self):
        return self.quiz.name


@receiver(post_save, sender=Lesson)
def post_save_project(sender, instance, created, position=1, *args, **kwargs):
    _user = instance.taken_by
    if created:
        activity = Activity(
            user=_user,
            started_lesson=instance,
            activity_type='Lesson',
        )
        activity.save()
