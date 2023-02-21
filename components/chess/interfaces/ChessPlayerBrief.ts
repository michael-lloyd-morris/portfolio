export default interface ChessPlayerBrief {
  id:string,
  perfs?: {
    bullet?: {
      progress:number,
      rating:number
    },
    blitz?: {
      progress:number,
      rating:number
    }
    rapid?: {
      progress:number,
      rating:number
    }
    classical?: {
      progress:number,
      rating:number
    }
    ultraBullet?: {
      progress:number,
      rating:number
    }
    chess960?: {
      progress:number,
      rating:number
    }
    crazyhouse?: {
      progress:number,
      rating:number
    }
    antichess?: {
      progress:number,
      rating:number
    }
    atomic?: {
      progress:number,
      rating:number
    }
    horde?: {
      progress:number,
      rating:number
    }
    kingOfTheHill?: {
      progress:number,
      rating:number
    }
    racingKings?: {
      progress:number,
      rating:number
    }
    threeCheck?: {
      progress:number,
      rating:number
    }
  },
  title:string,
  username:string
}