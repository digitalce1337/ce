"""djangorest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
#from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from volvoce.views import *

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
admin.autodiscover()

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    #url(r'^', include(router.urls)),
    # New url to be linked for extraction of data from charts
	#Adding of new methods to try for charts
	url(r'^deletefullJobDetails', deletefullJobDetails, name = 'deletefullJobDetails'),
    url(r'^getOperatorHomePageUtil', getOperatorHomePageUtil, name = 'getOperatorHomePageUtil'),
    url(r'^getMonthlyPay',getMonthlyPay, name="getMonthlyPay"),
    url(r'^getHomeFleetChart', getHomeFleetChart, name = 'getHomeFleetChart'),
	url(r'^getHomeOperatorChart', getHomeOperatorChart, name = 'getHomeOperatorChart'),
	url(r'^getOperatorUtil', getOperatorUtil, name="getOperatorUtil"),
    url(r'^addJobDetails', addJobDetails, name="addJobDetails"),
    #----------------Added------------------Steffano----------------------
    url(r'^OpsretrievePastJobs', retrieveOpPastJobsz, name="retrieveOpPastJobsz"),
    url(r'^OpsretrieveOngoingJobs', retrieveOpOngoJobsz, name="retrieveOpOngoJobsz"),
    url(r'^OpsretrieveUpcomingJobs', retrieveOpUpcomJobsz, name="retrieveOpUpcomJobsz"),
    #-------------------------------------------------------------------------------------
    url(r'^$', index, name='index'),
    url(r'^kakaologin/', kakaologin, name='kakaologin'),
    url(r'^oauth/', oauth, name='oauth'),
    url(r'^signupdone/', signupdone, name="signupdone"),
    url(r'^login/', login, name="login"),
    url(r'^roleupdate/', roleupdate, name="roleupdate"),
    url(r'^testlink/', testlink, name="testlink"),
    url(r'^accesstoken/', accesstoken, name='accesstoken'),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^getUserInfo', getUserInfo, name='getUserInfo'),
    url(r'^addVehicle', addVeh, name='addVeh'),
    url(r'^getFleet', GetVehList, name='GetVehList'),
    url(r'^getVehicleStatus', getVehicleStatus, name="getVehicleStatus"),
    url(r'^getEmail', getEmail, name='getEmail'),
    url(r'^getOperatorList', getOperatorList, name="getOperatorList"),
    url(r'^removeVeh', RemoveVeh, name='RemoveVeh'),
    url(r'^updownmaint', updownMaint, name = 'updownMaint'),
    url(r'^getMaintRec', getMaintRec, name = 'getMaintRec'),
    url(r'^DelMaint',delMaint, name='delMaint'),
    url(r'^GetOpList',GetOperatorList, name='GetOperatorList'),
    url(r'^getVehicleUrl', getVehicleUrl, name='getVehicleUrl'),
    url(r'^checkEmail', checkEmail, name="checkEmail"),
    url(r'^addOperator', addOperator, name="addOperator"),
    url(r'^kakaoshare', kakaoshare, name="kakaoshare"),
    url(r'^getOperatorDetails', getOperatorDetails, name="getOperatorDetails"),
    url(r'^getChartData', getChartData, name="getChartData"),
    url(r'^deleteOperator', deleteOperator, name="deleteOperator"),
    url(r'^getOwnerJoblist', getOwnerJoblist, name="getOwnerJoblist"),
    url(r'^retrieveVehPurchaseDate', retrieveVehPurchaseDate, name="retrieveVehPurchaseDate"),
    url(r'^retrieveVehMachineHour', retrieveVehMachineHour, name="retrieveVehMachineHour"),
    url(r'^retrieveMaintenanceCompleted', retrieveMaintenanceCompleted, name="retrieveMaintenanceCompleted"),
    url(r'^retrieveMaintenanceUpcoming', retrieveMaintenanceUpcoming, name="retrieveMaintenanceUpcoming"),
    url(r'^retrieveVehicleSchedule', retrieveVehicleSchedule, name="retrieveVehicleSchedule"),
    url(r'^retrieveVehicleUtil', retrieveVehicleUtil, name="retrieveVehicleUtil"),
    url(r'^addMaintenance', addMaintenance, name="addMaintenance"),
    url(r'^retrieveMaintenance', retrieveMaintenance, name="retrieveMaintenance"),
    url(r'^deleteMaintenance', deleteMaintenance, name="deleteMaintenance"),
    url(r'^deleteVehicle', deleteVehicle, name="deleteVehicle"),
    url(r'^retrievePastJobs', retrievePastJobs, name="retrievePastJobs"),
    url(r'^retrieveOngoingJobs', retrieveOngoingJobs, name="retrieveOngoingJobs"),
    url(r'^retrieveUpcomingJobs', retrieveUpcomingJobs, name="retrieveUpcomingJobs"),
    url(r'^addJob', addJob, name="addJob"),
    url(r'^insertOperatorJob', insertOperatorJob, name="insertOperatorJob"),
    url(r'^retrieveJobDetails', retrieveJobDetails, name="retrieveJobDetails"),
    url(r'^retrieveJobOperators', retrieveJobOperators, name="retrieveJobOperators"),
    url(r'^updateJobComplete', updateJobComplete, name="updateJobComplete"),
    url(r'^updateOwnerRole', updateOwnerRole, name="updateOwnerRole"),
    url(r'^checkExistingUser', checkExistingUser, name="checkExistingUser"),
    url(r'^updateAccessToken', updateAccessToken, name="updateAccessToken"),
    url(r'^addCompany', addCompany, name="addCompany"),
    url(r'^addUser', addUser, name="addUser"),
    url(r'^getOperatorSchedule', getOperatorSchedule, name="getOperatorSchedule"),
    url(r'^getOperatorNames', getOperatorNames, name="getOperatorNames"),
    url(r'^testUpload', testUpload, name="testUpload"), ###To be removed
    url(r'^encodeImage', encodeImage, name="encodeImage"), ### to be removed
    url(r'^getJobCards', getJobCards, name="getJobCards"),
    url(r'^getOperatorVehicles', getOperatorVehicles, name="getOperatorVehicles"),
    url(r'^UpRepImage', UpRepImage, name="UpRepImage"),
    url(r'^checkRole', checkRole, name="checkRole"),
    url(r'^addReport', addReport, name="addReport"),
    url(r'^getOTP', getOTP, name="getOTP"),
    url(r'^checkOTP', checkOTP, name="checkOTP"),
    url(r'^getJobInfo', getJobInfo, name="getJobInfo"),
    url(r'^updateJob', updateJob, name="updateJob"),
    url(r'^updateOperatorJob', updateOperatorJob, name="updateOperatorJob"),
    url(r'^OperatorLogin', OperatorLogin, name="OperatorLogin"),
    url(r'^opgetvehtype', opgetvehtype, name="opgetvehtype"),
    url(r'^testChinese', testChinese, name="testChinese"),
    url(r'^getOperatorJoblist', getOperatorJoblist, name="getOperatorJoblist"),
    url(r'^updateCapabilities', updateCapabilities, name="updateCapabilities"),
    url(r'^getOpCapabilities', getOpCapabilities, name="getOpCapabilities")
] + static (settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
