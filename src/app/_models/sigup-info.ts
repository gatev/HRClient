export class SignUpInfo {
  name: string;
  username: string;
  email: string;
  role = ['user'];
  password: string;
  phone: string;
  position: string;
  sex: string;

  constructor(name: string, username: string, email: string, password: string, phone: string, position: string) {
      this.name = name;
      this.username = 'Default';
      this.email = email;
      this.password = 'secret';
      this.phone = phone;
      this.position = position;
      if (this.position === 'Manager' || this.position === 'Team Leader') {
        this.role = ['admin'];
      }
      this.sex = 'm';
  }
}
