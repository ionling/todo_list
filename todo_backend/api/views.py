import random
import string

from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def login(request):
    """
    User login.
    """
    data = request.data
    try:
        user = User.objects.get(username=data['userName'])
        if not user.check_password(data['password']):
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        token = Token.objects.create(user=user)
        return Response({'token': token.key})
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    except KeyError:
        return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)


@api_view(['GET'])
def get_casual(request):
    """
    Get a casual user.
    """
    password = get_random_str(7)
    user = User.objects.create_user(get_random_str(5), password=password)
    return Response({'username': user.get_username(), 'password': password})


def get_random_str(length):
    return ''.join(
        random.choice(string.ascii_uppercase + string.digits)
        for _ in range(length))
