## Crear el entorno virtual
```
python -m venv nombre_de_entorno
```

## Activar el entorno virtual
``` 
cmd : 
venv\Scripts\activate

git bash :
source venv/Scripts/activate 

PowerShell :
source venv/bin/activate

Para desactivar :
deactivate

```


## Instalar Django
```
pip install Django
pip freeze > requirements.txt

```

## Crear nuestro proyecto
```
django-admin startproject django_intro
```

## Correr el servicio
```
cd django_intro
python manage.py runserver
```

## Migrar los modelos 
```
python manage.py migrate
```

## Crear un superusuario
```
python manage.py createsuperuser
```

## Crear una app
```
python manage.py startapp almacen
```

## Registramos nuestra app en INSTALLED_APPS
```python
INSTALLE_APPS = [
    ...,
    'almacen'
]
```

## Crear nuestro nuevo modelo y migrar
### Para convertir la informacion en tablas
```
python manage.py makemigrations
python manage.py migrate
```

## Instalar django restframework
```
pip install djangorestframework
```


