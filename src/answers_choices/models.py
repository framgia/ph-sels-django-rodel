from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model


USER = get_user_model()
QUIZ = 'quiz.Quiz'


class Question(models.Model):
    question = models.CharField(max_length=120)
    quiz = models.ForeignKey(QUIZ, default=1, on_delete=models.CASCADE)
    description = models.CharField(max_length=1028, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        verbose_name = 'Question'
        verbose_name_plural = 'Questions'

    def __str__(self):
        return self.question


class Choice(models.Model):
    value = models.CharField(max_length=255)
    question = models.ManyToManyField(
        Question, related_name='questions', blank=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        verbose_name = 'Choice'
        verbose_name_plural = 'Choices'

    def __str__(self):
        return self.value


class Answer(models.Model):
    choice = models.ForeignKey(
        Choice, default=1, null=True, on_delete=models.SET_NULL)
    question = models.ForeignKey(
        Question, related_name='question_answer', default=1, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        verbose_name = 'Answer'
        verbose_name_plural = 'Answers'

    def __str__(self):
        return str(f'{self.choice}')

    # def __str__(self):
    #   return str(f'{self.question} --> {self.choice}')

#
