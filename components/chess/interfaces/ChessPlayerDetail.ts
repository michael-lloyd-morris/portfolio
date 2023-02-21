export default interface ChessPlayerDetail {
  id:string,
  username?:string,
  profile?: {
    firstName?:string,
    lastName?:string,
    country?:string,
    fideRating?:string
  },
  url?:string,
  createdAt:number,
  seenAt:number
}