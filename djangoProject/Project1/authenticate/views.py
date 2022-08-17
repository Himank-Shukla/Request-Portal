import datetime

from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
import requests
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User

# Create your views here.
from Project1 import settings

manager = False
userdetail = {}


def home(request):
    if request.user.is_authenticated:
        # staff = User.objects.filter(is_staff=True)
        # print(staff)
        response = requests.get('http://127.0.0.1:8000/userdetails').json()
        username = request.user.username
        # manager=False

        for i in response:
            # print(i['ID'])
            if i['LOGIN'] == username:
                global userdetail
                userdetail.update(i)
                print(userdetail)
                if i['ADMIN'] == 1:
                    global manager
                    manager = True
                    break
                else:
                    manager = False
        # manager=request.user.is_staff
        fname = request.user.get_full_name()
        print(manager)
        return render(request, 'authenticate/index.html',
                      {'fname': fname, 'manager': manager, 'userdetail': userdetail})
    # print(userdetail)
    return render(request, 'authenticate/index.html')


def signup(request):
    if request.method == "POST":
        # username=request.POST.get('username')
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']

        if User.objects.filter(username=username):
            messages.error(request, "Username already exist! Please try some other username.")
            return redirect('home')

        if User.objects.filter(email=email).exists():
            messages.error(request, "Email Already Registered!!")
            return redirect('home')

        if len(username) > 20:
            messages.error(request, "Username must be under 20 charcters!!")
            return redirect('home')

        if pass1 != pass2:
            messages.error(request, "Passwords didn't matched!!")
            return redirect('home')

        if not username.isalnum():
            messages.error(request, "Username must be Alpha-Numeric!!")
            return redirect('home')

        myuser = User.objects.create_user(username, email, pass1)
        myuser.first_name = fname
        myuser.last_name = lname
        myuser.save()
        messages.success(request, "Your Account has been successfully created.")
        return redirect('signin')

    return render(request, 'authenticate/signup.html')


def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        pass1 = request.POST['pass1']
        user = authenticate(username=username, password=pass1)
        if user is not None:
            login(request, user)
            # fname = user.first_name
            return redirect('home')
            # return render(request, "authenticate/index.html", {'fname': fname , 'username':username})
        else:
            messages.error(request, "Bad Credentials !")
            return redirect('home')

    return render(request, 'authenticate/signin.html')


def signout(request):
    global userdetail
    userdetail = {}
    logout(request)
    messages.success(request, "Logged Out Successfully!")
    return redirect('signin')


def changepass(request):
    if request.method == 'POST':
        username = request.user.username
        # username = request.POST['username']
        passold = request.POST['passold']
        pass1 = request.POST['pass1']
        currentpassword = request.user.password
        u = User.objects.get(username__exact=username)
        if pass1 == passold:
            messages.error(request, "Password cannot be same!!")
            return redirect('home')
        matchcheck = check_password(passold, currentpassword)
        if matchcheck:
            u.set_password(pass1)
            u.save()
            messages.success(request, "Password Changed Sucessfully!")
            return redirect('home')
        else:
            messages.error(request, "Old Password are not same!")
            return redirect('home')
    return render(request, 'authenticate/changepass.html',
                  {'username': request.user.username, 'fname': request.user.get_short_name()})


def profile(request):
    return render(request, 'authenticate/profile.html',
                  {'username': request.user.username, 'name': request.user.get_short_name, 'email': request.user.email,
                   'userdetail': userdetail})


def requestAppr(request):
    print(manager)
    response = requests.get('http://127.0.0.1:8000/teams').json()
    return render(request, 'authenticate/requestAppr.html',
                  {'username': request.user.username, 'name': request.user.get_short_name, 'email': request.user.email,
                   'userdetail': userdetail, 'response': response})


def pending(request):
    # manager = request.user.is_staff
    print(manager)
    return render(request, 'authenticate/pending.html',
                  {'username': request.user.username, 'name': request.user.get_short_name, 'email': request.user.email,
                   'manager': manager, 'userdetail': userdetail})


def additionalGrp(request):
    # print(datetime.date.today())
    response = requests.get('http://127.0.0.1:8000/teams').json()
    # for i in response:

    print(userdetail)
    return render(request, 'authenticate/additionalGrp.html',
                  {'username': request.user.username, 'name': request.user.get_short_name, 'email': request.user.email,
                   'userdetail': userdetail, 'response': response})


def myrequests(request):
    return render(request, 'authenticate/myrequests.html',
                  {'username': request.user.username, 'name': request.user.get_short_name, 'email': request.user.email,
                   'userdetail': userdetail})


def archiveDB(request):
    response = requests.get('http://127.0.0.1:8000/teams').json()
    return render(request, 'authenticate/archiveDB.html',
                  {'username': request.user.username, 'name': request.user.get_short_name, 'email': request.user.email,
                   'userdetail': userdetail, 'response': response})


def group(request):
    return render(request, 'authenticate/group.html',
                  {'username': request.user.username, 'name': request.user.get_short_name, 'email': request.user.email,
                   'userdetail': userdetail})


def approve(request):
    # subject = "Welcome to Amadeus !!"
    # message="Hello " + request.user.get_full_name() + "!!\n" + "Your request have been approved!!\n"
    # from_email = settings.EMAIL_HOST_USER
    # to_list = [request.user.email]
    # send_mail(subject, message, from_email, to_list, fail_silently=True)
    return redirect('home')


def cancel(request):
    return redirect('home')
#
# def login(request):
#     return render(request,'login.html')
