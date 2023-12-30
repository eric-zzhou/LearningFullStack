from django.shortcuts import render
from django.http import HttpResponse
from .models import TodoList, Item


# Create your views here.
def index(response, name):
    ls = TodoList.objects.get(name=name)
    item = ls.item_set.get(id=1)
    return HttpResponse(f"<h1>{ls.name}</h1></br><p>{item.text}<p>")
