from django import views
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('signup', views.signup, name="signup"),
    path('signin', views.signin, name="signin"),
    path('signout', views.signout, name="signout"),
    path('changepass', views.changepass, name="changepass"),
    path('profile', views.profile, name="profile"),
    path('requestAppr', views.requestAppr, name="requestAppr"),
    path('pending', views.pending, name="pending"),
    path('myrequests', views.myrequests, name="myrequests"),
    path('archiveDB', views.archiveDB, name="archiveDB"),
    path('group', views.group, name="group"),
    path('additionalGrp', views.additionalGrp, name="additionalGrp"),
    path('approve', views.approve, name="approve"),
    path('cancel', views.cancel, name="cancel"),
    # path('login', views.login, name="login"),
]