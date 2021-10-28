from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model


USER = get_user_model()
FOLLOW = 'follow.Follow'
LESSON = 'lesson.Lesson'


class Activity(models.Model):
    class TYPE(models.TextChoices):
        FOLLOWED = 'Follow',
        UNFOLLOWED = 'Unfollow',
        TAKEN = 'Lesson'

    user = models.ForeignKey(USER, default=1, on_delete=models.CASCADE)
    activity_type = models.CharField(
        _("activity type"), max_length=50,  choices=TYPE.choices, blank=True, null=True)

    followed = models.ForeignKey(
        USER, related_name="end_user", blank=True, null=True, on_delete=models.CASCADE)
    started_lesson = models.ForeignKey(
        LESSON, blank=True, null=True, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        ordering = ['-pk']
        unique_together = [['user', 'started_lesson']]
        verbose_name = 'Activity'
        verbose_name_plural = 'Activities'

    def __str__(self):
        if self.activity_type == 'Follow':
            return f'{self.user} started following {self.followed} '

        if self.activity_type == 'Unfollow':
            return f'{self.user} unfollowed {self.followed} '

        else:
            return f'{self.user} started {self.started_lesson} course'
