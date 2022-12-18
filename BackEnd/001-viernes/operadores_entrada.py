# Funcion Input()
# Forma  1
print("Ingresa tu nombre : ")
nombre = input()
print(f"Bienvenido, {nombre}")

# Forma  2

nombre = input("Ingresa tu nombre : ")
print(f"Bienvenido, {nombre}")

# Todo lo que se recibe dentro del input siempre es string para usar los datos se deben convertir

edad = int(input("Ingresa tu edad : "))
print(f"Tu edad es : {edad}")

# Funcion type ()
print(type(nombre))
print(type(edad))

## Ejercicio 
# Crear un archivo llamado bmi.py, dentro de ello vamos a calcular nuestro indice de masa corporal
# Formula : 
# bmi = masa / altura ** 2

