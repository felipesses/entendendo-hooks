# Hooks condicionais

Todos componentes no react são funções (ou classes);

```js
// 1. Tínhamos o estado `isModalOpen` como true
function MeuComponente(props, 1, true, 3, 2) {}

// 2. Quando mudamos o `isModalOpen` para false
function MeuComponente(props, 1, false, 2) {}


// Propriedades e hooks
```

# Chamada de state sequenciais

```js
// 1. Tínhamos o valor de counter como 1
function MeuComponente(props, 1) {
    setCounter(1 + 1)
    setCounter(1 + 1)
    setCounter(1 + 1)
    setCounter(1 + 1)
    setCounter(1 + 1)
}

// 1. Mudamos o valor de counter para `counter + 1`
function MeuComponente(props, 2) {
    setCounter(2 + 1)
    setCounter(2 + 1)
    setCounter(2 + 1)
    setCounter(2 + 1)
    setCounter(2 + 1)
}

// App(2) => setCounter(3)


// Passando callback function, o React consegue entender que o parametro da função não é um valor primitivo, e sim uma função. Então ele vai chamar a função de forma sequencial.

function MeuComponente(props, 1) {
    setCounter(state => state + 1)
    setCounter(state => state + 1)
    setCounter(state => state + 1)
    setCounter(state => state + 1)
    setCounter(state => state + 1)
}

// Resultado: 5

```
