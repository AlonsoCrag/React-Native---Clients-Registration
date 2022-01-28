from django.urls import path
from . import views

urlpatterns = [
    path('', views.Test),
    path('api/v1/register', views.Register, name="Route to register users"),
    path('api/v1/login', views.Login, name="Route to log users"),
]