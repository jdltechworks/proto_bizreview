from django.shortcuts import render
from django.views.generic import TemplateView
import os

# Create your views here.
class HomeView(TemplateView):
    template_name = 'templates/home.html'

    def get(self, *args, **kwargs):
        return render(self.request, self.template_name)
