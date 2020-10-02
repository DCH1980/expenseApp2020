from rest_framework import routers
from .api import ExpenseViewSet

router = routers.DefaultRouter()
router.register('api/expense', ExpenseViewSet, 'expense')
urlpatterns = router.urls
