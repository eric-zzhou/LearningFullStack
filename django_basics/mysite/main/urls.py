# Linking URLs to views in views.py
from django.urls import path
from . import views

urlpatterns = [
    # path("<int:id>", views.index, name="index"),
    path("<int:id>", views.index, name="index"),
    path("create/", views.create, name="create"),
    path("view/", views.view, name="view"),
    path("", views.home, name="home"),
]
