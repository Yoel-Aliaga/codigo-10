# Primer dia con Git/GitHub

Comando para configurar el usuario y correo 

lista de comando Git

* Para poder ver la version de Git

```bash
git --version
```

*Para configurar el correo

```bash
git config --global user.email "email"
```
*Para configurar el username

```bash
git config --global user.username "username"
```

*Indica el tipo de lenguaje para dar configuracion en este caso js

```js
console.log("")
```

* Sirve para poder empezar a usar en control de versiones (Git) en nuestra carpeta

```bash
git init
```
* Para ver el estado de nuestros cambios

```bash
git status
```
* Guarda todos los archivos 

```bash
git add .
```
* Guarda un archivo especifico 

```bash
git add READ.md
```
* Para crear el registro de los cambios realizados en el MAIN

```bash
git commit -m "Creando mi primer commit"
```

* Muestra el historial de cambios guardados en commit con su ID

```bash
git log
```

* Muestra los cambios especificos utilizando el ID 

```bash
git show "ID del commit"
```
* Conecta en remotamente el proyecto

```bash
git remote add origin https://github.com/Yoel-Aliaga/codigo-10.git
```
* Para ver a que url esta vinculado nuestro proyecto

```bash
git remote -v
```
* Cambiar de url

```bash
git remote set-url origin  url
```

* Sube los archivos a GitHub
```bash
git push origin main
```

