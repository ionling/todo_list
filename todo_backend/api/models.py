from django.contrib.auth.models import User
from django.db import models


class Todo(models.Model):
    NONE = 'n'
    PRIORITIES = (
        ('h', 'High'),
        ('m', 'Medium'),
        ('l', 'Low'),
        (NONE, 'None'),
    )
    user = models.ForeignKey(User)
    # [Automatic primary key fields](https://docs.djangoproject.com/en/1.8/topics/db/models/#automatic-primary-key-fields)
    title = models.CharField(max_length=20)
    detail = models.CharField(max_length=200, blank=True, default='')
    done = models.BooleanField(default=False)
    priority = models.CharField(max_length=1, choices=PRIORITIES, default=NONE)
    expires = models.DateTimeField(blank=True, null=True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)
