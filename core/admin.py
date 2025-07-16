from django.contrib import admin

# Register your models here.

from .models import ContactSubmission

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'short_message', 'submitted_at')
    search_fields = ('name', 'email', 'message')
    list_filter = ('submitted_at',)
    ordering = ('-submitted_at',)
    readonly_fields = ('name', 'email', 'message', 'submitted_at')

    def short_message(self, obj):
        return (obj.message[:50] + '...') if len(obj.message) > 50 else obj.message

    short_message.short_description = 'Message'



