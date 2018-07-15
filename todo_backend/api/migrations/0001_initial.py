# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=20)),
                ('detail', models.CharField(max_length=200)),
                ('done', models.BooleanField(default=False)),
                ('priority', models.CharField(default=b'n', max_length=1, choices=[(b'h', b'High'), (b'm', b'Medium'), (b'l', b'Low'), (b'n', b'None')])),
                ('expires', models.DateTimeField(null=True, blank=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
