# Try Except

try:    
    division = 5 / 0
    print(division)
except Exception as err :
    print(err.__class__)
    print(f"Ocurrio un error porque se esta dividiendo con 0 : {err}")


