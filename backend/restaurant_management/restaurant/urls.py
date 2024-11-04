from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservationViewSet
from .views import ContactViewSet


# Create a router and register our viewset with it.
router = DefaultRouter()
router.register(r'reservations', ReservationViewSet)
router.register(r'contacts', ContactViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
