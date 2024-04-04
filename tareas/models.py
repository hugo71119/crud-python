import datetime
from django.db import models

# Create your models here.

class Tarea(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    date = models.DateField(default=datetime.date.today, verbose_name="03/11/24")

    def __str__(self):
        return self.titulo