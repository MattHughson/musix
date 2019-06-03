var library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               },
               getTrackId: function(trackId) {
                return this.tracks[trackId]
            },
            printPlaylistDetails: function(playlistObj) {
                return `${this.playlists[playlistObj].id}: ${this.playlists[playlistObj].name} - ${this.playlists[playlistObj].tracks.length} tracks`;
            },
            printTrackDetails: function(trackObj) {
                return `${this.tracks[trackObj].id}: ${this.tracks[trackObj].name} by ${this.tracks[trackObj].artist} ${this.tracks[trackObj].album}`; 
         }, 
         printPlaylists: function () {
           var buffer = ""
            for (var playlistId in this.playlists) {
               buffer += this.printPlaylistDetails(this.playlists[playlistId]) + " "
            }
         return buffer
     },
     printTracks: function () {
        for (var tracksId in this.tracks) {
               console.log(this.printTrackDetails(tracksId))
               //do  not console this function
        }
    },
    printPlaylist: function (playlistId) {
        console.log(this.printPlaylistDetails(playlistId))
        for (var trackId of this.playlists[playlistId].tracks){
               console.log(this.printTrackDetails(trackId));
        } 
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId)

}, uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var addTrack = {} 
    addTrack.id = this.uid()
    addTrack.name = name
    addTrack.artist = artist
    addTrack.album = album
    //add track is working need to add it to track to list
    Object.assign(this.tracks, addTrack)
    
    //console.log(library.tracks)
},
var addPlaylist = function (name) {
    var addPlaylist = {}
    addPlaylist.id = "p" + uid() + ":"
    addPlaylist.name = name
    addPlaylist.tracks = []
    Object.assign(this.playlists, addPlaylist)

} 

  

}

 library.addPlaylist("matt")
 console.log(library.playlists)