# function nombre(parametros){} -> En Js

# Función en Python , siempre en camelCase
# def nombreFuncion():
#     pass


def saludar(nombre):
    print(f"Hola {nombre}, como estas?")


saludar("Carlos")

# Funcion usando parametros por defecto


def saludar(nombre="Alfredo"):
    print(f"Hola {nombre}")


# Llamar con el nombre del argumento
saludar(nombre="Juan")

# Ejercicio 1
# Crea una funcion que reciba dos numeros donde el primer numero tenga un valor 10 por defecto
# Si la suma de dichos numeros es par mostrar la mitad de la suma
# Y si no lo es mostrar la suma


def ejercicioUno(num2="", num1=10):
    suma = num1 + num2
    if suma % 2 == 0:
        print(suma/2)
    else:
        print(suma)


ejercicioUno(11)


# Funciones con multiparametros
# *args -> nos ayuda a recibir valores infinitos como argumentos,
# retornara o se obtendra una tupla con todos los valores
# Ejm: nombreFuncion("Valor1","Valor2",...., "ValorX")

def alumnosInscritos(*args):
    for arg in args:
        print(arg)


alumnosInscritos("Alfredo", "Arnold", "Carlos", "Cristian", "Diego", "Elvia")


# **kwargs -> nombreFuncion(valoruno=1,valordos=2,.... , valorx=x)
# Debes definir el nombre del parametro y el valor del parametro

def cursosDeAlumnos(**kwargs):
    print(kwargs)


cursosDeAlumnos(curso_uno="Algebra", curso_doo="Aritmetica",
                curso_tres="Comunicacion")
