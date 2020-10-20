from .models import Expense, Item
from rest_framework import viewsets, permissions
from .serializers import ExpenseSerializer, ItemSerializer


class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ExpenseSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ItemSerializer
