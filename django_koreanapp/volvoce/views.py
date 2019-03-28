# django REST framework serializers
from django.contrib.auth.models import User, Group
from django.db import connection
from rest_framework import viewsets
from volvoce.serializers import *
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.utils import timezone

import json
from urllib.request import urlopen
import pprint
import requests
from django.shortcuts import render
from .models import *
import datetime
from django.core.files.uploadedfile import SimpleUploadedFile
import os
from drf_extra_fields.fields import Base64ImageField
import base64
from PIL import Image
from django.core.files.images import ImageFile
import pytz
import random
from collections import namedtuple

import calendar
import numpy as np

# for fleet chart
import calendar

# ----------- Steff -------------------
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.core.files.storage import default_storage


# ---------------------------------------


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


def index(request):
    return HttpResponse('<html>\
<head>\
    <title>Email Sign up page</title>\
</head>\
<body>\
    <form>\
      Email:<br>\
      <input type="text" name="email" placeholder="abcde@hotmail.com"><br>\
      Date of Birth:<br>\
      <input type="text" name="dob" placeholder="dd/mm/yyyy"><br><br>\
      <input type="submit" value="Sign up">\
    </form>\
</body>\
</html>\
')


def kakaologin(request):
    print('server side kakaologin')
    return HttpResponseRedirect("/static/kakaologin.html")


def accesstoken(request):
    jsonstring = request.GET['accesstoken']
    accesstoken = jsonstring.split(",")
    value = accesstoken[0].split(":")[1]
    return HttpResponse(value)


def oauth(request):
    print('server side oauth')
    code = request.GET['code']
    url = "https://kauth.kakao.com/oauth/token"
    payload = "grant_type=authorization_code&client_id=98fc736440ad9232847e17e8b26eb7a6&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Foauth&code=" + str(
        code)
    headers = {
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
    }
    response = requests.request("POST", url, data=payload, headers=headers)
    access_token = json.loads(((response.text).encode('utf-8')))['access_token']
    url = "https://kapi.kakao.com/v1/user/signup"
    headers.update({'Authorization': "Bearer " + str(access_token)})
    response = requests.request("POST", url, headers=headers)
    url = "https://kapi.kakao.com/v1/user/me"
    response = requests.request("POST", url, headers=headers)
    email = json.loads(response.text)
    nickname = email['properties']['nickname']
    if (email['properties']['thumbnail_image']):
        profile_image_url = email['properties']['thumbnail_image']
    else:
        profile_image_url = ""
    if ("kaccount_email" in email):
        email = email["kaccount_email"]
        redirectloc = "/static/dobsignup.html?access_token=" + str(access_token) + "&profileurl=" + str(
            profile_image_url) + "&nickname=" + str(nickname) + "&email=" + str(email)
        return HttpResponseRedirect(redirectloc)
    else:
        redirectloc = "/static/emailsignup.html?access_token=" + str(access_token) + "&profileurl=" + str(
            profile_image_url) + "&nickname=" + str(nickname)
        return HttpResponseRedirect(redirectloc)
    # return HttpResponse(response.text)


def signupdone(request):
    email = request.GET['email']
    name = request.GET['nickname']
    dob = request.GET['dob']
    access_token = request.GET['access_token']
    profile_image_url = request.GET['profile_image_url']
    company_name = request.GET['companyname']
    company_address = request.GET['companyaddress']
    user = User.objects.create(email=email, name=name, dob=dob, profile_image_url=profile_image_url,
                               access_token=access_token, companyName=company_name)
    user.save()
    return HttpResponseRedirect('/static/login.html?access_token=' + str(access_token))


def login(request):
    return HttpResponse('')


def roleupdate(request):
    role = request.GET['role']
    access_token = request.GET['access_token']
    user = User.objects.get(access_token=access_token)
    user.update(role=role)
    return HttpResponseRedirect('/static/login.html?')


def testlink(request):
    return HttpResponseRedirect('/static/testlink.html')


def getUserInfo(request):
    acessToken = request.GET['access_token']
    ThisUsr = User.objects.get(access_token=acessToken)
    d = {}
    d['email'] = ThisUsr.email
    d['name'] = ThisUsr.name
    d['dob'] = ThisUsr.dob
    d['profile_image_url'] = ThisUsr.profile_image_url
    company_name = ''
    if ThisUsr.companyName:
        d['company_name'] = ThisUsr.companyName
    else:
        d['company_name'] = company_name
    company_add = ''
    try:
        company_add = company.objects.get(companyName=ThisUsr.companyName)
    except:
        print("No company for user")
    if company_add:
        d['company_add'] = company_add.companyAddress
    else:
        d['company_add'] = ''
    d['phone_no'] = ThisUsr.phoneNumber
    print(d)
    return JsonResponse(d)


def addVeh(request):
    email = request.GET['email']
    serialNo = request.GET['sn']
    modelNo = request.GET['mn']
    purchasedate = request.GET['pd']
    manufacturer = request.GET['manu']
    desc = request.GET['desc']
    vtype = request.GET['Vtype']
    vehiclelist = VehicleList.objects.create(email=email, serial_no=serialNo, model_no=modelNo,
                                             purchase_date=purchasedate, desc=desc, manufacturer=manufacturer,
                                             vehicle_type=vtype, is_delete=0)
    vehiclelist.save()
    d = {}
    d['flag'] = 1
    return JsonResponse(d)


def GetVehList(request):
    email = request.GET['email']
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT vl.serial_no,vl.model_no,vl.purchase_date,vl.desc,vl.vehicle_type,vl.manufacturer,v.ImgUrl FROM volvoce.volvoce_vehiclelist as vl, volvoce.volvoce_vehicle as v where (vl.vehicle_type = v.Vtype and vl.email = %s and vl.is_delete=%s)",
            [email, '0'])
        res = dictfetchall(cursor)
        serialno = [s['serial_no'] for s in res]
        modelno = [s['model_no'] for s in res]
        pdate = [s['purchase_date'] for s in res]
        desc = [s['desc'] for s in res]
        vtype = [s['vehicle_type'] for s in res]
        manufacturer = [s['manufacturer'] for s in res]
        img = [s['ImgUrl'] for s in res]
        JsonObj = {
            "serialno": serialno,
            "modelno": modelno,
            "pdate": pdate,
            "desc": desc,
            "Vtype": vtype,
            "Manu": manufacturer,
            "img": img
        }
        cursor.close()
        return JsonResponse(JsonObj)


def dictfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]


def getOwnerJoblist(request):
    access_token = request.GET['access_token']
    print(access_token)
    job_desc = []
    job_datefrom = []
    job_dateto = []
    with connection.cursor() as cursor:
        select_query = "SELECT j.description, j.date_from, j.date_to FROM volvoce.volvoce_joblist j INNER JOIN volvoce.volvoce_user u ON j.email=u.email WHERE u.access_token=\'%s\'" % (
            str(access_token))
        cursor.execute(select_query)
        if cursor.rowcount == 0:
            json_obj = {
                'job_desc': job_desc,
                'job_datefrom': job_datefrom,
                'job_dateto': job_dateto
            }
            return JsonResponse(json_obj)
        for row in cursor:
            job_desc.append(row[0])
            job_datefrom.append(row[1])
            job_dateto.append(row[2])
    json_obj = {
        'job_desc': job_desc,
        'job_datefrom': job_datefrom,
        'job_dateto': job_dateto
    }
    print(json_obj)
    return JsonResponse(json_obj)


def RemoveVeh(request):
    email = request.GET['email']
    sno = request.GET['sno']
    vtype = request.GET['vtype']

    with connection.cursor() as cursor:
        cursor.execute(
            "DELETE FROM volvoce.volvoce_vehiclelist WHERE volvoce_vehiclelist.email=%s and volvoce_vehiclelist.serial_no=%s and volvoce_vehiclelist.vehicle_type=%s",
            [email, sno, vtype])
        res = cursor.fetchone()
        print(res)
        d = {}
        d['flag'] = 1
        cursor.close()
        removeMaintInternal(email, sno, vtype)
        return JsonResponse(d)


def getEmail(request):
    access_token = request.GET['access_token']
    user = User.objects.get(access_token=access_token).email
    json_obj = {
        'email': user
    }
    return JsonResponse(json_obj)


# def getOperatorList(request):
# 	email = request.GET['email']
# 	print (email)
# 	operatorlist = []
# 	operatordetails_profileurl = []
# 	operatordetails_name = []
# 	operatordetails_role = []
# 	operatordetails_status = []
# 	operatordetails_vehicles = []
# 	operatordetails_datefrom = []
# 	operatordetails_dateto = []
# 	try:
# 		operatorlist_query = "SELECT operatorEmail from volvoce.volvoce_operatorlist WHERE ownerEmail = \'%s\';" % (str(email))
# 		with connection.cursor() as cursor:
# 			cursor.execute(operatorlist_query)
# 			for row in cursor:
# 				operatorlist.append(row[0])
# 			for i in operatorlist:
# 				select_query = "SELECT u.profile_image_url, u.name, u.role, j.date_from, j.date_to, v.ImgUrl FROM volvoce.volvoce_user u inner join volvoce.volvoce_operatorjob oj ON u.email = oj.email inner join volvoce.volvoce_joblist j ON oj.jid = j.jid inner join volvoce.volvoce_operatorvehicle ov ON u.email = ov.opEmail INNER JOIN volvoce.volvoce_vehicle v ON v.Vtype = ov.vtype WHERE u.email = \'%s\' AND oj.jid IN (SELECT jid from volvoce.volvoce_operatorjob where email = \'%s\');" % (str(i), str(i))
# 				cursor.execute(select_query)
# 				if (cursor.rowcount == 0):
# 					select_query = "SELECT u.profile_image_url, u.name, u.role FROM volvoce.volvoce_user u WHERE email = \'%s\';" % (str(i))
# 					cursor.execute(select_query)
# 					for row in cursor:
# 						operatordetails_profileurl.append(str(row[0]))
# 						operatordetails_name.append(str(row[1]))
# 						operatordetails_role.append(str(row[2]))
# 					select_query = "SELECT j.date_from, j.date_to FROM volvoce.volvoce_joblist j INNER JOIN volvoce.volvoce_operatorjob oj ON j.jid=oj.jid where j.email = \'%s\';" % (str(i))
# 					cursor.execute(select_query)
# 					if (cursor.rowcount ==0):
# 						operatordetails_status.append('1')
# 					else:
# 						tempdatefrom = []
# 						tempdateto = []
# 						for row in cursor:
# 							tempdatefrom.append(row[0])
# 							tempdateto.append(row[1])
# 						for i in range(len(tempdatefrom)):
# 							datefrom = datetime.date(int(tempdatefrom[i][0:4]), int(tempdatefrom[i][5:7]), int(tempdatefrom[i][8:10]))
# 							dateto = datetime.date(int(tempdateto[i][0:4]), int(tempdateto[i][5:7]), int(tempdateto[i][8:10]))
# 							if datefrom < today < dateto:
# 								operatordetails_status.append(str(dateto))
# 					##### STOP ############### check if else logic
# 					select_query = "SELECT v.ImgUrl FROM volvoce.volvoce_vehicle v INNER JOIN volvoce.volvoce_operatorvehicle ov ON v.Vtype=ov.vtype where ov.opEmail = \'%s\';" % (str(i))
# 					cursor.execute(select_query)
# 					if (cursor.rowcount == 0):
# 						operatordetails_vehicles.append([""])
# 					else:
# 						tempvehicle = []
# 						for row in cursor:
# 							if row[0] not in tempvehicle:
# 								tempvehicle.append(row[0])
# 						operatordetails_vehicles.append(tempvehicle)
# 						continue
# 				else:
# 					tempdatefrom = []
# 					tempdateto = []
# 					tempvehicle = []
# 					for row in cursor:
# 						tempdatefrom.append(row[3])
# 						tempdateto.append(row[4])
# 						if row[5] not in tempvehicle:
# 							tempvehicle.append(row[5])
# 					user = cursor.fetchone()
# 					operatordetails_profileurl.append(str(user[0]))
# 					operatordetails_name.append(str(user[1]))
# 					operatordetails_role.append(str(user[2]))
# 					status = '1'
# 					today = datetime.date.today()
# 					for i in range(len(tempdatefrom)):
# 						# datefrom = datetime.date(int(tempdatefrom[i][0:4]), int(tempdatefrom[i][5:7]), int(tempdatefrom[i][8:10]))
# 						# dateto = datetime.date(int(tempdateto[i][0:4]), int(tempdateto[i][5:7]), int(tempdateto[i][8:10]))
# 						datefrom = datetime.date(int(tempdatefrom[i][0:4]), int(tempdatefrom[i][5:7]), int(tempdatefrom[i][8:10]))
# 						dateto = datetime.date(int(tempdateto[i][0:4]), int(tempdateto[i][5:7]), int(tempdateto[i][8:10]))
# 						if datefrom < today < dateto:
# 							status = str(dateto)						
# 					operatordetails_status.append(status)
# 					operatordetails_vehicles.append(tempvehicle)
# 			json_obj = {
# 				'operatorlist' : operatorlist,
# 				'operatordetails_profileurl' : operatordetails_profileurl,
# 				'operatordetails_name' : operatordetails_name,
# 				'operatordetails_role' : operatordetails_role,
# 				'operatordetails_status': operatordetails_status,
# 				'operatordetails_vehicles': operatordetails_vehicles
# 			}
# 		print (json_obj)
# 		return JsonResponse(json_obj)
# 	except Exception as e:
# 		return HttpResponse(e)

