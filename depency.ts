// Ejemplo antes de aplicar DIP
class UserRepository {
  getAllUsers() {
    // Recuperar todos los usuarios de la base de datos
  }

  getUserById(id) {
    // Recuperar un usuario de la base de datos por su ID
  }

  saveUser(user) {
    // Guardar un usuario en la base de datos
  }
}

class UserService {
  userRepository: UserRepository
  constructor() {
    this.userRepository = new UserRepository();
  }

  getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  getUserById(id) {
    return this.userRepository.getUserById(id);
  }

  saveUser(user) {
    return this.userRepository.saveUser(user);
  }
}

// Ejemplo después de aplicar DIP
interface UserRepository {
  getAllUsers();
  getUserById(id: string);
  saveUser(user);
}

class UserRepositoryImpl implements UserRepository {
  getAllUsers() {
    // Recuperar todos los usuarios de la base de datos
  }

  getUserById(id) {
    // Recuperar un usuario de la base de datos por su ID
  }

  saveUser(user) {
    // Guardar un usuario en la base de datos
  }
}

class UserService {
  constructor(private userRepository: UserRepository) {}

  getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  getUserById(id) {
    return this.userRepository.getUserById(id);
  }

  saveUser(user) {
    return this.userRepository.saveUser(user);
  }
}
