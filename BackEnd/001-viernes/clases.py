# Clase -> class
# PascalCase

class Persona:
    # nombre = ""
    # apellidos = ""
    # edad = ""    
#? Constructor
    def __init__(self, nombre, apellidos):
        self.nombre = ""
        self.apellidos = ""
        self.edad = ""
        self.__duenio = ""

    # Metodos
    # Metodo de clase
    # Metodo de instancia
    def saludo(self):
        print("Hola me llamo {self.nombre} {self.apellidos}")



#? Funcion , esta fuera de una clase
#? Metodo , es una funcion que esta dentro de una clase


# Instancia
# Variable -> objeto
alfredo = Persona ("Alfredo","Rocca")
# alfredo.nombre = "Alfredo"
# alfredo.apellidos = "Rocca"
print(alfredo.apellidos)

oscar = Persona("Oscar", " Jara")
# oscar.nombre = "Oscar"
# oscar.apellidos = "Jara"
print(oscar.apellidos)



class Mascota:
    def __init__(self, nombre, raza, color):
        self.nombre =  nombre
        self.raza = raza
        self.color = color
        self.__duenio = ""

dino = Mascota("Dino", "Frenchie", "Vaquita")
print(dino.nombre)


# Segunda forma 
# Decoradores

@property
def duenio(self):
    return self.__duenio

@duenio.setter
def duenio(self, duenio):
    self.__duenio = duenio 

def __metodoPrivado(self):
    print("Hola")