def getOperatorList(request):
    # email = request.GET['email']
    access_token = request.GET['access_token']
    operatorlist = []
    operatordetails_profileurl = []
    operatordetails_email = []
    operatordetails_name = []
    operatordetails_status = []
    operatordetails_vehicles = []
    operatordetails_datefrom = []
    operatordetails_dateto = []
    operatordetails_role = []
    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
        # Temporary to check if email is really owner email and no need to pass in email
        email = owner_email
    except:
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        operators = OperatorList.objects.filter(ownerEmail=owner_email, is_delete=0)
        for operator in operators:
            if operator.operatorEmail == owner_email:
                continue
            else:
                operatordetails_email.append(operator.operatorEmail)
        for email in operatordetails_email:
            user = User.objects.get(email=email)
            operatorlist.append(user.email)
            operatordetails_profileurl.append(user.profile_image_url)
            operatordetails_name.append(user.name)
            operatordetails_role.append(user.role)
            temp = []
            try:
                vehiclelist = OperatorVehicle.objects.filter(opEmail=email)
                for vehicle in vehiclelist:
                    vtype = vehicle.vtype
                    veh = Vehicle.objects.get(Vtype=vtype)
                    url = veh.ImgUrl
                    temp.append(url)
            except:
                print("vehicle list exception")
            operatordetails_vehicles.append(temp)
            status = '1'
            try:
                operator_jobs = OperatorJob.objects.filter(email=email)
                for job in operator_jobs:
                    jid = job.JID
                    job_info = JobList.objects.get(JID=jid)
                    date_from = job_info.date_from
                    date_to = job_info.date_to
                    today = timezone.now()
                    today = str(today)[:10]
                    today = datetime.datetime.strptime(today, '%Y-%m-%d')
                    date_from = datetime.datetime.strptime(date_from, '%Y-%m-%d')
                    date_to = datetime.datetime.strptime(date_to, '%Y-%m-%d')
                    if date_from < today < date_to:
                        status = date_to
                    try:
                        if status <= date_to < date_to:
                            status = date_to
                    except:
                        print('status side exception')
            except:
                print('job exception')
            if status != '1':
                status = datetime.datetime.strftime(status, '%Y-%m-%d')
            operatordetails_status.append(status)
        json_obj = {
            'operatorlist': operatorlist,
            'operatordetails_profileurl': operatordetails_profileurl,
            'operatordetails_name': operatordetails_name,
            'operatordetails_status': operatordetails_status,
            'operatordetails_role': operatordetails_role,
            'operatordetails_vehicles': operatordetails_vehicles
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        json_obj = {
            'result': 'false'
        }
        print(e)
        return JsonResponse(json_obj)


# def getVehicleUrl(request):
# 	access_token = request.GET['access_token']
# 	print (access_token)
# 	vehicle_url = []
# 	vehicle_type = []
# 	try:
# 		with connection.cursor() as cursor:
# 			select_query = "SELECT v.ImgUrl, v.Vtype from volvoce.volvoce_user u inner join volvoce.volvoce_vehiclelist vl ON u.email=vl.email INNER JOIN volvoce.volvoce_vehicle v ON vl.vehicle_type = v.vtype where u.access_token=\'%s\';" % (str(access_token))
# 			cursor.execute(select_query)
# 			for row in cursor:
# 				if row[0] not in vehicle_url:
# 					vehicle_url.append(row[0])
# 					vehicle_type.append(row[1])
# 		json_obj = {
# 			'vehicle_url' : vehicle_url,
# 			'vehicle_type': vehicle_type
# 		}
# 		return JsonResponse(json_obj)
# 	except Exception as e:
# 		print (e)
def getVehicleUrl(request):
    vehicle_url = []
    vehicle_type = []
    access_token = request.GET['access_token']
    try:
        owner = User.objects.get(access_token=access_token)
    except:
        json_obj = {
            'result': 'false'
        }
        return JsonResponse(json_obj)
    try:
        vehicles = Vehicle.objects.all()
        for vehicle in vehicles:
            vehicle_url.append(vehicle.ImgUrl)
            vehicle_type.append(vehicle.Vtype)
        json_obj = {
            'vehicle_url': vehicle_url,
            'vehicle_type': vehicle_type
        }
        return JsonResponse(json_obj)
    except:
        json_obj = {
            'result': 'false'
        }
        return JsonResponse(json_obj)


def checkEmail(request):
    access_token = request.GET['access_token']
    email = request.GET['email']
    print(email)
    if (email == '' or email == None):
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    print(access_token)
    try:
        with connection.cursor() as cursor:
            select_query = "SELECT email from volvoce.volvoce_user where email=\'%s\' and EXISTS (SELECT access_token from volvoce.volvoce_user where access_token=\'%s\')" % (
            str(email), str(access_token))
            cursor.execute(select_query)
            for row in cursor:
                if (row[0]):
                    json_obj = {
                        'result': 'true'
                    }
                    print(json_obj)
                    return JsonResponse(json_obj)
            json_obj = {
                'result': 'false'
            }
            print(json_obj)
            return JsonResponse(json_obj)
    except Exception as e:
        print(e)


# def addOperator(request):
# 	access_token = request.GET['access_token']
# 	owner_email = ""
# 	operator_email = request.GET['operator_email']
# 	vehicle_type = request.GET['vehicle_type']
# 	vehicle_type = vehicle_type.split(",")
# 	print (access_token)
# 	try:
# 		with connection.cursor() as cursor:
# 			select_query = "SELECT email from volvoce.volvoce_user where access_token=\'%s\'" % (str(access_token))
# 			cursor.execute(select_query)
# 			for row in cursor:
# 				owner_email = str(row[0])
# 				print(owner_email)
# 			insert_query = "INSERT INTO volvoce.volvoce_operatorlist (ownerEmail, operatorEmail, is_delete) VALUES (\'%s\', \'%s\',\'%s\');" % (str(owner_email), str(operator_email), '0')
# 			cursor.execute(insert_query)
# 			for i in vehicle_type:
# 				insert_query = "INSERT INTO volvoce.volvoce_operatorvehicle (opEmail, vtype) VALUES (\'%s\', \'%s\');" % (str(operator_email), str(i))
# 				cursor.execute(insert_query)
# 			json_obj = { 'result': 'true'}
# 		print (json_obj)
# 		return JsonResponse(json_obj)
# 	except Exception as e:
# 		json_obj = {'result': 'false'}
# 		print (json_obj)
# 		return JsonResponse (json_obj)

def addOperator(request):
    access_token = request.GET['access_token']
    operator_email = request.GET['operator_email']
    vehicle_type = request.GET['vehicle_type']
    vehicle_type = vehicle_type.split(",")
    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
        relationship = OperatorList.objects.filter(ownerEmail=owner_email, operatorEmail=operator_email).first()
        if relationship:
            print("relation existed")
            relationship.is_delete = 0
            relationship.save()
        else:
            print("new relationship")
            relationship = OperatorList.objects.create(ownerEmail=owner_email, operatorEmail=operator_email,
                                                       is_delete=0)
            relationship.save()
        for vehicle in vehicle_type:
            operator_vehicle = OperatorVehicle.objects.filter(opEmail=operator_email, vtype=vehicle).first()
            if operator_vehicle:
                continue
            else:
                operator_vehicle = OperatorVehicle.objects.create(opEmail=operator_email, vtype=vehicle)
                operator_vehicle.save()
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def getChartData(request):
    access_token = request.GET['access_token']
    email = request.GET['email']
    print(access_token)
    temp_from = []
    temp_to = []
    today = datetime.datetime.today().strftime('%Y-%m-%d')
    today = datetime.date(int(today[0:4]), int(today[5:7]), int(today[8:10]))
    print("todays date get")
    today_total = week_total = month_total = year_total = 0
    today_job = week_job = month_job = year_job = 0
    try:
        with connection.cursor() as cursor:
            select_query = "SELECT j.JID, j.date_from, j.date_to from volvoce.volvoce_joblist j inner join volvoce.volvoce_user u ON j.email = u.email WHERE u.access_token = \'%s\';" % (
                str(access_token))
            print(select_query)
            cursor.execute(select_query)
            if cursor.rowcount == 0:
                print("access token null")
                json_obj = {'result': 'false'}
                return JsonResponse(json_obj)
            for row in cursor:
                temp_from.append(row[1])
                temp_to.append(row[2])
            print("temp from")
            print(temp_from)
            temp_from = str(temp_from)
            temp_to = str(temp_to)
            for i in range(len(temp_from)):
                temp_from[i] = datetime.date(int(temp_from[i][0:4]), int(temp_from[i][5:7]), int(temp_from[i][8:10]))
                temp_to[i] = datetime.date(int(temp_to[i][0:4]), int(temp_to[i][5:7]), int(temp_to[i][8:10]))
            for i in range(len(temp_from)):
                if temp_from[i] < today <= temp_to[i]:
                    today_total += 1
                for j in range(7):
                    if temp_from[i] < (today - datetime.timedelta(days=j)) <= temp_to[i]:
                        week_total += 1
                        break
                for j in range(30):
                    if temp_from[i] < (today - datetime.timedelta(days=j)) <= temp_to[i]:
                        month_total += 1
                        break
                for j in range(365):
                    if temp_from[i] < (today - datetime.timedelta(days=j)) <= temp_to[i]:
                        year_total += 1
                        break
            print("owner side done")
            temp_from = []
            temp_to = []
            select_query = "SELECT j.jid, j.date_from, j.date_to from volvoce.volvoce_joblist j INNER JOIN volvoce.volvoce_operatorjob oj ON j.jid=oj.jid WHERE oj.email=\'%s\';" % (
                str(email))
            cursor.execute(select_query)
            if cursor.rowcount == 0:
                print("no operator job")
                json_obj = {'result': 'false'}
                return JsonResponse(json_obj)
            for row in cursor:
                temp_from.append(row[1])
                temp_to.append(row[2])
            for i in range(len(temp_from)):
                temp_from[i] = datetime.date(int(temp_from[i][0:4]), int(temp_from[i][5:7]), int(temp_from[i][8:10]))
                temp_to[i] = datetime.date(int(temp_to[i][0:4]), int(temp_to[i][5:7]), int(temp_to[i][8:10]))
            for i in range(len(temp_from)):
                if temp_from[i] < today <= temp_to[i]:
                    today_job += 1
                for j in range(7):
                    if temp_from[i] < (today - datetime.timedelta(days=j)) <= temp_to[i]:
                        week_job += 1
                        break
                for j in range(30):
                    if temp_from[i] < (today - datetime.timedelta(days=j)) <= temp_to[i]:
                        month_job += 1
                        break
                for j in range(365):
                    if temp_from[i] < (today - datetime.timedelta(days=j)) <= temp_to[i]:
                        year_job += 1
                        break
            print("operator side okay")
        owner = [today_total, week_total, month_total, year_total]
        operator = [today_job, week_job, month_job, year_job]
        json_obj = {
            'owner': owner,
            'operator': operator
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {'result': 'false'}
        return JsonResponse(json_obj)


def deleteOperator(request):
    email = request.GET['email']
    access_token = request.GET['access_token']
    print(access_token)
    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
        operator = OperatorList.objects.get(ownerEmail=owner_email, operatorEmail=email)
        operator.is_delete = 1
        operator.save()
        json_obj = {'result': 'true'}
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {'result': 'false'}
        return JsonResponse(json_obj)


# try:
# 	with connection.cursor() as cursor:
# 		delete_query = "DELETE FROM volvoce.volvoce_operatorlist WHERE operatorEmail = \'%s\' AND ownerEmail = (SELECT email from volvoce.volvoce_user where access_token=\'%s\')" % (email, access_token,)
# 		cursor.execute(delete_query)
# 		vehicles = OperatorVehicle.objects.filter(opEmail=email)
# 		for opvehicle in vehicles:
# 			opvehicle.delete()
# 		json_obj = {'result': 'true'}
# 		print (json_obj)
# 		return JsonResponse(json_obj)
# except Exception as e:
# 	json_obj = {'result' : 'false'}
# 	print (json_obj)
# 	print (e)
# 	return JsonResponse(json_obj)

# def addMaint(request):
#     email = request.GET['email']
#     sno = request.GET['sno']
#     vtype = request.GET['vtype']
#     datefrom = request.GET['datefrom']
#     ddatefrom = datetime.strptime(datefrom,'%Y-%m-%dT%H:%M:%SZ')
#     dateto = request.GET['dateto']
#     ddateto = datetime.strptime(dateto,'%Y-%m-%dT%H:%M:%SZ')
#     loc = request.GET['loc']
#     desc = request.GET['desc']
#     maint = Maintenance.objects.create(serial_no=sno,email = email,vtype=vtype,date_from=ddatefrom,date_to=ddateto,location=loc,desc=desc)
#     maint.save()
#     d = {}
#     d['flag'] = 1
#     return JsonResponse(d)

def updownMaint(request):
    email = request.GET['email']
    sno = request.GET['sno']
    vtype = request.GET['vtype']
    response = {}
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT count(*) FROM volvoce.volvoce_maintenance WHERE email = %s and serial_no = %s and vtype = %s and date_to > NOW()",
            [email, sno, vtype])
        res = dictfetchall(cursor)
        response['upcomming'] = res[0]['count(*)']
        cursor.execute(
            "SELECT count(*) FROM volvoce.volvoce_maintenance WHERE email = %s and serial_no = %s and vtype = %s and date_to < NOW()",
            [email, sno, vtype])
        res = dictfetchall(cursor)
        response['history'] = res[0]['count(*)']
        cursor.execute(
            "SELECT date_to,datediff(date_to,NOW()) as delta,location FROM volvoce.volvoce_maintenance WHERE email = %s and serial_no = %s and vtype = %s and date_to < NOW() order by delta desc LIMIT 1",
            [email, sno, vtype])
        res = dictfetchall(cursor)
        try:
            response['lastservice'] = res[0]['date_to'].strftime('%d-%m-%Y %H:%M')
            response['lastserviceLoc'] = res[0]['location']
        except:
            response['lastservice'] = 'Nil'
            response['lastserviceLoc'] = 'Nil'
        cursor.execute(
            "SELECT date_from,datediff(date_from,NOW()) as delta,location FROM volvoce.volvoce_maintenance WHERE email = %s and serial_no = %s and vtype = %s and date_to > NOW() order by delta asc LIMIT 1",
            [email, sno, vtype])
        res = dictfetchall(cursor)
        try:
            response['nextservice'] = res[0]['date_from'].strftime('%d-%m-%Y %H:%M')
            response['nextserviceLoc'] = res[0]['location']
        except:
            response['nextservice'] = 'Nil'
            response['nextserviceLoc'] = 'Nil'
        cursor.close()
    return JsonResponse(response)


def getMaintRec(request):
    email = request.GET['email']
    sno = request.GET['sno']
    vtype = request.GET['vtype']
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM volvoce.volvoce_maintenance WHERE email = %s and serial_no = %s and vtype=%s",
                       [email, sno, vtype])
        res = dictfetchall(cursor)
        Mid = [s['id'] for s in res]
        datefrom = [s['date_from'].strftime('%d-%m-%Y %H:%M') for s in res]
        dateto = [s['date_to'].strftime('%d-%m-%Y %H:%M') for s in res]
        location = [s['location'] for s in res]
        desc = [s['desc'] for s in res]
        JsonObj = {
            "mid": Mid,
            "datefrom": datefrom,
            "dateto": dateto,
            "loc": location,
            "desc": desc
        }
        cursor.close()
        return JsonResponse(JsonObj)


