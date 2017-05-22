export class Movie {
  constructor(
    public Title: string,
    public imdbID: string,
    public Year: number,
    // public type: string,
    public Poster: string
    ) { }

    clone(){
    	return new Movie(this.Title, this.imdbID, this.Year, this.Poster);
    }
}
