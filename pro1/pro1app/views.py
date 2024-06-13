import json
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
from pro1app.models import *
# Create your views here.

@api_view(['GET'])
def student(request):
    stud_details=Student.objects.all().values()
    stud=list(stud_details)
    return Response(stud)

@api_view(['POST'])
def add_student(request):
    data = json.loads(request.body)
    print(data)
    name=data.get('name')
    regno=data.get('registerNo')
    dep=data.get('department')
    Student.objects.create(name=name,registerNo=regno,department=dep)
    
    return Response({'status':"success"})
    
@api_view(['POST'])
def delete(request):
    data = json.loads(request.body)
    regno=data.get('registerNo')
    Student.objects.filter(registerNo=regno).delete()
    return Response({'status':"success"})

@api_view(['POST'])
def addstudent(request):
    data = json.loads(request.body)
    name=data.get('name')
    regno=data.get('registerNo')
    dep=data.get('department')
    year=data.get('year')
    Addstudent.objects.create(name=name,registerNo=regno,department=dep,year=year)
    last=Addstudent.objects.filter().last()
    print(last)
    return Response({'status':"success"})

@api_view(['GET'])
def getstudent(request):
    students=Addstudent.objects.all().values()
    # print(students)
    return Response(list(students))

@api_view(['POST'])
def editstudent(request):
    data=json.loads(request.body)
    print(data)
    regno=data.get('registerNo')
    name=data.get('name')
    dep=data.get('department')
    year=data.get('year')
    Addstudent.objects.filter(registerNo=regno).update(name=name,department=dep,year=year)
    return Response({'status':"success"})

@api_view(['POST'])
def deletestudent(request):
    data=json.loads(request.body)
    print(data)
    regno=data.get('registerNo')
    Addstudent.objects.filter(registerNo=regno).delete()
    return Response({'status':"success"})

# messageapp

@api_view(['POST'])
def user_register(request):
    data = json.loads(request.body)
    username=data.get('username')
    mobileno=data.get('mobileno')
    email=data.get('email')
    password=data.get('password')
    cpassword=data.get('cpassword')
    if password == cpassword:
        register.objects.create(username=username,mobileNO=mobileno,email=email,password=password,cpassword=cpassword)
        # return render('login')
        return Response ('User created successfully')
    else:
        return Response ('create a correct password')
    
@api_view(['POST'])
def login(request):
    data=json.loads(request.body)
    mobileno=data.get('mobileno')
    password=data.get('password')
    login=register.objects.filter(mobileNO=mobileno,password=password)
    if login:
        return Response('successfully login')
    else:
        return Response('login unsuccessfull')
    
# @api_view(['POST'])
# def chat_app(request):
#     data=json.loads(request.body)
#     sender=data.get('sender')
#     message=data.get('message')
#     messages.objects.create(name=sender,message=message)
#     return Response({'status':"success"})

@api_view(['POST'])
def chatappuserreg(request):
    data=json.loads(request.body)
    print(data)
    username=data.get('name')
    mobileno=data.get('no')
    password=data.get('password')
    chatappusers.objects.create(username=username,mobileno=mobileno,password=password)
    return Response({'status':"success"})

@api_view(['POST'])
def chatappuserlogin(request):
    data=json.loads(request.body)
    print(data)
    mobileno=data.get('no')
    password=data.get('password')
    if chatappusers.objects.filter(mobileno=mobileno,password=password):
        loginusername=chatappusers.objects.filter(mobileno=mobileno,password=password)
        print(loginusername[0].username)
        return Response({'status':"success",'name':loginusername[0].username})
    else:
        return Response({'status':"error"})
    return Response({'status':"success"})

@api_view(['POST'])
def addcontact_chat(request):
    print('--------')
    data=json.loads(request.body)
    # data=json.loads(request.body)
    print(data)
    name=data.get('name')
    mobileno=data.get('mobileno')
    usermno=data.get('usermno')
    details=addcontact.objects.create(mobileNO=mobileno,name=name,usermno=usermno)
    print(details)
    return Response({'status':"success"})

@api_view(['POST'])
def getcontact_chat(request):
    data=json.loads(request.body)
    user_contact_details=data.get('usermno')
    contact_details=addcontact.objects.filter(usermno=user_contact_details).all().values()
    # contact_details=addcontact.objects.filter(usermno=name).all().values()
    print(contact_details,"contact_details")
    return Response(list(contact_details))


@api_view(['POST'])
def chat_app(request):
    data=json.loads(request.body)
    print(data)
    sender=data.get('sender')
    message=data.get('message')
    receiver=data.get('receiver')
    messages.objects.create(Sname=sender,message=message,Rname=receiver)
    return Response({'status':"success"})

@api_view(['POST'])
def sendedmessages(request):
    # i=0
    # if(i==0):
    #     i=i+j
    #     if(i==1):
    #         length=0
    data=json.loads(request.body)
    # print(data)
    sender=data.get('senderno')
    receiver=data.get('receiverno')
    # checkcount=messages.objects.filter(Q(Sname=sender, Rname=receiver) | Q(Sname=receiver, Rname=sender)).all().values()
    # if length != len(checkcount):
        # j=0
    message=messages.objects.filter(Q(Sname=sender, Rname=receiver) | Q(Sname=receiver, Rname=sender)).all().values()
    # length=len(message)
    return Response(list(message))
    # print("getmessage",len(message))
    # i=1
    # return Response(list(message))



@api_view(['POST'])
def get_newmessage(request):
    data=json.loads(request.body)
    # print(data)
    count=data.get('msg')
    sender=data.get('senderno')
    receiver=data.get('receiverno')
    message=messages.objects.filter(Q(Sname=sender, Rname=receiver) | Q(Sname=receiver, Rname=sender)).all().values()
    if(count!=len(message)):
         return Response(list(message))
    else:
        return Response("")

# ---------------------------------------------------,message=message--------------getnewmessage

# new projjj

