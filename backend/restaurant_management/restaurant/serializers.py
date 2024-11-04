from rest_framework import serializers
from .models import Reservation
from .models import Contact1
class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact1
        fields = '__all__'  # Include all fields in the serializer
