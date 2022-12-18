#  If - Else

numero = 10 

#if numero == 10 :
#    pass                # pass Permite rellenar la condicional para que no de error y mas adelante agregar el codigo
#else :
#    pass




edad = int(input("Ingresa tu edad : "))

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")

# Operador ternario
## En Js  edad >= 18 ? "Eres mayor de edd " : "Eres menor de edad"

## En Python se pone la condicion y el valor verdadero a la izquierda y el valor falso a la derecha
print("Eres mayor de edad" if edad >= 18 else "Eres menor de edad")