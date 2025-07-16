from django.shortcuts import render
from .models import ContactSubmission

# Create your views here.

def index(request):
    success = False

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        if name and email and message:
            ContactSubmission.objects.create(
                name=name,
                email=email,
                message=message
            )
            success = True
    return render(request, 'core/index.html', {'success': success})

def about(request):
    return render(request, 'core/about.html')

def services(request):
    return render(request, 'core/services.html')

# def contact(request):
#     return render(request, 'core/contact.html')

def contact(request):
    success = False

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        if name and email and message:
            ContactSubmission.objects.create(
                name=name,
                email=email,
                message=message
            )
            success = True

    return render(request, 'core/contact.html', {'success': success})

def portfolio(request):
    return render(request, 'core/portfolio.html')

def testimonials(request):
    return render(request, 'core/testimonials.html')
