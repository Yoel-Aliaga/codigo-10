# Asignar variables
n_uno = 10
n_dos = 20

# Sumna (+)
suma = n_uno + n_dos
print(suma)

### Concatenar
# En javascript
# console.log(`suma ${n_uno`)

# En python
# f es fString
print(f"La suma de {n_uno} y {n_dos} es igual a: {suma}")

# Resta  (-) 

resta = n_dos - n_uno
print(f"La resta de {n_dos} y {n_uno} es igual a: {resta}")

# Multiplicacion  (*) 

multiplicacion = n_uno * n_dos
print(f"La multiplicacion de {n_uno} y {n_dos} es igual a: {multiplicacion}")

# Division (/) 

division = n_dos / n_uno
print(f"La division de {n_dos} y {n_uno} es igual a: {division}")


# Potencia (**) 

potencia = n_uno ** n_dos
print(f"La potencia de {n_uno} y {n_dos} es igual a: {potencia}")




# Division Exacta (//) otra forma usar una funcion por defecto de python divmod(p,p_dos)
# Forma 1 //
# ? CUIDADO Si el resultado es 1.8 retornara 1
division_exacta = n_dos // n_uno
print(f"La division exacta de {n_dos} y {n_uno} es igual a: {division_exacta}")

# Forma 2 divmod(p, p_dos)
# ? Devuelve una estructura de datos devuelve (coeficiente , residuo)
# Se obtiene por posicion y al trae añadiendo el indice al final del resultado  {division_exacta_divmod}[0]
# O creando otra variable "residuo" y se llama directamente
division_exacta_divmod , residuo =  divmod(n_dos, n_uno)
print(f"La division exacta divmod de {n_dos} y {n_uno} es igual a: {division_exacta_divmod}")
print(f"El residuo de {n_dos} y {n_uno} es igual a: {residuo}")
