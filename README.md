# LIFE IS THE GAME

Prueba tecnica para desarrollador backend, un aplicativo en Node Js usando express que regrese los 
datos solicitados en formato JSON

## Instalación

Usando el instalador de paquetes NPM 

```bash
npm install
```

## Uso

Mediante un software que permite las peticiones http se pueden utilizar los siguientes endpoints
### Obtener todos los items

```javascript
http://localhost:3000/rarity
```

Este endpoint muestra informaicion de los primeros 100 items, ademas se encuentra paginado, para poder moverse entre las paginas seria como en el ejemplo siguiente

```javascript
http://localhost:3000/rarity?page=1
```
### Obtener todos los items por rareza 

```javascript
http://localhost:3000/rarity/:rare
```
Donde ":rare" viene siendo el campo por el cual se filtraran los datos
Ejemplo: 
```javascript
http://localhost:3000/rarity/Legendary
```

Este endpoint tambien se encuentra paginado, devolviendo los primeros 100 items, ademas se puede cambiar el limite de datos que se muestran, de igual manera que el anterior se permite navegar entre paginas

### Obtener la cantidad de items existente por cada CardSet

```javascript
http://localhost:3000/cardSet
```


## Autor
Leonardo Valencia Santana