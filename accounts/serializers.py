from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

class RegisterSerializer(ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'password', 'email')

  
  def create(self, validated_data):
    username = validated_data.get('username')
    password = validated_data.get('password')
    email = validated_data.get('email')
    user = User.objects.create_user(username=username, email=email, password=password)

    return user

class UserSerializer(ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'first_name', 'last_name')