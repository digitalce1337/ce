# django REST framework serializers
# https://djnago-rest-framework.org/tutorial/quickstart/

from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class ImageSerializer(serializers.ModelSerializer):
	image = serializers.ImageField(max_length=None, use_url=True)