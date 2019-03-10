export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  face: string;
  sex: number;
  sign: string;

  constructor(face?: string) {
    this.face = face;
  }
}
