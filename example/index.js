function main() {

  let items = [
    {
      ait: {
        emitidos: 1,
        cancelados: 2
      }
    },
    { 
      ait: {
        emitidos: 2,
        cancelados: 1
      }
    }
  ]

  console.log(items.length)
  
  for(i in items) {
    console.log(`Cancelados: ${items[i].ait.cancelados}`)
  }
}

main()