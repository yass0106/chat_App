# Generated by Django 5.0.1 on 2024-05-31 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pro1app', '0009_chatappuserslogin'),
    ]

    operations = [
        migrations.AddField(
            model_name='addcontact',
            name='usermno',
            field=models.CharField(default='1', max_length=10),
            preserve_default=False,
        ),
    ]
