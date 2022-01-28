# Generated by Django 3.2.4 on 2022-01-16 03:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0003_account_salt'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=150)),
                ('Lastname', models.CharField(max_length=150)),
            ],
        ),
        migrations.AddField(
            model_name='account',
            name='Employees',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to='Accounts.employ'),
        ),
    ]
