# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_todo_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='detail',
            field=models.CharField(default=b'', max_length=200, blank=True),
        ),
    ]
