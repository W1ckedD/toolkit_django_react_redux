from rest_framework import permissions
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from .serializers import RegisterSerializer, UserSerializer

class RegisterView(CreateAPIView):
  serializer_class = RegisterSerializer
  permission_classes = [permissions.AllowAny]

class ObtainUserView(RetrieveAPIView):
  permission_classes = [permissions.IsAuthenticated,]
  serializer_class = UserSerializer
  
  def get_object(self):
    return self.request.user