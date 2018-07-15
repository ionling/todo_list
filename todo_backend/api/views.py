import random
import string

from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response

from models import Todo
from serializers import TodoSerializer

# TODO: Refator with ObtainAuthToken.
@api_view(['POST'])
def login(request):
    """
    User login.
    """
    data = request.data
    try:
        user = User.objects.get(username=data['username'])
        if not user.check_password(data['password']):
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
    except ObjectDoesNotExist:
        return Response(
            {
                'message': 'Validation Failed',
                'errors': [{
                    'resource': 'login',
                    'field': 'username',
                    'message': 'User with specified username not exist.'
                }]
            },
            status=status.HTTP_422_UNPROCESSABLE_ENTITY)
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


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    # def list(self, request):
    #     todos = Todo.objects.filter(user=request.user)
    #     return Response(TodoSerializer(todos, many=True).data)

    def create(self, request):
        data = request.data
        data['user'] = request.user
        print data
        todo = Todo.objects.create(**data)
        return Response(TodoSerializer(todo).data)


    # def retrieve(self, request, pk=None):
    #     todo = Todo.objects.get(pk=pk)
    #     return Response(TodoSerializer(todo).data)

    # def update(self, request, pk=None):
    #     pass

    # def partial_update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass
