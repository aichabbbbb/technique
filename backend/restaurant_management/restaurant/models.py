from django.db import models

class Contact1(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Contact from {self.name} - {self.subject}"

class Reservation(models.Model):
    customer_name = models.CharField(max_length=100)
    restaurant_name = models.CharField(max_length=100)
    reservation_date = models.DateTimeField()
    number_of_guests = models.PositiveIntegerField()
    special_requests = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.customer_name} - {self.restaurant_name} on {self.reservation_date}"