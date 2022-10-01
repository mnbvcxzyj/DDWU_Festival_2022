from rest_framework.serializers import ModelSerializer
from .models import Post, Comment
from rest_framework import serializers

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [ 'eventImg', 'eventTitle', 'eventIntro', 'eventGuide', 'eventAttention' ]


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = [ 'comment' ]