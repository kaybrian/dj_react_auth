from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions

User = get_user_model()

class UserCreateSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','email','password']

    def  validate(self, data):
        password = data.get('password')
        user = User(**data)

        try:
            validate_password(password, user)
        except exceptions.ValidationError as e:
            serializer_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError(
                {
                    "password":serializer_errors['non_field_errors']
                }
            )



    def create(self, validated_data):
        user = User.objects.create_user(
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            email = validated_data['email'],
            password = validated_data['password']
        )

        return user


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','email']
