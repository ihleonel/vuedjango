from django.db import models


class Autor(models.Model):
    apellido = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.apellido}, {self.nombre}"
