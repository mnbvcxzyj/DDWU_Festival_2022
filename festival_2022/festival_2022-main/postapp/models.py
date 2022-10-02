from logging import PlaceHolder
from django.db import models

class Post(models.Model):
    eventImg = models.ImageField(blank=True, null=True, upload_to='post_photo')
    eventTitle = models.TextField()
    eventIntro = models.TextField()
    eventGuide = models.TextField()
    eventAttention = models.TextField()

    def __str__(self):
        return self.eventTitle


class Comment(models.Model):
    comment = models.TextField(PlaceHolder)
    
    def __str__(self):
        return self.comment    