# Generated by Django 2.1.5 on 2019-03-18 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('volvoce', '0006_auto_20190318_1604'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicleindividualdata',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='vehicleindividualdata',
            name='month',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='vehicleindividualdata',
            name='year',
            field=models.DateField(),
        ),
    ]