from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Reservation
from .models import Contact1

from .serializers import ReservationSerializer

from .serializers import ContactSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def create(self, request, *args, **kwargs):
        print(request.data)  # Log incoming data
        return super().create(request, *args, **kwargs)
    




class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact1.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        print(request.data)  # Log incoming data
        return super().create(request, *args, **kwargs)


