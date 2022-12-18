## Ejercicio 
# Crear un archivo llamado bmi.py, dentro de ello vamos a calcular nuestro indice de masa corporal
# Formula : 
# bmi = masa / altura ** 2


masa = float(input("Ingresa tu masa : "))
alt = float(input("Ingresa tu altura : "))

bmi = masa / alt ** 2 

print(f"Tu masa corporal es : {bmi}")