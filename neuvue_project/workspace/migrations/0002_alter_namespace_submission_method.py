# Generated by Django 3.2.7 on 2021-11-17 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workspace', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='namespace',
            name='submission_method',
            field=models.CharField(choices=[('submit', 'submit'), ('forced_choice', 'forced_choice')], default='submit', max_length=50),
        ),
    ]