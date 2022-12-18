# for -> for in 
# Nos permite obtener el valor

meses = ["Enero", "Febrero","Marzo", "Abril"] 

# print(meses[0])

# Recorre el array elemento por elemento
for mes in meses : 
    print(mes)


## Obtener el indice y el valor

for index, mes in enumerate(meses) : # Devuelve el indice y el valor(indice, value)
    print(index,mes)


# for (let i = 0; i < 10; i++) {} -> Esto es Js
# range -> recibe 3 argumentos (parametros)
# 1° Desde donde empieza
# 2° Hasta donde finaliza - Se toma por defecto si sole se ingresa un argumento
# 3° De cuanto en cuanto incrementará


for numero in range(1,5):
    print(numero)

    # 3° Forma 
    # for index in persona.keys():
    # print (index)


# for key, value in persona.items():
#     print (key,value)


## Ejercicio 1
# Hallar cuantos son los multiplos de 3 y 5 de una lista
# Si existe un multiplo que sea de 3 y 5 a la vez no se debe contabilizar

numeros = [1,2,5,9,12,15,10,34,67]
multiplo_tres = 0
multiplo_cinco = 0

for numero in numeros:
    if numero % 3 == 0 and numero % 5 == 0 :
        continue
    elif numero % 3 == 0 :
        multiplo_tres +=1 
    elif numero % 5 == 0 :
        multiplo_cinco +=1 

print(multiplo_tres, multiplo_cinco)

# While (Mientras)
edad = 28

while edad > 18:
    print(edad)
    edad -=1

    if edad == 21:
        break


#! Bucle infinito Cuidado
# while True : 
#     pass











