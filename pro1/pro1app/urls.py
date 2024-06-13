from django.urls import path
from . import views
urlpatterns=[
    path('',views.student),
    path('add/',views.add_student),
    path('delete/',views.delete),
    path('addstudent/',views.addstudent),
    path('getstudent/',views.getstudent),
    path('editstudent/',views.editstudent),
    path('deletestudent/',views.deletestudent),
    # message app
    path('user_register',views.user_register),
        path('login',views.login),
    path('chatapp/',views.chat_app),
    path('chatappuserreg/',views.chatappuserreg),
     path('chatappuserlogin/',views.chatappuserlogin),
    path('addcontactchat/',views.addcontact_chat),
    path('getcontactchat/',views.getcontact_chat),
    path('getmessage/',views.sendedmessages),
    path('get_newmessage/',views.get_newmessage),

    # new pro
    

] 