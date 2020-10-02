# Generated by Django 3.1.2 on 2020-10-02 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('label', models.CharField(choices=[('CC', 'Credit Card'), ('HE', 'Home Expenses'), ('SL', 'Student Loans'), ('MG', 'Mortgage'), ('ME', 'Monthly Expense'), ('HC', 'Health Care'), ('ET', 'Entertainment'), ('CR', 'Credit'), ('OT', 'Other')], max_length=2)),
                ('auto_pay', models.BooleanField()),
                ('amount_due', models.IntegerField()),
                ('due_date', models.DateField()),
            ],
        ),
    ]