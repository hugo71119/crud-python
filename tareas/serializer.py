from rest_framework import serializers
from .models import Tarea

class TareasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        # fields = ('id', 'titulo', 'descripcion', 'done')
        fields = '__all__'