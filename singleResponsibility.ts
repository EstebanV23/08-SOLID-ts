class ModelUser {
  urlConexion: string
  constructor (urlConexion: string) {
    this.urlConexion = urlConexion
  }

  getUser (user: string) :void {
    // No cumple Single Responsibility porque está haciendo cosas que no le corresponden a él, como validar datos, esta validación de datos debería estar en otra clase que solamente haga este proposito
    const regExp = /^a/
    const regExp2 = /^b/
    if (!regExp.test(user)) throw new Error('The initial letter must be diferent of a')
    if (!regExp2.test(user)) throw new Error('The initial letter must be diferent of a')
    
    // Ademas se conecta a la base de datos y hace un query a ella
    mysql.query(this.urlConexion, 'Select * from users where username = ' + user)
  }
}