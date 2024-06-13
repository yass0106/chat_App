from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    registerNo = models.CharField(max_length=100)
    department = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Addstudent(models.Model):
    name = models.CharField(max_length=100)
    registerNo = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    year =models.CharField(max_length=4)

class register(models.Model):
    username = models.CharField(max_length=50)
    mobileNO = models.CharField(max_length=10)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    cpassword = models.CharField(max_length=100)

    def __str__(self):
        return self.username

# class messages(models.Model):
#     message = models.CharField(max_length=500)
#     name = models.CharField(max_length=100)
#     created_by = models.ForeignKey(
#         register, null=True, blank=True, on_delete=models.RESTRICT)
#     created_at = models.DateTimeField(null=True, blank=True, auto_now_add=True)

class addcontact(models.Model):
    name = models.CharField(max_length=100)
    mobileNO = models.CharField(max_length=10)
    usermno = models.CharField(max_length=10)

class chatappusers(models.Model):
    username = models.CharField(max_length=50)
    mobileno = models.CharField(max_length=10)
    password = models.CharField(max_length=10)

class chatappuserslogin(models.Model):
    mobileno = models.CharField(max_length=10)
    password = models.CharField(max_length=10)

class messages(models.Model):
    message = models.CharField(max_length=5000)
    Sname = models.CharField(max_length=100)
    Rname=models.CharField(max_length=100)
    created_by = models.ForeignKey(
        register, null=True, blank=True, on_delete=models.RESTRICT)
    created_at = models.DateTimeField(null=True, blank=True, auto_now_add=True)
