# Generated by Django 2.1.5 on 2019-03-18 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('volvoce', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='access_token',
            field=models.CharField(max_length=255),
        ),
    ]
