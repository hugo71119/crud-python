from rest_framework import viewsets
from .serializer import TareasSerializer
from .models import Tarea

# Create your views here.
class TareaView(viewsets.ModelViewSet):
    serializer_class = TareasSerializer
    queryset = Tarea.objects.all()