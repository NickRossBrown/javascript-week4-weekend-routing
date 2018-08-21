export class Album {
  constructor (public title: string, public artist: string, public description: string) { }

  // This is because Firebase will now assign each new Album an id automatically. We no longer have to do this in our application. So, we'll remove the id property from the Album model now, too:
}
