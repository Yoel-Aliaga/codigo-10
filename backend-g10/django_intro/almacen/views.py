from django.shortcuts import render
from django.http import HttpResponse
from .models import ProductosModel

# Create your views here.

def renderHtml(request):
    return HttpResponse("Este es un texto cualquiera")

def buscarProducto(request, producto_id):
    producto = ProductosModel.objects.filter(id=producto_id).first()
    return HttpResponse(f'El producto encontrado se llama {producto.nombre}')