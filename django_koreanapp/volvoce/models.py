from django.db import models

# Create your models here.
class User(models.Model):
	email = models.CharField(max_length=100)
	name = models.CharField(max_length=100)
	dob = models.DateField(null=True)
	role = models.IntegerField()
	profile_image_url = models.CharField(max_length=200, default="")
	# access_token = models.CharField(max_length=200)
	access_token = models.CharField(max_length=255)
	companyName = models.CharField(max_length=100, null=True)
	phoneNumber = models.CharField(max_length=100, null=True)

	def __unicode__(self):
		return self

class VehicleList(models.Model):
	email = models.CharField(max_length=100)
	serial_no = models.CharField(max_length=100)
	model_no = models.CharField(max_length=100)
	purchase_date = models.DateField()
	desc = models.CharField(max_length=1000)
	vehicle_type = models.CharField(max_length=100)
	manufacturer = models.CharField(max_length=100)
	is_delete = models.IntegerField()

	def __unicode__(self):
		return self

class Vehicle(models.Model):
	Vtype = models.CharField(max_length=100)
	ImgUrl = models.CharField(max_length=100)

	def __unicode__(self):
		return self

class Maintenance(models.Model):
	serial_no = models.CharField(max_length=100)
	model_no = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	#vtype = models.CharField(blank=True,null=True,max_length=100)
	desc = models.CharField(blank=True,null=True,max_length=500)
	date_from = models.DateField()
	date_to = models.DateField()
	location = models.CharField(max_length=200)

	def __unicode__(self):
		return self

class Log(models.Model):
	serial_no = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	machine_hour = models.FloatField()

	def __unicode__(self):
		return self

class JobList(models.Model):
	email = models.CharField(max_length=100)
	JID = models.IntegerField()
	payout = models.FloatField()
	date_from = models.DateTimeField()
	date_to = models.DateTimeField()
	location = models.CharField(max_length=100)
	description = models.CharField(max_length=1000)
	title = models.CharField(max_length=200)
	completed = models.CharField(max_length=200)

	def __unicode__(self):
		return self

class OperatorJob(models.Model):
	JID = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	vehicle_serial_no = models.CharField(max_length=100)
	vehicle_model_no = models.CharField(max_length=100)
	pay_received = models.FloatField()

	def __unicode__(self):
		return self

class Reporting(models.Model):
	email = models.CharField(max_length=100)
	serial_no = models.CharField(max_length=100)
	model_no = models.CharField(max_length=100)
	JID = models.CharField(max_length=100)
	timestamp = models.DateTimeField()
	report_type = models.CharField(max_length=20, default="Job Report")
	image = models.ImageField(upload_to="jobReport/", blank=True)
	desc = models.CharField(max_length=1000)
	location = models.CharField(max_length=100)
	faults = models.CharField(max_length=1000)

	def __unicode(self):
		return self

class VehicleIndividualData(models.Model):
	JID = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	vehicle_serial_no = models.CharField(max_length=100)
	date_from = models.DateTimeField()
	date_to = models.DateTimeField()
	month = models.CharField(max_length=100)
	year = models.CharField(max_length=100)
	date = models.CharField(max_length=100)

	def __unicode__(self):
		return self

class fullJobDetails(models.Model):
	Job_date = models.CharField(max_length=100)
	Job_month = models.CharField(max_length=100)
	Job_year = models.CharField(max_length=100)
	owner = models.CharField(max_length=100)
	jid = models.CharField(max_length=100)
	operator = models.CharField(max_length=100)
	vehicle_serial_no = models.CharField(max_length=100)
	vehicle_model_no = models.CharField(max_length=100)


	def __unicode__(self):
		return self

class OperatorList(models.Model):
	ownerEmail = models.CharField(max_length=100)
	operatorEmail = models.CharField(max_length=100)
	is_delete = models.IntegerField()

class company(models.Model):
	ownerEmail = models.CharField(max_length=100)
	companyName = models.CharField(max_length=100)
	companyAddress = models.CharField(max_length=300)
	no_working_days = models.IntegerField(default=22)

class OperatorVehicle(models.Model):
	opEmail = models.CharField(max_length=100)
	vtype = models.CharField(max_length=100)

class OneTimePassword(models.Model):
	otp = models.CharField(max_length=20)
	timestamp = models.DateTimeField()
	ownerEmail = models.CharField(max_length=100)

