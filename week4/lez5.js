let currentId = 1

        function makeUser( n ) {
            return { 
                id: currentId++, 
                name: n,
                sayHello: function() {
                    console.log( 
                        `Ciao, sono l'utente con id #${this.id} e mi chiamo ${this.name}`
                     )
                }  
            }
        }

        const users = [
            makeUser('mario rossi'), 
            makeUser('luigi verdi'), 
            makeUser('daisy yellow'),
            makeUser('peach pink')
        ]

        users.forEach(function(user) {
            //user.sayHello()
        })
        
        // questa funzione recupera e restituisce un utente avente un id
        // id: number  ->  user || undefined
        function getUserById( id ) {
            for(let i = 0; i < users.length; i++) {
                if( users[i].id == id )
                    return users[i]
            }
        }

        const elUserId = document.getElementById('user_id')
        document.getElementById('hello').addEventListener('click', function() {
            const id = parseInt(elUserId.value)

            try {
                const user = getUserById(id)
                user.sayHello()
            }
            catch(err) {
                console.log( 'Errore!' )
            }
        })

        //--------------------------------------------------------------------------

        function Book( title, author, genre ) {
            this.title = title
            this.author = author
            this.genre = genre

            this.printInfo = function() {
                console.log( 
                    `Titolo: ${this.title} | Autore: ${this.author} | Genere: ${this.genre}` 
                );
            }
        }

        const b1 = new Book('Il vecchio e il mare', 'ernest hemingway', 'avventura')
        const b2 = new Book('Intelligenza emotiva', 'daniel goleman', 'psicologia')

        console.log( b1.title )
        console.log( b2.author )

        b1.printInfo()

        class Book2 {
            constructor(title, author, genre) {
                this.title = title
                this.author = author
                this.genre = genre
            }

            printInfo() {
                console.log( 
                    `Titolo: ${this.title} | Autore: ${this.author} | Genere: ${this.genre}` 
                );
            }
        }

        const b3 = new Book2('Impara Javascript', 'luigi verdi', 'programmazione')
        b3.printInfo()