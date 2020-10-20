from rest_framework import routers
from .api import ExpenseViewSet, ItemViewSet

router = routers.DefaultRouter()
router.register('api/expense', ExpenseViewSet, 'expense')
router.register('api/item', ItemViewSet, 'item')
urlpatterns = router.urls
