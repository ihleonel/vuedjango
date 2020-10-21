from django.test import TestCase
from apps.autores.models import Autor


class AutorTestCase(TestCase):
    def test_create_autor(self):
        autor = Autor.objects.create(nombre="Carlos", apellido="Buendia")
        self.assertEqual(autor.nombre, "Carlos")
        self.assertEqual(autor.apellido, "Buendia")
