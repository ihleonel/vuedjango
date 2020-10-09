# -*- coding:utf-8 -*-
from django.db import models


class Libro(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre
