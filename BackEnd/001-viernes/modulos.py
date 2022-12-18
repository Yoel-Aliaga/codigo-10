# Importacion de modulos
# Siempre definir lo que se va a usar
# import variables

# Trae la variable nombre desde nuestro script variable trae todo, no usar
# import variables
# print(variables.nombre)



# Forma correcta : Solo trae lo que vas a usar

from variables import nombre, apellido_paterno
from camelcase import CamelCase as ClaseCamel

instancia = ClaseCamel()

print(instancia.hump("julio martin"))
print(nombre)
print(apellido_paterno)