def delMaint(request):
    MId = request.GET['Mid']
    with connection.cursor() as cursor:
        cursor.execute("DELETE FROM volvoce.volvoce_maintenance WHERE id = %s", [MId])
        res = cursor.fetchone()
        cursor.close()
        d = {}
        d['flag'] = 1
        return JsonResponse(d)


def getMaintRecCal(request):
    email = request.GET['email']
    sno = request.GET['sno']
    vtype = request.GET['vtype']
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM volvoce.volvoce_maintenance WHERE email = %s and serial_no = %s and vtype=%s",
                       [email, sno, vtype])
        res = dictfetchall(cursor)
        Mid = [s['id'] for s in res]
        datefrom = [s['date_from'].strftime('%Y-%m-%dT%H:%M:00') for s in res]
        dateto = [s['date_to'].strftime('%Y-%m-%dT%H:%M:00') for s in res]
        location = [s['location'] for s in res]
        desc = [s['desc'] for s in res]
        JsonObj = {
            "mid": Mid,
            "datefrom": datefrom,
            "dateto": dateto,
            "loc": location,
            "desc": desc
        }
        cursor.close()
        print(JsonObj)
        return JsonResponse(JsonObj)


def GetOperatorList(request):
    email = request.GET['email']
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT u.email,u.name FROM volvoce.volvoce_user as usr,volvoce.volvoce_operatorlist as lk INNER JOIN volvoce_user as u on u.email = lk.operatorEmail WHERE usr.email = lk.ownerEmail AND usr.email = %s",
            [email])
        res = dictfetchall(cursor)
        try:
            opemail = [r['email'] for r in res]
            opname = [r['name'] for r in res]
            JsonObj = {
                "opemail": opemail,
                "opname": opname
            }
        except:
            JsonObj = {
                "opemail": 'Nil',
                "opname": 'Nil'
            }
        cursor.close()
        print(JsonObj)
        return JsonResponse(JsonObj)


def removeMaintInternal(email, sno, vtype):
    with connection.cursor() as cursor:
        cursor.execute(
            "DELETE FROM volvoce.volvoce_maintenance WHERE volvoce_maintenance.email=%s and volvoce_maintenance.serial_no=%s and volvoce_maintenance.vtype=%s",
            [email, sno, vtype])
        res = cursor.fetchone()
        cursor.close()


def kakaoshare(request):
    kakaoshare = "	<!DOCTYPE html> \
	<html> \
	<head> \
	<meta charset=\"utf-8\"/> \
	<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/>\
	<meta name=\"viewport\" content=\"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width\"/>\
	<title>KakaoLink v2 Demo(Default / Feed) - Kakao JavaScript SDK</title>\
	<script src=\"//developers.kakao.com/sdk/js/kakao.min.js\"></script>\
	\
	</head>\
	<body>\
	Press button below to invite your friends<br> \
	<a id=\"kakao-link-btn\" href=\"javascript:;\">\
	<img src=\"//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png\" onload=\"script();\"/>\
	</a>\
	<script type='text/javascript'>\
	  //<![CDATA[\
	    // // 사용할 앱의 JavaScript 키를 설정해 주세요.\n\
	    Kakao.init('a56b1bf92c98ccb6d5b5674d44a838be');\
	    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.\n\
	    Kakao.Link.createDefaultButton({\
	      container: '#kakao-link-btn',\
	      objectType: 'feed',\
	      content: {\
	        title: 'Invite to VolvoCE app',\
	        description: 'Click on the following link to download the app',\
	        imageUrl: '../../assets/imgs/VolvoLogo.png',\
	        link: {\
	          mobileWebUrl: 'https://play.google.com/store/apps/details?id=com.facebook.katana',\
	          webUrl: 'https://play.google.com/store/apps/details?id=com.facebook.katana'\
	        }\
	      },\
	      buttons: [\
	        {\
	          title: 'Link to Google Play',\
	          link: {\
	            mobileWebUrl: 'https://play.google.com/store/apps/details?id=com.facebook.katana',\
	            webUrl: 'https://play.google.com/store/apps/details?id=com.facebook.katana'\
	          }\
	        }\
	      ]\
	    });\
	  //]]>\
	</script>\
	</body>\
	</html>\
	"
    print("kakaoshare done")
    return HttpResponse(kakaoshare)


def retrieveVehPurchaseDate(request):
    serial_no = request.GET['serial_no']
    access_token = request.GET['access_token']
    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        return JsonResponse(json_obj)
    vehicle = VehicleList.objects.get(serial_no=serial_no)
    purchase_date = vehicle.purchase_date
    json_obj = {
        'purchase_date': purchase_date
    }
    return JsonResponse(json_obj)


def retrieveVehMachineHour(request):
    serial_no = request.GET['serial_no']
    access_token = request.GET['access_token']
    try:
        owner = User.objects.get(access_token=access_token)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        return JsonResponse(json_obj)
    try:
        log = Log.objects.get(serial_no=serial_no)
        machine_hour = log.machine_hour
        json_obj = {
            'machine_hour': machine_hour
        }
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'machine_hour': '0'
        }
        return JsonResponse(json_obj)


