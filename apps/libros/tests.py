# -*- coding:utf-8 -*-
from django.test import TestCase
from apps.libros.models import Libro


class LibroTest(TestCase):

    def test_create_libro(self):
        libro = Libro.objects.create(
            nombre="Del Amor y Otros Demonios",
            descripcion="Escrito por Gabriel Garcia Marquez",
        )
        libro = Libro.objects.get(nombre="Del Amor y Otros Demonios")
        self.assertEqual(libro.nombre, "Del Amor y Otros Demonios")
        self.assertEqual(libro.descripcion, "Escrito por Gabriel Garcia Marquez")
