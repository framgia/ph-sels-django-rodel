from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model

USER = get_user_model()

class Follow(models.Model):
  class STATUS(models.TextChoices):
    FOLLOW = 'Following', 
    UNFOLLOW = 'Unfollowed'
    
  follower = models.ForeignKey(USER, related_name="follower", on_delete=models.CASCADE)
  followee = models.ForeignKey(USER, related_name="followee", on_delete=models.CASCADE)
  status = models.CharField(
    max_length=50, 
    choices=STATUS.choices, 
    default=STATUS.FOLLOW,
    blank=True, null=True
  )

  def __str__(self):
    return f"{str(self.follower)} {str(self.status)} {str(self.followee)}"

  class Meta:
    unique_together = [['follower', 'followee']] 
    db_table = 'follow_user'

