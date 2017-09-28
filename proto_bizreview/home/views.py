from django.shortcuts import render
from django.views.generic import TemplateView, DetailView, ListView
import os

# Create your views here.
class HomeView(TemplateView):
    template_name = 'home.html'
