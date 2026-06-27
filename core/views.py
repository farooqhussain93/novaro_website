from django.shortcuts import render
from .models import ContactSubmission


def save_contact_submission(request):
    success = False

    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        message = request.POST.get("message", "").strip()

        if name and email and message:
            ContactSubmission.objects.create(
                name=name,
                email=email,
                message=message
            )
            success = True

    return success


def index(request):
    success = save_contact_submission(request)

    return render(request, "core/index.html", {
        "success": success
    })


def about(request):
    return render(request, "core/about.html")


def services(request):
    return render(request, "core/services.html")


def contact(request):
    success = save_contact_submission(request)

    return render(request, "core/contact.html", {
        "success": success
    })


def portfolio(request):
    return render(request, "core/portfolio.html")


def testimonials(request):
    return render(request, "core/testimonials.html")