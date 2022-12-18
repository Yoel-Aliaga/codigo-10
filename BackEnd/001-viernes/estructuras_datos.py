## Tipos : Mutables e Inmutables 
## Listas -> Array [] Mutables  / funcion --list

# Obtienes los datos por el indice (posición)
# n-1  1- 1 = 0 / 2 -1 = 1 / 3-1 =2 
alumnos = ["Arnold","Alfredo","Anthony"]

print(alumnos[1])

# Funciones  
# append -> Agregar un valor mas a una lista
alumnos.append("Diego")
print(f"append : {alumnos}")

# insert -> Agrega un valor definiendo la posición
alumnos.insert(1, "Elvia")
print(f"insert : {alumnos}")

# index -> Devuelve la posición del valor a buscar
posicion_anthony = alumnos.index("Anthony")
print(f"La posicion (indice) de Anthony es  : {posicion_anthony}")

# extend -> Unir 2 listas
alumnos_nuevos = ["Emily", "Ivan ", "Jack", "Julio"]
alumnos.extend(alumnos_nuevos)
print(f"extend : {alumnos}")

# remove -> Remover un valor de la lista (elimina solo al primer valor que coincida)
alumnos.remove("Julio")
print(f"remove : {alumnos}")

# count -> Retorna las veces que existe el mismo valor
arnold_veces = alumnos.count("Arnold")
print(f"count : {arnold_veces}")

# pop -> Remueve el valor de una lista segun su posicion
alumnos.pop(2)
print(f"pop : {alumnos}")

# Cuantos valores hay en una lista 
print(f"Total de alumnos  : {len(alumnos)}")


#####################################################################################################

#Tupla - Inmutable / funcion -- tuple
alumnos = ("Anthony", "Arnold", "Blas", "Cristian")

#alumnos.append("Emily") # Dará error ya que la tupla no permite modificar sus datos (append)

# count -> Contar la cantidad de valores que hay en la tupla
blas_veces = alumnos.count("Blas")
print(f"count : {blas_veces}")

# Index -> Devuelve la posicion (indice) del valor a buscar

posicion_christian  = alumnos.index("Cristian")
print (f"La posición (indice) de Cristian es : {posicion_christian}")


###########################################################
# No es recomendable hacer esto

# Convertir tupla a una lista 
print(f"Tipo de dato : {type(alumnos)}")
print(alumnos)

alumnos_lista = list(alumnos)
alumnos_lista.append("Emily")

alumnos = tuple (alumnos_lista)
print(f"Tipo de Dato : {type(alumnos)}")
print(alumnos)

###########################################################

# Diccionario -> clave - valor (key => value)

persona = {
    "nombres" : "Nixon Guevara", 
    "edad" : 20,
    "hobbies" : ["Futbol", "Nadar", "Jugar"]
}

# Acceder a sus valores

#? No los llamas con punto como Js (persona.nombre) sino con corchete {persona['nombres']}

print(f"Nombre de la persona : {persona['nombres']}")

print(f"Segundo Hobby : {persona['hobbies'][1]}") # Accede al segundo valor , por el indice

# 2° Forma

# Nos da error porque no existe cursos
# print(persona["cursos"])


# get -> Busca el valor con la clave mencionada y retornara el valor
# Ya no da error aolo devuelve el valor null
print(persona.get("cursos"))























































