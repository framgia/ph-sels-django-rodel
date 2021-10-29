from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model

from django.dispatch import receiver
from django.db.models.signals import post_save, pre_delete

from activity.models import Activity

USER = get_user_model()


class Follow(models.Model):
    class STATUS(models.TextChoices):
        FOLLOW = 'Following',
        UNFOLLOW = 'Unfollowed'

    follower = models.ForeignKey(
        USER, related_name="follower", on_delete=models.CASCADE)
    followee = models.ForeignKey(
        USER, related_name="followee", on_delete=models.CASCADE)
    status = models.CharField(
        max_length=50,
        choices=STATUS.choices,
        default=STATUS.FOLLOW,
        blank=True, null=True
    )

    def __str__(self):
        return f'{str(self.followee)}'

    class Meta:
        unique_together = [['follower', 'followee']]
        db_table = 'follow_user'


@receiver(post_save, sender=Follow)
def post_save_follow(sender, instance, created, position=1, *args, **kwargs):
    _user = instance.follower
    end_user = instance.followee
    if created:
        activity = Activity(
            user=_user,
            followed=end_user,
            activity_type='Follow',
        )
        activity.save()


@receiver(pre_delete, sender=Follow)
def pre_delete_follow(sender, instance, *args, **kwargs):
    _user = instance.follower
    end_user = instance.followee
    activity = Activity(
        user=_user,
        followed=end_user,
        activity_type='Unfollow',
    )
    activity.save()
