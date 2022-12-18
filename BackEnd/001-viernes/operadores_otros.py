# Asignacion multiple
n_uno, n_dos = 10 , 20

## Operadores de comparación
# == , es igual que 
# !=, diferente a 
# < menor a
# <= menor igual a
# > mayor a 
# >= mayor igual a 


print(f"Son iguales : {n_uno == n_dos}")
print(f"Son diferentes : {n_uno != n_dos}")

# Operadores Logicos
# && -> and
# || -> or
# ! -> not

print (n_uno > n_dos  and n_dos == 20)
print (not (n_uno > n_dos)  and n_dos == 20)

## Operadores de identidad
# is -> es 
# is not -> no es 

# En python no existe null , el valor nulo se representa con None con N mayuscula
frutas = None  
print(frutas is None)


# Ejercicios 
# Crear un archivo llamado temperatura.py y dentro vamos a cnvertir Farenheit a Celsius
# Formula : 
# Celsius = (farenheit -32) / 1.8