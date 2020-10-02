from django.db import models

# Create your models here.


class Expense(models.Model):
    LABEL_TYPE = (('CC', 'Credit Card'), ('HE', 'Home Expenses'),
                  ('SL', 'Student Loans'), ('MG', 'Mortgage'), ('ME', 'Monthly Expense'), ('HC', 'Health Care'), ('ET', 'Entertainment'), ('CR', 'Credit'), ('OT', 'Other'))
    name = models.CharField(max_length=60)
    label = models.CharField(max_length=2, choices=LABEL_TYPE)
    auto_pay = models.BooleanField()
    amount_due = models.IntegerField()
    due_date = models.DateField()
