from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response

from .serilaizers import UserCreateSerializers, UserSerializers


class RegisterView(APIView):
    def post(self, request):
        data = request.data

        serializer = UserCreateSerializers(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.create(serializer.validated_data)
        user = UserSerializers(user)

        return Response(user.data, status=status.HTTP_201_CREATED)


class RetriveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        pass
