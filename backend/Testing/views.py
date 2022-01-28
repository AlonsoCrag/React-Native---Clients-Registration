from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators import csrf
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
# Create your views here.
def Index(request):
    if request.method == 'POST':
        print("Incoming post request...")
        print(request.POST)
    return HttpResponse("Index")