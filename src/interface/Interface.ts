export interface IContact{
  id: number,
  nom: string,
  prenom: string,
  dateNaissance: Date,
  email: string,
  pere?:IContact,
  mere?:IContact
}