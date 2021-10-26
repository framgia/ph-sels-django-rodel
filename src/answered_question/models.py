from django.db import models
from django.utils.translation import ugettext_lazy as _


LESSON = 'lesson.Lesson'
QUESTION = 'answers_choices.Question'
ANSWER = 'answers_choices.Answer'


class AnsweredQuestion(models.Model):
    lesson = models.ForeignKey(LESSON, default=1, on_delete=models.CASCADE)
    question = models.ForeignKey(
        QUESTION, default=1, on_delete=models.CASCADE)
    answer = models.ForeignKey(ANSWER, default=1, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

    class Meta:
        ordering = ['-pk']
        verbose_name = 'AnsweredQuestion'
        verbose_name_plural = 'AnsweredQuestions'

    def __str__(self):
        return self.question.question
