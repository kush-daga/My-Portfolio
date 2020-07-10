from rest_framework.generics import ListAPIView
from backend.awards.models import Education
from .serializers import EducationSerializer


class EducationListView(ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
