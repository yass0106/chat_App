# Generated by Django 5.0.1 on 2024-05-31 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pro1app', '0008_chatappusers'),
    ]

    operations = [
        migrations.CreateModel(
            name='chatappuserslogin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobileno', models.CharField(max_length=10)),
                ('password', models.CharField(max_length=10)),
            ],
        ),
    ]