def retrieveVehicleSchedule(request):
    serial_no = request.GET['serial_no']
    access_token = request.GET['access_token']
    owner = User.objects.get(access_token=access_token)
    owner_email = owner.email
    today = timezone.now()
    job_desc = []
    date_from = []
    date_to = []
    jid = []
    try:
        owner = User.objects.get(access_token=access_token)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        maintenance_records = Maintenance.objects.filter(serial_no=serial_no).order_by('date_from')
        for records in maintenance_records:
            job_desc.append('Maintenance')
            date_from.append(records.date_from)
            date_to.append(records.date_to)
        operator_vehicle = OperatorJob.objects.filter(vehicle_serial_no=serial_no)
        for records in operator_vehicle:
            jid.append(records.JID)
        jobs = JobList.objects.filter(JID__in=jid)
        for records in jobs:
            job_desc.append(records.description)
            date_from.append(records.date_from)
            date_to.append(records.date_to)
        json_obj = {
            'desc': job_desc,
            'date_from': date_from,
            'date_to': date_to
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'desc': 'N/A',
            'date_from': 'N/A',
            'date_to': 'N/A'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveVehicleUtil(request):
    getTotalDays_list =[]
    getMonth_list=[]
    getYear_list =[]
    serial_no = request.GET['serial_no']
    # model_no = request.GET['model_no']
    access_token = request.GET['access_token']
    cur_date = datetime.datetime.now(tz=timezone.utc)
    cur_month = cur_date.month
    cur_year = cur_date.year

    owner_email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        with connection.cursor() as cursor:
            first_query = "SELECT job_month,job_year, COUNT(*) as totalWorkDays FROM volvoce.volvoce_fulljobdetails WHERE owner=\'%s\' AND vehicle_serial_no = \'%s\' AND job_year =\'%s\' GROUP BY job_month,job_year ORDER BY Job_Year ASC, Job_month ASC" % (owner_email,serial_no,cur_year)
            cursor.execute(first_query)
            res = dictfetchall(cursor)
            totalWorkDays = [r['totalWorkDays'] for r in res]
            the_month=[r['job_month'] for r in res]
            the_year=[r['job_year'] for r in res]
            getTotalDays_list.append(totalWorkDays)
            getMonth_list.append(the_month)
            getYear_list.append(the_year)
            totalDay_ChartList = getTotalDays_list[0]
            month_ChartList = getMonth_list[0]
            year_ChartList = getYear_list[0]

        months_ToUse =[]
        months = [1,2,3,4,5,6,7,8,9,10,11,12]
        chartData =[]

        for i in range (cur_month-4,cur_month+3):
                months_ToUse.append(months[i])
        # print("Value:",months_ToUse)

        for x in months_ToUse:
            if x in month_ChartList:
                ofIndex = month_ChartList.index(x)
                chartData.append(totalDay_ChartList[ofIndex])
            else:
                chartData.append(0)
        # print("Final data to return:", chartData)
        empt_list =[]
        maxdays =[]
        for i in range (len(months_ToUse)):
            empt_list.append(i)
            maxdays.append(calendar.monthrange(cur_year,months_ToUse[i])[1])
        percentMonth = []
        for i in range(len(chartData)):
            dataPercent = (chartData[i]/ maxdays[i]) * 100
            percentMonth.append(round(dataPercent))

        json_obj = {
            'chartData': percentMonth,
            # 'chartData': chartData,
            # 'datapercent': percentMonth
            # 'currentMonth': cur_month,
            # 'maxDays': maxdays,
            # 'month_touse': months_ToUse,
            # 'vehicle_totalWorkDays': totalDay_ChartList,
            # 'vehicle_month': month_ChartList,
            # 'vehicle_year': year_ChartList,

        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'vehicle_totalWorkDays': 'N/A',
            'vehicle_month': 'N/A',
            'vehicle_year': 'N/A',
            'chartData': 'N/A'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveMaintenance(request):
    access_token = request.GET['access_token']
    print(access_token)
    serial_no = request.GET['serial_no']
    email = ''
    date_from = []
    date_to = []
    location = []
    desc = []
    today = datetime.datetime.now()
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        maintenance_records = Maintenance.objects.filter(email=email, serial_no=serial_no,
                                                         date_to__gt=datetime.date(today.year, today.month,
                                                                                   today.day)).order_by('date_from')
        for records in maintenance_records:
            date_from.append(records.date_from)
            date_to.append(records.date_to)
            location.append(records.location)
            desc.append(records.desc)
        json_obj = {
            'date_from': date_from,
            'date_to': date_to,
            'location': location,
            'desc': desc
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def deleteMaintenance(request):
    access_token = request.GET['access_token']
    print(access_token)
    serial_no = request.GET['serial_no']
    date_from = request.GET['date_from']
    date_to = request.GET['date_to']
    location = request.GET['location']
    desc = request.GET['desc']
    email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        maintenance_record = Maintenance.objects.get(serial_no=serial_no, email=email, date_from=date_from,
                                                     date_to=date_to, location=location, desc=desc)
        maintenance_record.delete()
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def deleteVehicle(request):
    access_token = request.GET['access_token']
    print(access_token)
    serial_no = request.GET['serial_no']
    model_no = request.GET['model_no']
    email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        vehicle = VehicleList.objects.get(email=email, serial_no=serial_no, model_no=model_no)
        vehicle.is_delete = 1
        vehicle.save()
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrievePastJobs(request):
    access_token = request.GET['access_token']
    print(access_token)
    jid = []
    title = []
    description = []
    date_from = []
    date_to = []
    location = []
    payout = []
    email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        history_jobs = JobList.objects.filter(email=email, completed='1')
        for job in history_jobs:
            jid.append(job.JID)
            title.append(job.title)
            description.append(job.description)
            date_from.append(job.date_from)
            date_to.append(job.date_to)
            location.append(job.location)
            payout.append(job.payout)
        json_obj = {
            'jid': jid,
            'title': title,
            'description': description,
            'date_from': date_from,
            'date_to': date_to,
            'location': location,
            'payout': payout
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveOngoingJobs(request):
    access_token = request.GET['access_token']
    print(access_token)
    jid = []
    title = []
    description = []
    date_from = []
    date_to = []
    location = []
    payout = []
    email = ''
    today = timezone.now()
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        history_jobs = JobList.objects.filter(email=email, completed='0',
                                              date_from__lte=datetime.date(today.year, today.month,
                                                                           today.day)).order_by('date_from')
        for job in history_jobs:
            jid.append(job.JID)
            title.append(job.title)
            description.append(job.description)
            date_from.append(job.date_from)
            date_to.append(job.date_to)
            location.append(job.location)
            payout.append(job.payout)
        json_obj = {
            'jid': jid,
            'title': title,
            'description': description,
            'date_from': date_from,
            'date_to': date_to,
            'location': location,
            'payout': payout
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveUpcomingJobs(request):
    access_token = request.GET['access_token']
    print(access_token)
    jid = []
    title = []
    description = []
    date_from = []
    date_to = []
    location = []
    payout = []
    email = ''
    today = timezone.now()
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        history_jobs = JobList.objects.filter(email=email, completed='0',
                                              date_from__gt=datetime.date(today.year, today.month, today.day)).order_by(
            'date_from')
        for job in history_jobs:
            jid.append(job.JID)
            title.append(job.title)
            description.append(job.description)
            date_from.append(job.date_from)
            date_to.append(job.date_to)
            location.append(job.location)
            payout.append(job.payout)
        json_obj = {
            'jid': jid,
            'title': title,
            'description': description,
            'date_from': date_from,
            'date_to': date_to,
            'location': location,
            'payout': payout
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)




def addJob(request):
    access_token = request.GET['access_token']
    payout = request.GET['payout']
    date_from = request.GET['date_from']
    date_to = request.GET['date_to']
    location = request.GET['location']
    description = request.GET['description']
    title = request.GET['title']
    email = ''
    jid = '0'
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
        all_jobs = JobList.objects.all()
        for job in all_jobs:
            if int(job.JID) >= int(jid):
                jid = str(int(job.JID) + 1)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        job = JobList.objects.create(email=email, JID=jid, payout=payout, date_from=date_from, date_to=date_to,
                                     location=location, description=description, title=title, completed='0')
        job.save()
        json_obj = {
            'result': 'true',
            'jid': jid
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)

def addJobDetails(request):
# def testing(jid,email,date_from,date_to):
#     owner_email = request.GET['email']
    access_token = request.GET['access_token']
    date_from = request.GET['date_from']
    date_to = request.GET['date_to']
    jid = request.GET['jid']
    operator_names = request.GET['operator_names'].split(",")
    operator_vehicles = request.GET['operator_vehicles'].split(",")
    model_no =''
    serial_no =''
    operator_email = ''

    owner = User.objects.get(access_token=access_token)
    owner_email = owner.email

    date_time_obj = datetime.datetime.strptime(date_from, '%Y-%m-%d').date()
    start_day = date_time_obj.day
    start_month = date_time_obj.month
    start_year = date_time_obj.year

    date_time_obj2 = datetime.datetime.strptime(date_to, '%Y-%m-%d').date()
    end_day = date_time_obj2.day
    end_month = date_time_obj2.month
    end_year = date_time_obj2.year

    for i in range(len(operator_names)):
            serial_no = operator_vehicles[i].split('==**8**-')[0]
            model_no = operator_vehicles[i].split('==**8**-')[1]
            operator_email = operator_names[i]

    ### Variables that will be extracted from Date_From and Date_To ###
    # start_day = 3
    # start_month = 3
    # start_year = 2019
    # end_day = 5
    # end_month = 3
    # end_year = 2020

    data_tmp = 0
    try:
        with connection.cursor() as cursor:
            for year_pointer in range(start_year, end_year+1):
                if (year_pointer == end_year):
                    for month_pointer in range (start_month, end_month+1):
                        if (month_pointer == end_month):
                            while(start_day != end_day+1):
                                select_query = "SELECT (1) FROM volvoce.volvoce_fulljobdetails where Job_Date = \'%s\' AND Job_Month =\'%s\' AND Job_Year = \'%s\' AND owner = \'%s\' AND jid = \'%s\' AND operator = \'%s\'AND vehicle_serial_no = \'%s\'AND vehicle_model_no = \'%s\' LIMIT 1" % (start_day, month_pointer, year_pointer,owner_email,jid,operator_email,serial_no,model_no)
                                data_tmp = cursor.execute(select_query)
                                if (data_tmp == 0):
                                    insert_query = "INSERT INTO volvoce.volvoce_fulljobdetails (Job_Date, Job_Month, Job_Year ,owner,jid,operator,vehicle_serial_no,vehicle_model_no) VALUES (\'%s\', \'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\');" % (start_day, month_pointer, year_pointer,owner_email,jid,operator_email,serial_no,model_no)
                                    cursor.execute(insert_query)
                                start_day +=1
                        elif (month_pointer != end_month):
                            while (start_day != calendar.monthrange(year_pointer,month_pointer)[1]+1):
                                select_query = "SELECT (1) FROM volvoce.volvoce_fulljobdetails where Job_Date = \'%s\' AND Job_Month =\'%s\' AND Job_Year = \'%s\' AND owner = \'%s\' AND jid = \'%s\' AND operator = \'%s\'AND vehicle_serial_no = \'%s\'AND vehicle_model_no = \'%s\' LIMIT 1" % (start_day, month_pointer, year_pointer,owner_email,jid,operator_email,serial_no,model_no)
                                data_tmp = cursor.execute(select_query)
                                if (data_tmp == 0):
                                    insert_query = "INSERT INTO volvoce.volvoce_fulljobdetails (Job_Date, Job_Month, Job_Year ,owner,jid,operator,vehicle_serial_no,vehicle_model_no) VALUES (\'%s\', \'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\');" % (start_day, month_pointer, year_pointer,owner_email,jid,operator_email,serial_no,model_no)
                                    cursor.execute(insert_query)
                                # print ("Insert data")
                                start_day +=1
                            start_day = 1
                elif (year_pointer != end_year):
                    for month_pointer in range (start_month, 12+1):
                        if (month_pointer != 12+1):
                            while (start_day != calendar.monthrange(year_pointer,month_pointer)[1]+1):
                                select_query = "SELECT (1) FROM volvoce.volvoce_fulljobdetails where Job_Date = \'%s\' AND Job_Month =\'%s\' AND Job_Year = \'%s\' AND owner = \'%s\' AND jid = \'%s\' AND operator = \'%s\'AND vehicle_serial_no = \'%s\'AND vehicle_model_no = \'%s\' LIMIT 1" % (start_day, month_pointer, year_pointer,owner_email,jid,operator_email,serial_no,model_no)
                                data_tmp = cursor.execute(select_query)
                                if (data_tmp == 0):
                                    insert_query = "INSERT INTO volvoce.volvoce_fulljobdetails (Job_Date, Job_Month, Job_Year ,owner,jid,operator,vehicle_serial_no,vehicle_model_no) VALUES (\'%s\', \'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\',\'%s\');" % (start_day, month_pointer, year_pointer,owner_email,jid,operator_email,serial_no,model_no)
                                    cursor.execute(insert_query)
                                # print ("Insert data")
                                start_day +=1
                            start_day = 1
                        start_month =1

            json_obj = {
            'Job_Date': 'Pass',
            'Job_Month': 'Pass',
            'Job_Year': 'Pass',
            'data_tmp': data_tmp,
            'owner_email': owner_email,
            'JID': jid
            }
        return JsonResponse(json_obj)
    except Exception as e:
        json_obj = {
            'Job_Date': 'Failed',
            'Job_Month': 'Failed',
            'Job_Year': 'Failed'
            }
        return JsonResponse(json_obj)

def updateJob(request):
    access_token = request.GET['access_token']
    payout = request.GET['payout']
    date_from = request.GET['date_from']
    date_to = request.GET['date_to']
    location = request.GET['location']
    description = request.GET['description']
    title = request.GET['title']
    email = ''
    jid = request.GET['jid']
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
        job = JobList.objects.get(JID=jid)
        job.payout = payout
        job.date_from = date_from
        job.date_to = date_to
        job.location = location
        job.description = description
        job.title = title
        job.save()
        json_obj = {
            'result': 'true',
            'jid': jid
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveJobDetails(request):
    access_token = request.GET['access_token']
    print(access_token)
    jid = request.GET['jid']
    email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        job = JobList.objects.get(JID=jid)
        json_obj = {
            'jid': job.JID,
            'payout': job.payout,
            'date_from': job.date_from,
            'date_to': job.date_to,
            'location': job.location,
            'description': job.description,
            'title': job.title,
            'completed': job.completed
        }
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def updateJobComplete(request):
    access_token = request.GET['access_token']
    jid = request.GET['jid']
    print(access_token)
    email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        job = JobList.objects.get(JID=jid)
        job.completed = '1'
        job.save()
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def updateOwnerRole(request):
    access_token = request.GET['access_token']
    role = request.GET['role']
    try:
        user = User.objects.get(access_token=access_token)
        if role == "Owner":
            user.role = '1'
        else:
            user.role = '0'
        user.save()
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def checkExistingUser(request):
    email = request.GET['email']
    try:
        user = User.objects.filter(email=email)
        for row in user:
            if row.email == email:
                json_obj = {
                    'result': 'false'
                }
                print(json_obj)
                return JsonResponse(json_obj)
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def addUser(request):
    email = request.GET['email']
    access_token = request.GET['access_token']
    name = request.GET['name']
    profile_url = request.GET['profile_url']
    role = request.GET['role']
    if role == "Owner":
        role = 1
    else:
        role = 0
    try:
        user = User.objects.create(email=email, name=name, role=role, profile_image_url=profile_url,
                                   access_token=access_token)
        user.save()
        json_obj = {'result': 'true'}
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def getOperatorSchedule(request):
    access_token = request.GET['access_token']
    email = request.GET['email']
    job_desc = []
    job_datefrom = []
    job_dateto = []
    jids = []
    try:
        owner = User.objects.get(access_token=access_token)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        operator = OperatorJob.objects.filter(email=email)
        for job in operator:
            jids.append(job.JID)
        for jid in jids:
            try:
                job_details = JobList.objects.get(JID=jid)
                job_desc.append(job_details.description)
                job_datefrom.append(job_details.date_from)
                job_dateto.append(job_details.date_to)
            except:
                print("something goes wrong")
        json_obj = {
            'job_desc': job_desc,
            'job_datefrom': job_datefrom,
            'job_dateto': job_dateto
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def testUpload(request):
    print("testing upload")
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    # photo = SimpleUploadedFile(name="test.jpg", content=open(r'C:\Users\qingt\Documents\Korean App\django\django_koreanapp\static\vehicles\truck.png', 'rb').read(), content_type='image/jpeg')
    # photo = Base64ImageField()
    # with open(r'C:\Users\qingt\Documents\Korean App\django\django_koreanapp\static\vehicles\truck.png', 'rb') as file:
    # 	photo = file.read()
    # photo = base64.b64decode(photo)
    id = '1'
    email = 'qingtiandalei@hotmail.com'
    serial_no = 'serial'
    JID = '26'
    timestamp = "2018-10-10 22:22:22"
    report_type = "type"
    # image = photo
    desc = 'desc'
    location = 'volvo east asia'
    # report = Reporting.objects.create(id=id, email=email, serial_no=serial_no, JID=JID, timestamp=timestamp, report_type=report_type, image=image, desc=desc, location=location)
    report = Reporting.objects.create(id=id, email=email, serial_no=serial_no, JID=JID, timestamp=timestamp,
                                      report_type=report_type, desc=desc, location=location)
    report.image = r'C:\Users\qingt\Documents\Korean App\django\django_koreanapp\static\vehicles\truck.png'
    # report.image = ImageFile(open(r'C:\Users\qingt\Documents\Korean App\django\django_koreanapp\static\vehicles\truck.png', 'rb'))
    print(report.image)
    report.save()
    return JsonResponse({})


def encodeImage(request):
    print("encoding")
    with open(r'C:\Users\qingt\Documents\Korean App\django\django_koreanapp\static\vehicles\truck.png', 'rb') as file:
        # print (base64.b64encode(file.read()))
        image = base64.b64encode(file.read())
    # print (image)
    filename = "testing.png"
    imagede = base64.b64decode(image)
    print(image)
    with open(filename, 'wb') as f:
        f.write(imagede)
    return JsonResponse({})


def getOperatorNames(request):
    access_token = request.GET['access_token']
    date_from = request.GET['date_from']
    date_to = request.GET['date_to']
    email = ''
    operatorsName = []
    operatorsEmail = []
    availability = []
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
        operators = OperatorList.objects.filter(ownerEmail=email)
        for operator in operators:
            user = User.objects.get(email=operator.operatorEmail)
            operatorsName.append(user.name)
            operatorsEmail.append(user.email)
            availability.append('Free')
            user_job = OperatorJob.objects.filter(
                email=user.email)  # date_from__lte= date_to, date_to_gte= date_from).count()
            for i in user_job:
                job_date = JobList.objects.get(JID=i.JID)
                Range = namedtuple('Range', ['start', 'end'])
                r1 = Range(start=datetime.datetime.strptime(date_from, '%Y-%m-%d').date(),
                           end=datetime.datetime.strptime(date_to, '%Y-%m-%d').date())
                r2 = Range(start=job_date.date_from.date(), end=job_date.date_to.date())
                latest_start = max(r1.start, r2.start)
                earliest_end = min(r1.end, r2.end)
                delta = (earliest_end - latest_start).days + 1
                overlap = max(0, delta)
                if overlap > 0:
                    availability[-1] = 'Busy'
                    break
        json_obj = {
            'operators': operatorsName,
            'emails': operatorsEmail,
            'availability': availability
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


# def getOperatorVehicles(request):
#     access_token = request.GET['access_token']
#     operator = request.GET['email']
#     vehicleslist = []
#     try:
#         owner = User.objects.get(access_token=access_token)
#         vehicles = OperatorVehicle.objects.filter(opEmail=operator)
#         for vehicle in vehicles:
#             typee = vehicle.vtype
#             owner_vehicles = VehicleList.objects.filter(vehicle_type=typee)
#             for i in owner_vehicles:
#                 serial = i.serial_no
#                 vehicleslist.append(str(serial)+' (' +str(typee) + ')')
#         json_obj = {
#             'vehicles' : vehicleslist
#         }
#         return JsonResponse(json_obj)
#     except Exception as e:
#         print (e)
#         json_obj = {
#             'result' : 'false'
#         }
#         return JsonResponse(json_obj)

def insertOperatorJob(request):
    access_token = request.GET['access_token']
    print(access_token)
    jid = request.GET['jid']
    operator_names = request.GET['operator_names'].split(",")
    operator_vehicles = request.GET['operator_vehicles'].split(",")
    email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        for i in range(len(operator_names)):
            print('abc')
            serial_no = operator_vehicles[i].split('==**8**-')[0]
            # serial_no = temp.split('==**,**-')[0]
            print('def')
            print(operator_vehicles[i])
            model_no = operator_vehicles[i].split('==**8**-')[1]
            op_name = operator_names[i]
            operatorjob = OperatorJob.objects.create(JID=jid, email=operator_names[i], vehicle_serial_no=serial_no,
                                                     vehicle_model_no=model_no, pay_received='0')
            # print("Catch this",op_name, "and this:", serial_no,"and this:", model_no)
            operatorjob.save()
        print("Catch this",op_name, "and this:", serial_no,"and this:", model_no)
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def updateOperatorJob(request):
    access_token = request.GET['access_token']
    print(access_token)
    jid = request.GET['jid']
    operator_names = request.GET['operator_names'].split(",")
    operator_vehicles = request.GET['operator_vehicles'].split(",")
    email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
        to_be_updated = OperatorJob.objects.filter(JID=jid).delete()
        for i in range(len(operator_names)):
            temp = operator_vehicles[i].split('(')[0]
            serial_no = temp.split('==**8**-')[0]
            model_no = temp.split('==**8**-')[1]
            operatorjob = OperatorJob.objects.create(JID=jid, email=operator_names[i], vehicle_serial_no=serial_no,
                                                     vehicle_model_no=model_no, pay_received='0')
            operatorjob.save()
        json_obj = {
            'result': 'true',
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


# def getVehicleStatus(request):
#     email = request.GET['email']
#     date = request.GET['datetime']
#     print (date)
#     if date == '':
#     	date = "day " + str(datetime.datetime.today().strftime('%b %d %Y'))
#     date = date[4:15]
#     date= datetime.datetime.strptime(date, '%b %d %Y')
#     print (date)
#     select_query = "SELECT vl.vehicle_type, v.ImgUrl, vl.serial_no FROM volvoce.volvoce_vehiclelist vl INNER JOIN volvoce.volvoce_vehicle v ON vl.vehicle_type = v.Vtype WHERE vl.email = \'%s\' and vl.is_delete=\'0\'" % (str(email))
#     vehicle_type = []
#     print (email)
#     ImgUrl = []
#     count = []
#     serial_no = []
#     with connection.cursor() as cursor:
#         cursor.execute(select_query)
#         for row in cursor:
#             if row[0] not in vehicle_type:
#                 vehicle_type.append(row[0])
#                 ImgUrl.append(row[1])
#                 count.append(0)
#             serial_no.append(row[2])
#             if row[0] in vehicle_type:
#                 index = vehicle_type.index(row[0])
#                 count[index] += 1
#         cursor.close()
#     with connection.cursor() as cursor:
#         select_query = "SELECT vl.vehicle_type, m.date_from, m.date_to from volvoce.volvoce_vehiclelist vl INNER JOIN volvoce.volvoce_maintenance m ON vl.serial_no=m.serial_no WHERE vl.email = \'%s\'  and vl.is_delete=\'0\'" % (str(email))
#         cursor.execute(select_query)
#         today = datetime.datetime.today().strftime('%Y-%m-%d')
#         compare_today = datetime.datetime.strptime(today, '%Y-%m-%d')
#         for row in cursor:
#             main_from = datetime.datetime.strptime(str(row[1]), '%Y-%m-%d')
#             main_to = datetime.datetime.strptime(str(row[2]), '%Y-%m-%d')
#             if ((main_from <= date <= main_to)==True):
#                 if (row[0] in vehicle_type):
#                     temp = vehicle_type.index(row[0])
#                     count[temp] -= 1
#             else:
#                 continue
#     with connection.cursor() as cursor:
#         # select_query = "SELECT vl.vehicle_type, jl.date_from, jl.date_to from volvoce.volvoce_vehiclelist vl INNER JOIN volvoce.volvoce_operatorjob oj ON vl.serial_no=oj.vehicle_serial_no and vl.model_no=oj.vehicle_model_no INNER JOIN volvoce.volvoce_joblist jl on jl.email = vl.email WHERE vl.email = \'%s\' and vl.is_delete=\'0\'" % (str(email))
#         # cursor.execute(select_query)
#         # today = datetime.datetime.today().strftime('%Y-%m-%d')
#         # compare_today = datetime.datetime.strptime(today, '%Y-%m-%d')
#         # try:
#         #     for row in cursor:
#         #         job_from = datetime.datetime.strptime(str(row[1]), '%Y-%m-%d')
#         #         job_to = datetime.datetime.strptime(str(row[2]), '%Y-%m-%d')
#         #         if ((job_from <= date <= job_to)==True):
#         #             if (row[0] in vehicle_type):
#         #                 temp = vehicle_type.index(row[0])
#         #                 count[temp] -= 1
#         #         else:
#         #             continue
#         # except Exception as e:
#         #     print (e)
#         print (count)
#         select_query = "SELECT vl.vehicle_type, count(vl.vehicle_type), jl.date_from, jl.date_to from volvoce.volvoce_vehiclelist vl INNER JOIN volvoce.volvoce_operatorjob oj ON vl.serial_no=oj.vehicle_serial_no and vl.model_no=oj.vehicle_model_no INNER JOIN volvoce.volvoce_joblist jl on jl.email = vl.email WHERE vl.email = \'%s\' and vl.is_delete=\'0\' and (jl.date_from <= \'%s\' and jl.date_to >= \'%s\') group by vl.vehicle_type, jl.date_from, jl.date_to" % (str(email), str(date), str(date))
#         print (select_query)
#         try:
#             cursor.execute(select_query)
#             for row in cursor:
#                 if (row[0] in vehicle_type):
#                     temp = vehicle_type.index(row[0])
#                     count[temp] -= row[1]
#                 else:
#                     continue
#         except Exception as e:
#             print (e)
#     json_obj = {
#         'vehicle_type'  : vehicle_type,
#         'vehicle_count' : count,
#         'ImgUrl'        : ImgUrl
#     }
#     print (json_obj)
#     return JsonResponse(json_obj)

def getVehicleStatus(request):
    email = request.GET['email']
    date = request.GET['datetime']
    owner_vehicles_types = {}
    if date == '':
        date = "day " + str(datetime.datetime.today().strftime('%b %d %Y'))
    date = date[4:15]
    date = datetime.datetime.strptime(date, '%b %d %Y')
    print(date)
    try:
        owner_vehicles = VehicleList.objects.filter(email=email, is_delete=0)
        for vehicles in owner_vehicles:
            if vehicles.vehicle_type not in owner_vehicles_types:
                owner_vehicles_types[vehicles.vehicle_type] = 1
            else:
                owner_vehicles_types[vehicles.vehicle_type] += 1
    except:
        return JsonResponse({})
    try:
        maintenance_record = Maintenance.objects.filter(date_from__lte=date, date_to__gte=date, email=email)
        for record in maintenance_record:
            vehicle_serial_no = record.serial_no
            vehicle_model_no = record.model_no
            try:
                vehicle = VehicleList.objects.get(serial_no=vehicle_serial_no, model_no=vehicle_model_no)
                vehicle_type = vehicle.vehicle_type
                owner_vehicles_types[vehicle_type] -= 1
            except Exception as e:
                continue
    except:
        print("No Maintenance records for this owner-operator")
    try:
        job_list = JobList.objects.filter(email=email, date_from__lte=date, date_to__gte=date, completed=0)
        for job in job_list:
            operator_vehicle = OperatorJob.objects.filter(JID=job.JID)
            for vehicle in operator_vehicle:
                vehicle_serial_no = vehicle.vehicle_serial_no
                vehicle_model_no = vehicle.vehicle_model_no
                vehicle = VehicleList.objects.get(serial_no=vehicle_serial_no, model_no=vehicle_model_no)
                vehicle_type = vehicle.vehicle_type
                owner_vehicles_types[vehicle_type] -= 1
    except:
        print("There is no job for this owner")
    vehicle_type = []
    vehicle_count = []
    ImgUrl = []
    try:
        for key, value in owner_vehicles_types.items():
            vehicle_type.append(key)
            vehicle_count.append(value)
            ImgUrl.append(Vehicle.objects.get(Vtype=key).ImgUrl)
    except:
        print("Empty dictionary")
    json_obj = {
        'vehicle_type': vehicle_type,
        'vehicle_count': vehicle_count,
        'ImgUrl': ImgUrl
    }
    print(json_obj)
    return JsonResponse(json_obj)


def retrieveMaintenanceUpcoming(request):
    serial_no = request.GET['serial_no']
    access_token = request.GET['access_token']
    owner = User.objects.get(access_token=access_token)
    owner_email = owner.email
    # today = timezone.now()
    today = datetime.datetime.now()
    count = 0
    location = ''
    try:
        owner = User.objects.get(access_token=access_token)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        return JsonResponse(json_obj)
    try:
        upcoming_maintenance = Maintenance.objects.filter(serial_no=serial_no,
                                                          date_to__gte=datetime.date(today.year, today.month,
                                                                                     today.day)).order_by('-date_from')
        for records in upcoming_maintenance:
            count += 1
            upcoming = records.date_from
            location = records.location
        compare = upcoming
        # compare = datetime.datetime.strptime(compare, '%Y-%m-%d')
        print(compare)
        print(today)
        if compare < today.date():
            upcoming = today.date()
        json_obj = {
            'count': count,
            'upcoming': upcoming,
            'location': location
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'count': count,
            'upcoming': 'N/A',
            'location': 'N/A'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveMaintenanceCompleted(request):
    serial_no = request.GET['serial_no']
    access_token = request.GET['access_token']
    owner = User.objects.get(access_token=access_token)
    owner_email = owner.email
    # today = timezone.now()
    today = datetime.datetime.now()
    count = 0
    try:
        owner = User.objects.get(access_token=access_token)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        return JsonResponse(json_obj)
    try:
        maintenance_records = Maintenance.objects.filter(serial_no=serial_no,
                                                         date_to__lte=datetime.date(today.year, today.month,
                                                                                    today.day)).order_by('date_to')
        for records in maintenance_records:
            count += 1
            lastservice = records.date_to
        json_obj = {
            'count': count,
            'lastservice': lastservice
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print("this is the error message")
        print(e)
        json_obj = {
            'count': 0,
            'lastservice': 'N/A'
        }
        print(json_obj)
        return JsonResponse(json_obj)


# ------- Steff added -----------------------
def retrieveOpPastJobsz(request):
    print('i am here!!!')
    access_token = request.GET['access_token']
    jid = []
    jid_out = []
    title = []
    description = []
    date_from = []
    date_to = []
    location = []
    payout = []
    email = ''
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        JIDs = OperatorJob.objects.filter(email=email)
        jid = []
        for i in JIDs:
            jid.append(i.JID)
        print('---------------------------------')
        print(jid)
        history_jobs = JobList.objects.filter(JID__in=jid, completed='1')
        for job in history_jobs:
            jid_out.append(job.JID)
            title.append(job.title)
            description.append(job.description)
            date_from.append(job.date_from)
            date_to.append(job.date_to)
            location.append(job.location)
            payout.append(job.payout)
        json_obj = {
            'jid': jid_out,
            'title': title,
            'description': description,
            'date_from': date_from,
            'date_to': date_to,
            'location': location,
            'payout': payout
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveOpOngoJobsz(request):
    access_token = request.GET['access_token']
    jid = []
    jid_out = []
    title = []
    description = []
    date_from = []
    date_to = []
    location = []
    payout = []
    email = ''
    today = timezone.now()
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        JIDs = OperatorJob.objects.filter(email=email)
        jid = []
        for i in JIDs:
            jid.append(i.JID)
        history_jobs = JobList.objects.filter(JID__in=jid, completed='0',
                                              date_from__lte=datetime.date(today.year, today.month,
                                                                           today.day)).order_by('date_from')
        for job in history_jobs:
            jid_out.append(job.JID)
            title.append(job.title)
            description.append(job.description)
            date_from.append(job.date_from)
            date_to.append(job.date_to)
            location.append(job.location)
            payout.append(job.payout)
        json_obj = {
            'jid': jid_out,
            'title': title,
            'description': description,
            'date_from': date_from,
            'date_to': date_to,
            'location': location,
            'payout': payout
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveOpUpcomJobsz(request):
    access_token = request.GET['access_token']
    jid = []
    jid_out = []
    title = []
    description = []
    date_from = []
    date_to = []
    location = []
    payout = []
    email = ''
    today = timezone.now()
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        JIDs = OperatorJob.objects.filter(email=email)
        jid = []
        for i in JIDs:
            jid.append(i.JID)
        history_jobs = JobList.objects.filter(JID__in=jid, completed='0',
                                              date_from__gte=datetime.date(today.year, today.month,
                                                                           today.day)).order_by('date_from')
        for job in history_jobs:
            jid_out.append(job.JID)
            title.append(job.title)
            description.append(job.description)
            date_from.append(job.date_from)
            date_to.append(job.date_to)
            location.append(job.location)
            payout.append(job.payout)
        json_obj = {
            'jid': jid_out,
            'title': title,
            'description': description,
            'date_from': date_from,
            'date_to': date_to,
            'location': location,
            'payout': payout
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def checkRole(request):
    print("Checking role")
    access_token = request.GET['access_token']
    try:
        user1 = User.objects.get(access_token=access_token)
        json_obj = {
            'result': user1.role
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


# --------------------------------------------

@csrf_exempt
def UpRepImage(request):
    print('------in upload method ---------')
    if request.method == "POST" and request.FILES['file']:
        save_path = os.path.join(settings.MEDIA_ROOT, 'jobReport', str(request.FILES['file'].name))
        path = default_storage.save(save_path, request.FILES['file'])
        print(default_storage.path(path))
        d = {}
        d['flag'] = 1
        return JsonResponse(d)


# http://localhost:8000/addReport?jid=2&access_token=accessop&rtype=type&imgloc=loc&Desc=descp&loc=location&faults={hi:1,bye:0}
def addReport(request):
    Jid = request.GET['jid']
    accessToken = request.GET['access_token']
    TimeStamp = datetime.datetime.now().strftime('%Y-%m-%dT%H:%M:%SZ')
    reptype = request.GET['rtype']
    imgLoc = request.GET['imgloc']
    Desc = request.GET['Desc']
    Loc = request.GET['loc']
    faults = request.GET['faults']

    op = User.objects.get(access_token=accessToken)
    op_email = op.email

    serialno = GetSnoForReport(Jid, op_email)
    modelno = GetModelForReport(Jid, op_email)

    try:
        report = Reporting.objects.create(email=op_email, serial_no=serialno, model_no=modelno, JID=Jid,
                                          timestamp=TimeStamp, report_type=reptype, image=imgLoc, desc=Desc,
                                          location=Loc, faults=faults)
        report.save()
        json_obj = {'result': 'true'}
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def GetModelForReport(JID, email):
    OpJob = OperatorJob.objects.get(JID=JID, email=email)
    return OpJob.vehicle_model_no


def GetSnoForReport(JID, email):
    OpJob = OperatorJob.objects.get(JID=JID, email=email)
    return OpJob.vehicle_serial_no


def getOTP(request):
    access_token = request.GET['access_token']
    random_token = 'abcdefghijklmnopqrstuvwxyz1234567890'
    otp = ''
    for i in range(6):
        otp += random.choice(random_token)
    print(otp)
    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
        timestamp = datetime.datetime.now()
        OTPobject = OneTimePassword.objects.create(otp=otp, timestamp=timestamp, ownerEmail=owner_email)
        OTPobject.save()
        print("OTP object saved")
        json_obj = {
            'otp': otp
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def getOperatorDetails(request):
    access_token = request.GET['access_token']
    email = request.GET['email']
    print(access_token)
    profile_image_url = ""
    user_name = ""
    vehicle_img = []
    vehicle_type = []
    try:
        with connection.cursor() as cursor:
            select_query = "SELECT u.name, u.profile_image_url from volvoce.volvoce_user u where email=\'%s\';" % (
                str(email))
            cursor.execute(select_query)
            for row in cursor:
                user_name = row[0]
                profile_image_url = row[1]
            select_query = "SELECT v.ImgURl, v.vtype FROM volvoce.volvoce_operatorvehicle ov INNER JOIN volvoce.volvoce_vehicle v ON ov.Vtype = v.vtype WHERE ov.opEmail = \'%s\';" % (
                str(email))
            cursor.execute(select_query)
            for row in cursor:
                if row[1] not in vehicle_type:
                    vehicle_type.append(row[1])
                    vehicle_img.append(row[0])
        json_obj = {
            'name': user_name,
            'profile_image_url': profile_image_url,
            'vehicle_type': vehicle_type,
            'vehicle_img': vehicle_img
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        json_obj = {'result': 'false'}
        return JsonResponse(json_obj)


def checkOTP(request):
    otp = request.GET['otp']
    try:
        one_time_password = OneTimePassword.objects.get(otp=otp)
        owner_email = one_time_password.ownerEmail
        owner_name = User.objects.get(email=owner_email).name
        json_obj = {'result': '1', 'Nick': owner_name}
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': '0',
            'Nick': ' '
        }
        print(json_obj)
        return JsonResponse(json_obj)


def OperatorLogin(request):
    access_token = request.GET['access_token']
    phone_no = request.GET['phoneno']
    otp = request.GET['otp']
    try:
        operator = User.objects.get(access_token=access_token)
        operator.phoneNumber = phone_no
        operator.save()
        if otp:
            one_time_password = OneTimePassword.objects.get(otp=otp)
            owner_email = one_time_password.ownerEmail
            connection = OperatorList.objects.create(ownerEmail=owner_email, operatorEmail=operator.email, is_delete=0)
            connection.save()
            one_time_password.delete()
        else:
            print("No OTP received, no connection linked")
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def getJobInfo(request):
    access_token = request.GET['access_token']
    jid = request.GET['jid']
    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
        job_detail = JobList.objects.get(email=owner_email, JID=jid)
        operator_job = OperatorJob.objects.filter(JID=jid)
        operators = []
        vehicles = []
        for op in operator_job:
            operators.append(User.objects.get(email=op.email).name)
            vehicles.append(
                str(VehicleList.objects.get(serial_no=op.vehicle_serial_no, email=owner_email).serial_no) + ' - ' + str(
                    VehicleList.objects.get(serial_no=op.vehicle_serial_no, email=owner_email).vehicle_type))
        json_obj = {
            'Client_Name': job_detail.title,
            'Earning': int(job_detail.payout),
            'location': job_detail.location,
            'date_from': job_detail.date_from,
            'date_to': job_detail.date_to,
            'description': job_detail.description,
            'operators': operators,
            'vehicles': vehicles
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except:
        json_obj = {'result': 'false'}
        print(json_obj)
        return JsonResponse(json_obj)


def opgetvehtype(request):
    access_token = request.GET['access_token']
    jid = request.GET['JID']
    try:
        user = User.objects.get(access_token=access_token)
        user_email = user.email
        opjob = OperatorJob.objects.get(email=user_email, JID=jid)
        owner = JobList.objects.get(JID=jid)
        owner_email = owner.email
        vehicle = VehicleList.objects.get(email=owner_email, serial_no=opjob.vehicle_serial_no)
        json_obj = {'vehicle_type': vehicle.vehicle_type}
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {'result': 'false'}
        print(json_obj)
        return JsonResponse(json_obj)


def addMaintenance(request):
    access_token = request.GET['access_token']
    serial_no = request.GET['serial_no']
    model_no = request.GET['model_no']
    date_from = request.GET['date_from']
    date_to = request.GET['date_to']
    location = request.GET['location']
    desc = request.GET['desc']
    email = ''
    print(access_token)
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        maint = Maintenance.objects.create(serial_no=serial_no, model_no=model_no, email=email, date_from=date_from,
                                           date_to=date_to, location=location, desc=desc)
        maint.save()
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def retrieveJobOperators(request):
    access_token = request.GET['access_token']
    print(access_token)
    jid = request.GET['jid']
    email = ''
    operators = []
    names = []
    profileurl = []
    vehicles = []
    model_no = []
    vehicles_url = []
    try:
        owner = User.objects.get(access_token=access_token)
        email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        operatorjobs = OperatorJob.objects.filter(JID=jid)
        for record in operatorjobs:
            operators.append(record.email)
            vehicles.append(record.vehicle_serial_no)
            model_no.append(record.vehicle_model_no)
        for ema in operators:
            user = User.objects.get(email=ema)
            names.append(user.name)
            profileurl.append(user.profile_image_url)
        for i in range(len(vehicles)):
            serial_no = vehicles[i]
            modelno = model_no[i]
            print(email)
            print(serial_no)
            print(modelno)
            temp = VehicleList.objects.get(email=email, serial_no=serial_no, model_no=modelno)
            temp2 = temp.vehicle_type
            veh = Vehicle.objects.get(Vtype=temp2)
            vehicles_url.append(veh.ImgUrl)
        json_obj = {
            'profileUrl': profileurl,
            'names': names,
            'vehicles_url': vehicles_url
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def testChinese(request):
    try:
        case1 = Log.objects.create(serial_no='serial_no', email='abc@hotmail.com', machine_hour=213)
        case1.save()
        case2 = Log.objects.create(serial_no='撕裂好', email='模特儿', machine_hour=214)
        case2.save()
        json_obj = {'result': 'true'}
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {'result': 'false'}
        print(json_obj)
        return JsonResponse(json_obj)


def getOperatorJoblist(request):
    access_token = request.GET['access_token']
    job_desc = []
    job_datefrom = []
    job_dateto = []
    try:
        operator = User.objects.get(access_token=access_token)
        operator_email = operator.email
        operator_job = OperatorJob.objects.filter(email=operator_email)
        for job in operator_job:
            jid = job.JID
            print(jid)
            job_detail = JobList.objects.get(JID=jid)
            job_desc.append(job_detail.title)
            job_datefrom.append(job_detail.date_from)
            job_dateto.append(job_detail.date_to)
        json_obj = {
            'job_desc': job_desc,
            'job_datefrom': job_datefrom,
            'job_dateto': job_dateto
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {'result': 'false'}
        print(json_obj)
        return JsonResponse(json_obj)


def getJobCards(request):
    jid = request.GET['jid']
    access_token = request.GET['access_token']
    no_of_days = request.GET['no_of_days']
    emails = []
    serial_no = []
    model_no = []
    jids = []
    timestamp = []
    report_type = []
    img_urls = []
    job_descs = []
    locations = []
    faults = []
    operator_names = []
    vehicle_types = []
    try:
        owner = User.objects.get(access_token=access_token)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        today = timezone.now()
        x_days_ago = today - datetime.timedelta(days=int(no_of_days))
        print(x_days_ago)
        if int(no_of_days) > 1:
            job_cards = Reporting.objects.filter(JID=jid, timestamp__gte=x_days_ago).order_by('-timestamp')
        else:
            job_cards = Reporting.objects.filter(JID=jid).order_by('-timestamp')
        for job in job_cards:
            operator = User.objects.get(email=job.email)
            operator_names.append(operator.name)
            emails.append(job.email)
            serial_no.append(job.serial_no)
            model_no.append(job.model_no)
            vehicle = VehicleList.objects.get(serial_no=job.serial_no, model_no=job.model_no)
            vehicle_types.append(vehicle.vehicle_type)
            jids.append(job.JID)
            timestamp.append(job.timestamp)
            report_type.append(job.report_type)
            img_urls.append(job.image.url)
            job_descs.append(job.desc)
            locations.append(job.location)
            # faults.append(job.faults)
            all_faults = job.faults[1:-1]
            all_faults = all_faults.split(',')
            temp = ''
            for fault in all_faults:
                key = fault.split(':')[0]
                value = fault.split(':')[1]
                if value == '1':
                    temp += key + ' : ' + value + ', '
            faults.append(temp)
        json_obj = {
            'email': emails,
            'serial_nos': serial_no,
            'model_nos': model_no,
            'jid': jids,
            'timestamp': timestamp,
            'report_type': report_type,
            'img_urls': img_urls,
            'job_descs': job_descs,
            'locations': locations,
            'faults': faults,
            'operator_names': operator_names,
            'vehicle_types': vehicle_types
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false',
            'error': e
        }
        print(json_obj)
        return JsonResponse(json_obj)


def updateAccessToken(request):
    email = request.GET['email']
    access_token = request.GET['access_token']
    profile_url = request.GET['profile_url']
    try:
        user = User.objects.get(email=email)
        user.access_token = access_token
        user.profile_image_url = profile_url
        user.save()
        json_obj = {
            'result': 'true'
        }
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def getOperatorVehicles(request):
    access_token = request.GET['access_token']
    date_from = request.GET['date_from']
    date_to = request.GET['date_to']
    veh_no = []
    model_no = []
    veh_type = []
    availability = []
    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
        vehicles = VehicleList.objects.filter(email=owner_email)
        for vehicle in vehicles:
            veh_no.append(vehicle.serial_no)
            model_no.append(vehicle.model_no)
            veh_type.append(vehicle.vehicle_type)
            availability.append('Free')
            vehicle_maintenances = Maintenance.objects.filter(serial_no=vehicle.serial_no, model_no=vehicle.model_no)
            for maintenance in vehicle_maintenances:
                Range = namedtuple('Range', ['start', 'end'])
                r1 = Range(start=datetime.datetime.strptime(date_from, '%Y-%m-%d').date(),
                           end=datetime.datetime.strptime(date_to, '%Y-%m-%d').date())
                r2 = Range(start=maintenance.date_from, end=maintenance.date_to)
                latest_start = max(r1.start, r2.start)
                earliest_end = min(r1.end, r2.end)
                delta = (earliest_end - latest_start).days + 1
                overlap = max(0, delta)
                if overlap > 0:
                    availability[-1] = 'Busy'
                    break
            vehicles_used_for_job = OperatorJob.objects.filter(vehicle_serial_no=vehicle.serial_no,
                                                               vehicle_model_no=vehicle.model_no)
            for veh in vehicles_used_for_job:
                job_id = veh.JID
                job = JobList.objects.get(JID=job_id)
                Range = namedtuple('Range', ['start', 'end'])
                r1 = Range(start=datetime.datetime.strptime(date_from, '%Y-%m-%d').date(),
                           end=datetime.datetime.strptime(date_to, '%Y-%m-%d').date())
                r2 = Range(start=job.date_from.date(), end=job.date_to.date())
                latest_start = max(r1.start, r2.start)
                earliest_end = min(r1.end, r2.end)
                delta = (earliest_end - latest_start).days + 1
                overlap = max(0, delta)
                if overlap > 0:
                    availability[-1] = 'Busy'
                    break
        json_obj = {
            'vehsno': veh_no,
            'model_no': model_no,
            'vehtype': veh_type,
            'availability': availability
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {'result': 'false'}
        print(json_obj)
        return JsonResponse(json_obj)


def updateCapabilities(request):
    access_token = request.GET['access_token']
    vehicle_type = request.GET['vehicle_type']
    vehicle_type = vehicle_type.split(",")
    try:
        operator = User.objects.get(access_token=access_token)
        operator_email = operator.email
        operator_vehicle = OperatorVehicle.objects.filter(opEmail=operator_email).delete()
        for vehicle in vehicle_type:
            if vehicle == None or vehicle == "":
                break
            operator_vehicle = OperatorVehicle.objects.create(opEmail=operator_email, vtype=vehicle)
            operator_vehicle.save()
        json_obj = {
            'result': 'true'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def getOpCapabilities(request):
    access_token = request.GET['access_token']
    vehicle_type = []
    vehicle_url = []
    try:
        operator = User.objects.get(access_token=access_token)
        operator_email = operator.email
        operator_vehicles = OperatorVehicle.objects.filter(opEmail=operator_email)
        for vehicle in operator_vehicles:
            vehicle_type.append(vehicle.vtype)
            url = Vehicle.objects.get(Vtype=vehicle.vtype)
            vehicle_url.append(url.ImgUrl)
        json_obj = {
            'vehicle_type': vehicle_type,
            'vehicle_url': vehicle_url
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {'result': 'false'}
        print(json_obj)
        return JsonResponse(json_obj)


def addCompany(request):
    access_token = request.GET['access_token']
    company_name = request.GET['company_name']
    company_add = request.GET['company_add']
    phone_no = request.GET['phone_no']
    working_days = request.GET['working_days']
    # working_days = 22
    try:
        user = User.objects.get(access_token=access_token)
        user.companyName = company_name
        user.phoneNumber = phone_no
        email = user.email
        user.save()
        company_details = company.objects.create(ownerEmail=email, companyName=company_name, companyAddress=company_add,
                                                 no_working_days=working_days)
        company_details.save()
        relationship = OperatorList.objects.create(ownerEmail=email, operatorEmail=email, is_delete=0)
        relationship.save()
        json_obj = {'result': 'true'}
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def getOperatorJoblist(request):
    access_token = request.GET['access_token']
    job_desc = []
    job_datefrom = []
    job_dateto = []
    try:
        operator = User.objects.get(access_token=access_token)
        operator_email = operator.email
        operator_job = OperatorJob.objects.filter(email=operator_email)
        for job in operator_job:
            jid = job.JID
            print(jid)
            job_detail = JobList.objects.get(JID=jid)
            job_desc.append(job_detail.title)
            job_datefrom.append(job_detail.date_from)
            job_dateto.append(job_detail.date_to)
        json_obj = {
            'job_desc': job_desc,
            'job_datefrom': job_datefrom,
            'job_dateto': job_dateto
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {'result': 'false'}
        print(json_obj)
        return JsonResponse(json_obj)

def getOperatorUtil(request):
    operator_email = request.GET['email']
    access_token = request.GET['access_token']

    getTotalDays_list =[]
    getMonth_list=[]
    getYear_list =[]

    # model_no = request.GET['model_no']
    access_token = request.GET['access_token']
    cur_date = datetime.datetime.now(tz=timezone.utc)
    cur_month = cur_date.month
    cur_year = cur_date.year

    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        with connection.cursor() as cursor:
            first_query = "SELECT job_month,job_year, COUNT(*) as totalWorkDays FROM volvoce.volvoce_fulljobdetails WHERE owner=\'%s\' AND operator = \'%s\' AND job_year =\'%s\' GROUP BY job_month,job_year ORDER BY Job_Year ASC, Job_month ASC" % (owner_email,operator_email,cur_year)
            cursor.execute(first_query)
            res = dictfetchall(cursor)
            totalWorkDays = [r['totalWorkDays'] for r in res]
            the_month=[r['job_month'] for r in res]
            the_year=[r['job_year'] for r in res]
            getTotalDays_list.append(totalWorkDays)
            getMonth_list.append(the_month)
            getYear_list.append(the_year)
            totalDay_ChartList = getTotalDays_list[0]
            month_ChartList = getMonth_list[0]
            year_ChartList = getYear_list[0]

        months_ToUse =[]
        months = [1,2,3,4,5,6,7,8,9,10,11,12]
        chartData =[]

        for i in range (cur_month-4,cur_month+3):
                months_ToUse.append(months[i])
        # print("Value:",months_ToUse)

        for x in months_ToUse:
            if x in month_ChartList:
                ofIndex = month_ChartList.index(x)
                chartData.append(totalDay_ChartList[ofIndex])
            else:
                chartData.append(0)
        # print("Final data to return:", chartData)
        empt_list =[]
        maxdays =[]
        for i in range (len(months_ToUse)):
            empt_list.append(i)
            maxdays.append(calendar.monthrange(cur_year,months_ToUse[i])[1])
        percentMonth = []
        for i in range(len(chartData)):
            dataPercent = (chartData[i]/ maxdays[i]) * 100
            percentMonth.append(round(dataPercent))

        json_obj = {
            'operatorEmail' : operator_email,
            'ownerEmail': owner_email,
            'chartData': percentMonth,
            # 'chartData': chartData,
            # 'datapercent': percentMonth
            # 'currentMonth': cur_month,
            # 'maxDays': maxdays,
            # 'month_touse': months_ToUse,
            # 'vehicle_totalWorkDays': totalDay_ChartList,
            # 'vehicle_month': month_ChartList,
            # 'vehicle_year': year_ChartList,

        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            'vehicle_totalWorkDays': 'N/A',
            'vehicle_month': 'N/A',
            'vehicle_year': 'N/A',
            'chartData': 'N/A'
        }
        print(json_obj)
        return JsonResponse(json_obj)


def getHomeFleetChart(request):
    access_token= request.GET['access_token']
    getTotalDays_list =[]
    getMonth_list=[]
    getYear_list =[]

    cur_date = datetime.datetime.now(tz=timezone.utc)
    cur_month = cur_date.month
    cur_year = cur_date.year

    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
        print("The owner_email is:",owner_email)
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        with connection.cursor() as cursor:
            print("The owner_email after cursor is:",owner_email)
            new_query = "SELECT job_month,job_year, COUNT(*) as totalWorkDays FROM volvoce.volvoce_fulljobdetails WHERE owner=\'%s\' AND job_year =\'%s\' GROUP BY job_month ORDER BY Job_Year ASC, Job_month ASC" % (owner_email,cur_year)
            cursor.execute(new_query)
            res = dictfetchall(cursor)
            totalWorkDays = [r['totalWorkDays'] for r in res]
            the_month=[r['job_month'] for r in res]
            the_year=[r['job_year'] for r in res]
            getTotalDays_list.append(totalWorkDays)
            getMonth_list.append(the_month)
            getYear_list.append(the_year)
            totalDay_ChartList = getTotalDays_list[0]
            month_ChartList = getMonth_list[0]
            year_ChartList = getYear_list[0]

            second_query = "SELECT count(distinct serial_no) as totalVeh FROM volvoce.volvoce_vehiclelist WHERE email=\'%s\'" % (owner_email)
            cursor.execute(second_query)
            res = dictfetchall(cursor)
            totalVeh = [r['totalVeh'] for r in res]

        months_ToUse =[]
        months = [1,2,3,4,5,6,7,8,9,10,11,12]
        chartData =[]

        for i in range (cur_month-4,cur_month+3):
                months_ToUse.append(months[i])
        # print("Value:",months_ToUse)

        for x in months_ToUse:
            if x in month_ChartList:
                ofIndex = month_ChartList.index(x)
                chartData.append(totalDay_ChartList[ofIndex])
            else:
                chartData.append(0)
        # print("Final data to return:", chartData)
        empt_list =[]
        maxdays =[]
        for i in range (len(months_ToUse)):
            empt_list.append(i)
            maxdays.append(calendar.monthrange(cur_year,months_ToUse[i])[1])
        percentMonth = []
        test_data = [10,20,30,40,50,60,70]
        for i in range(len(chartData)):
            #Change totalVeh list type to int
            dataPercent = (chartData[i]/(int(totalVeh[0])*(maxdays[i]))) * 100
            # dataPercent = (test_data[i]/(int(totalVeh[0])*(maxdays[i]))) * 100
            percentMonth.append(round(dataPercent))

        json_obj = {
            'chartData': percentMonth,
            'totalVeh': totalVeh
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            # 'chartData': 'N/A',
            'chartData': test_data,
            'totalVeh': 'N/A'
        }
        print(json_obj)
        return JsonResponse(json_obj)

def getHomeOperatorChart(request):
    access_token= request.GET['access_token']
    getTotalDays_list =[]
    getMonth_list=[]
    getYear_list =[]

    cur_date = datetime.datetime.now(tz=timezone.utc)
    cur_month = cur_date.month
    cur_year = cur_date.year

    try:
        owner = User.objects.get(access_token=access_token)
        owner_email = owner.email
    except Exception as e:
        print(e)
        json_obj = {
            'result': 'false'
        }
        print(json_obj)
        return JsonResponse(json_obj)
    try:
        with connection.cursor() as cursor:
            new_query = "SELECT job_month,job_year, COUNT(*) as totalWorkDays FROM volvoce.volvoce_fulljobdetails WHERE owner=\'%s\' AND job_year =\'%s\' GROUP BY job_month ORDER BY Job_Year ASC, Job_month ASC" % (owner_email,cur_year)
            cursor.execute(new_query)
            res = dictfetchall(cursor)
            totalWorkDays = [r['totalWorkDays'] for r in res]
            the_month=[r['job_month'] for r in res]
            the_year=[r['job_year'] for r in res]
            getTotalDays_list.append(totalWorkDays)
            getMonth_list.append(the_month)
            getYear_list.append(the_year)
            totalDay_ChartList = getTotalDays_list[0]
            month_ChartList = getMonth_list[0]
            year_ChartList = getYear_list[0]
            # print("SHOW TOTAL WORK DAYS:",totalDay_ChartList,"Show email of owner:", owner_email)

            second_query = "SELECT count(distinct operatorEmail) as totalOperator FROM volvoce.volvoce_operatorlist WHERE ownerEmail=\'%s\'" % (owner_email)
            cursor.execute(second_query)
            res = dictfetchall(cursor)
            totalOperator = [r['totalOperator'] for r in res]

        months_ToUse =[]
        months = [1,2,3,4,5,6,7,8,9,10,11,12]
        chartData =[]

        for i in range (cur_month-4,cur_month+3):
                months_ToUse.append(months[i])
        # print("Value:",months_ToUse)

        for x in months_ToUse:
            if x in month_ChartList:
                ofIndex = month_ChartList.index(x)
                chartData.append(totalDay_ChartList[ofIndex])
            else:
                chartData.append(0)
        # print("Final data to return:", chartData)
        empt_list =[]
        maxdays =[]
        for i in range (len(months_ToUse)):
            empt_list.append(i)
            maxdays.append(calendar.monthrange(cur_year,months_ToUse[i])[1])
        percentMonth = []
        test_data = [1,2,3,4,5,6,7]
        print("return chartData value:", chartData)

        #Prevent from hitting
        if ((int(totalOperator[0])) == 1):
            totalOperator[0] = 2

        for i in range(len(chartData)):
            # dataPercent = (chartData[i]/((int(totalOperator[0])-1)*(maxdays[i]))) * 100
            dataPercent = (chartData[i]/((int(totalOperator[0])-1)*(maxdays[i]))) * 100
            # dataPercent = (test_data[i]/((int(totalOperator[0])-1)*(maxdays[i]))) * 100
            # dataPercent = (test_data[i]/((0)*(maxdays[i]))) * 100
            percentMonth.append(round(dataPercent))

        json_obj = {
            'chartData': percentMonth,
            'totalOperator': totalOperator
        }
        print(json_obj)
        return JsonResponse(json_obj)
    except Exception as e:
        print(e)
        json_obj = {
            # 'chartData': 'N/A',
            'chartData': test_data,
            'totalOperator': 'N/A'
        }
        print(json_obj)
        return JsonResponse(json_obj)


# def getMonthlyPay(request):
#     email = request.GET['email']
#     with connection.cursor() as cursor:
#         cursor.execute("SELECT payout FROM volvoce.volvoce_joblist WHERE (completed = 1)")
#         res = cursor.fetchone()
#         print(res)
#         payout = res
#         #payout = [b['payout'] for b in res]
#         JsonObj = {
# 	    	"payout": payout
#         }
#         print (payout)
#         cursor.close()
#         return JsonResponse(JsonObj)


# usr.email = %s",[email])
def getMonthlyPay(request):
    expected_list = []
    total_list = []
    cur_date = datetime.datetime.now(tz=timezone.utc)
    cur_month = cur_date.month
    email = request.GET['email']
    # print("get data")
    with connection.cursor() as cursor:
        months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        for i in months:
            if i < 8:
                # cursor.execute("SELECT SUM(payout) FROM volvoce.volvoce_joblist WHERE MONTH(date_to)=%s",[(months[cur_month-4+i-1])])
                first_query = "SELECT SUM(payout) FROM volvoce.volvoce_joblist WHERE MONTH(date_to)=\'%s\' AND email = \'%s\'" % (
                (months[cur_month - 4 + i - 1]), str(email))
                cursor.execute(first_query)
                res = dictfetchall(cursor)
                expected = [r['SUM(payout)'] for r in res]
                expected_list.append(expected)

                sec_query = "SELECT SUM(payout) FROM volvoce.volvoce_joblist WHERE completed = 1 AND MONTH(date_to)=\'%s\' AND email =\'%s\'" % (
                (months[cur_month - 4 + i - 1]), str(email))
                cursor.execute(sec_query)
                res = dictfetchall(cursor)
                total = [r['SUM(payout)'] for r in res]
                total_list.append(total)

        try:
            expect = expected_list
            received = total_list
            JsonObj = {
                "Expected": expect,
                "Received": received
            }
        except:
            JsonObj = {
                "Expected": 'Nil',
                "Received": 'Nil'
            }
        cursor.close()
        print(JsonObj)
        return JsonResponse(JsonObj)

# def getFleetHomeChart(request):
#     expected_list = []
#     total_list = []
#     cur_date = datetime.datetime.now(tz=timezone.utc)
#     cur_month = cur_date.month
#     email = request.GET['email']
#     with connection.cursor() as cursor:
#         months =[1,2,3,4,5,6,7,8,9,10,11,12]
#         for i in months:
#             if i<8:
#                 # cursor.execute("SELECT SUM(payout) FROM volvoce.volvoce_joblist WHERE MONTH(date_to)=%s",[(months[cur_month-4+i-1])])
#                 first_query = "SELECT SUM(payout) FROM volvoce.volvoce_joblist WHERE MONTH(date_to)=\'%s\' AND email = \'%s\'" %((months[cur_month-4+i-1]),str(email))
#                 # first_query ="SELECT DAY(date_from) FROM volvoce.volvoce_joblist"
#                 cursor.execute(first_query)
#                 res = dictfetchall(cursor)
#                 expected = [r['SUM(payout)'] for r in res]
#                 expected_list.append(expected)
#
#                 # sec_query = "SELECT SUM(payout) FROM volvoce.volvoce_joblist WHERE completed = 1 AND MONTH(date_to)=\'%s\' AND email =\'%s\'" %((months[cur_month-4+i-1]),str(email))
#                 # cursor.execute(sec_query)
#                 # res = dictfetchall(cursor)
#                 # total = [r['SUM(payout)'] for r in res]
#                 # total_list.append(total)
#
#         try:
#             expect = expected_list
#             # received = total_list
#             JsonObj = {
#                 "Excel" : expect
#                 # "RRR" : received
#             }
#         except:
#             JsonObj = {
#                 "Excel" : 'Nil'
#                 # "RRR" : 'Nil'
#             }
#         cursor.close()
#         print(JsonObj)
#         return JsonResponse(JsonObj)

# def getFleetHomeChart(request):
#     email = request.GET['email']
#     cur_date = datetime.datetime.now(tz=timezone.utc)
#     cur_year = cur_date.year
#     print("Entering into getFleetHomeChart for backend")
#     endDay_list= []
#     stDay_list = []
#     print("Before cursor")
#     with connection.cursor() as cursor:
#         print("entering cursor to query")
#         cursor.execute("SELECT DAY(date_from),MONTH(date_from),DAY(date_to),MONTH(date_to) FROM volvoce.volvoce_joblist")
#         print("I got here point 0")
#         # cursor.execute("SELECT DATE(date_from),DAY(date_from),MONTH(date_from),DATE(date_to),DAY(date_to),MONTH(date_to) FROM volvoce.volvoce_joblist")
#         res = dictfetchall(cursor)
#
#         # startDate = [c['DATE(date_from)']for c in res]
#         startDay = [c['DAY(date_from)']for c in res]
#         startMth = [c['MONTH(date_from)']for c in res]
#         # endDate = [c['DATE(date_to)']for c in res]
#         endDay = [c['DAY(date_to)']for c in res]
#         endMth = [c['MONTH(date_to)']for c in res]
#         print("I got here point 1")
#         if startMth != endMth:
#             # if (endMth - startMth) > 1:
#             # else:
#             print("i entered if loop statement")
#             monthFirst = calendar.monthrange(cur_year,startMth)[1]
#             #deltaInMth
#             print("What is monthFirst:", monthFirst)
#             startMonthsWorkingDays = (monthFirst - startDay)+1
#             print(startMonthsWorkingDays)
#             stDay_list.append(startMonthsWorkingDays)
#
#             print(endDay)
#
#         else:
#             #same month for starting and ending of work
#             endMonthWorkingDays = int(endDay) - int(startDay)
#             print(endMonthWorkingDays)
#             endDay_list.append(endMonthWorkingDays)
#
#         try:
#             stday = stDay_list
#             totDays = endDay_list
#             JsonObj = {
#                 "FirstMonth" : stday,
#                 "LastMonth" : totDays
#             }
#         except:
#             JsonObj = {
#                 "FirstMonth" : 'Nil',
#                 "LastMonth" : 'Nil'
#             }
#         cursor.close()
#         print(JsonObj)
#         return JsonResponse(JsonObj)


# SELECT DATE(date_from),DAY(date_from),MONTH(date_from),DATE(date_to),DAY(date_to) FROM volvoce.volvoce_joblist;

# month = calendar.monthrange()
# dateNow = datetime.datetime.now()
# cur_date = dateNow.day
# cur_mth = dateNow.month
# cur_yr = dateNow.year


# def GetOperatorList(request):
#     email = request.GET['email']
#     with connection.cursor() as cursor:
#         cursor.execute("SELECT u.email,u.name FROM volvoce.volvoce_user as usr,volvoce.volvoce_operatorlist as lk INNER JOIN volvoce_user as u on u.email = lk.operatorEmail WHERE usr.email = lk.ownerEmail AND usr.email = %s",[email])
#         res = dictfetchall(cursor)
#         try:
#             opemail = [r['email'] for r in res]
#             opname = [r['name'] for r in res]
#             JsonObj = {
#                 "opemail" : opemail,
#                 "opname" : opname
#             }
#         except:
#             JsonObj = {
#                 "opemail" : 'Nil',
#                 "opname" : 'Nil'
#             }
#         cursor.close()
#         print(JsonObj)
#         return JsonResponse(JsonObj)

# (SELECT vl.vehicle_type as TCount, count(vl.vehicle_type) as TType FROM volvoce.volvoce_vehiclelist as vl
# WHERE vl.email='qingtiandalei@hotmail.com' and vl.is_delete='0' group by vl.vehicle_type);

# SELECT count(vz.vehicle_type) as JCount, vz.vehicle_type as JType from volvoce.volvoce_operatorjob as oj inner join volvoce.volvoce_joblist as jl on oj.JID = jl.JID
# inner join volvoce.volvoce_vehiclelist as vz on (vz.serial_no = oj.vehicle_serial_no and vz.model_no = oj.vehicle_model_no)
# WHERE jl.email = 'qingtiandalei@hotmail.com' and (jl.date_from <= '2018-11-20 00:00:00' and jl.date_to >= '2018-11-20 00:00:00') and jl.completed = 0 and vz.is_delete = 0
# group by vz.vehicle_type,jl.date_from,jl.date_to;

# SELECT count(vl.vehicle_type) as maintCount ,vl.vehicle_type as maintType FROM volvoce.volvoce_maintenance as vm inner join volvoce.volvoce_vehiclelist as vl on vm.serial_no = vl.serial_no
# WHERE vl.email = 'qingtiandalei@hotmail.com' and (vm.date_from <= '2018-11-20' and vm.date_to >= '2018-11-20') and vl.is_delete = 0;

# SELECT ttl.TType,ttl.TCount,ifnull(js.Jcount,0) as loJCount,js.JType, (ttl.TCount - ifnull(js.Jcount,0)) as res FROM ((SELECT vl.vehicle_type as TType, count(vl.vehicle_type) as TCount FROM volvoce.volvoce_vehiclelist as vl
# WHERE vl.email='qingtiandalei@hotmail.com' and vl.is_delete='0' group by vl.vehicle_type)) as ttl left outer join (SELECT count(vz.vehicle_type) as JCount, vz.vehicle_type as JType from volvoce.volvoce_operatorjob as oj inner join volvoce.volvoce_joblist as jl on oj.JID = jl.JID
# inner join volvoce.volvoce_vehiclelist as vz on (vz.serial_no = oj.vehicle_serial_no and vz.model_no = oj.vehicle_model_no)
# WHERE jl.email = 'qingtiandalei@hotmail.com' and (jl.date_from <= '2018-11-20 00:00:00' and jl.date_to >= '2018-11-20 00:00:00') and jl.completed = 0 and vz.is_delete = 0
# group by vz.vehicle_type,jl.date_from,jl.date_to) as js on ttl.TType = js.JType;

# select * from volvoce.volvoce_maintenance;

# update volvoce.volvoce_maintenance set model_no='EC250' where serial_no='987132';
# update volvoce.volvoce_maintenance set model_no='SD110B' where serial_no='186291';
