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
                  }
     }
     
     // FUNCTIONS TO IMPLEMENT:
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     
     var printPlaylistDetails = function(playlistObj) {
            return `${playlistObj.id}: ${playlistObj.name} - ${playlistObj.tracks.length} tracks`;
     } 
     
     var printTrackDetails = function(trackObj) {
            return `${trackObj.id}: ${trackObj.name} by ${trackObj.artist} ${trackObj.album}`;
     }
     //printTrackDetails()
     
     var printPlaylists = function () {
            for (var playlistId in library.playlists) {
                   console.log(printPlaylistDetails(library.playlists[playlistId]))
            }
         
     }
     //printPlaylists()
     
     // prints a list of all tracks, in the form:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     
     
     var printTracks = function () {
            for (var tracksId in library.tracks) {
                   console.log(printTrackDetails(library.tracks[tracksId]))
            }
            
     } 
     //printTracks()
     
     
     
     // prints a list of tracks for a given playlist, in the form:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)

     var getTrackId = function(trackId) {
            return library.tracks[trackId]
     }
     
     var printPlaylist = function (playlistId) {
            var playlist = library.playlists[playlistId]
            console.log(printPlaylistDetails(playlist))
            for (var trackId of playlist.tracks){
                   var track = getTrackId(trackId)
                   console.log(printTrackDetails(track));
            }


       //for (var playlistId in library.playlists) {
         //     console.log(printPlaylistDetails(library.playlists[playlistId])) && console.log(printTrackDetails(library.tracks[library.playlists[playlistId].tracks]))
       }
   //  }
     //console.log(printTrackDetails(library.tracks[tracksId]))
// }
     
     //printPlaylist("p01")
     // adds an existing track to an existing playlist
     
     var addTrackToPlaylist = function (trackId, playlistId) {
            library.playlists[playlistId].tracks.push(trackId)
     
     }
     
     
     // generates a unique id
     // (use this for addTrack and addPlaylist)
     
     var uid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }
     
     
     // adds a track to the library
     
     var addTrack = function (name, artist, album) {
            var addTrack = {} 
            addTrack.id = uid()
            addTrack.name = name
            addTrack.artist = artist
            addTrack.album = album
            //add track is working need to add it to track to list
            Object.assign(library.tracks, addTrack)
            
            //console.log(library.tracks)
     }
     //console.log(addTrack)
     
//addTrack( "Matt ", "Jam", "happy")

     // adds a playlist to the library
     
     var addPlaylist = function (name) {
            var addPlaylist = {}
            addPlaylist.id = "p" + uid() + ":"
            addPlaylist.name = name
            addPlaylist.tracks = []
            Object.assign(library.playlists, addPlaylist)
     console.log(library.playlists)
     } 
addPlaylist("Matt")
     
     
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri") 
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     
     var printSearchResults = function(query) {
     
     }