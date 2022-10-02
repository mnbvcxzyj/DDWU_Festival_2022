from re import T
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    filter_backends = [SearchFilter]
    search_fields = ('eventTitle',) 


@method_decorator(csrf_exempt, name='dispatch')
class CommentView(APIView):
    def get(self, request, format=None):
        print(111111111111111222222222222222222111)
        comments = Comment.objects.filter().all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request):
        print(11111111111111111111111111111111111111111111111)
        print(request.data)
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

def home(request):
    return render(request, "index.html")     
