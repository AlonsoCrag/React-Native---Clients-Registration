# Generated by Django 3.2.4 on 2022-01-13 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='Genere',
            field=models.CharField(choices=[('Man', 'Masculine'), ('Woman', 'Femenine'), ('Indistint', 'Indistint')], default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='account',
            name='Password',
            field=models.CharField(max_length=300),
        ),
    ]