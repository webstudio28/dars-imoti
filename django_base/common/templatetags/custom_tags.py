
from django import template
from django.template.context_processors import request
from django.urls import reverse

register = template.Library()

@register.simple_tag(takes_context=True)
def message_sent_successfully(context):
    # Access the request object from the context
    request = context.get('request')

    return f'{request.build_absolute_uri()}message-sent-successfully/'