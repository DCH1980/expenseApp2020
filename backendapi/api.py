from .models import Expense
from rest_framework import viewsets, permissions
from .serializers import ExpenseSerializer


class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ExpenseSerializer
