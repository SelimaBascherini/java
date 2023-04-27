function fn1( x, y ) {
    if( typeof x != 'number' || typeof y != 'number' ) {
      return;
    }
  
    return x + y
  }
  
  const r1 = fn1(10, 4)
  console.log( r1 )
  console.log( fn1('ciao', ' js') )

  //-------------------------------------------------------

  function fn1(a /* array */) {
    if( !Array.isArray(a) ) {
      console.log('Errore! Il dato non è un array')
      return
    }
  
    for(let i = 0; i < a.length; i++) {
      console.log( 'iterazione ' + i + ': ' + a[i] )
    }
  }
  
  fn1( 10 )
  fn1( [10, 20, 30] )
  fn1( ['ciao', 'js', 10, 30] )
  function fn1(/* void /) / : array / {
     return [10, 20, 30, 40]
  }
  
  const a1 / : array */ = fn1()
  console.log( a1[1] )

  //-----------------------------------------------------------------

  let id = 1

function makePerson( n, ln ) {
  return {'id': id++, 'name': n, 'lastname': ln, 'race': 'human'}
}

const people = [
makePerson('mario', 'rossi'), 
makePerson('luigi', 'verdi'), 
makePerson('peach', 'pink'), 
makePerson('anna', 'bianchi')
]

people.forEach(function(el) {
  console.log( ID matricola: ${el.id} Nome: ${el.name} Cognome: ${el.lastname} Race: ${el.race} )
})

function getPersonById( _id, arr ) {
  for(let i = 0; i < arr.length; i++) {
    if( arr[i].id == _id ) 
      return arr[i]
  }
}

console.log( getPersonById(1, people) )