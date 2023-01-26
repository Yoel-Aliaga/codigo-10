from django.urls import path
from .views import renderHtml, buscarProducto

urlpatterns = [
    path('productos', renderHtml),
    path('producto/<int:producto_id>', buscarProducto),

]